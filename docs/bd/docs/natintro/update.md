## 更新接口【action=update】
获取更新列表，更新是针对于同一款应用（即packagename相同），当出现更高版本号时，则认为需要更新。

## 请求说明 ##
### URL ###
> http://m.baidu.com/api?action=update

### 请求方式 ###
> <red>POST</red>
更新采用的是HTTP-Post服务，同时，需要将Content Type设置为application/x-www-form-urlencoded

### 支持格式 ###
> JSON/XML (默认XML)

### 请求参数 ###
请求参数由两部分组成：
##### GET参数 #####
|字段名称  | 备注 | 是否必选
| ------------ | ------------ | ------------
| from   | 来源，合作方标识，由百度BD提供 | <red>必选</red>
| token  | 标记，由百度分配的唯一的token，用于验证请求方的合法性 | <red>必选</red>
| type  |服务类别，type=app，对于android，type的值为app | <red>必选</red>
| pver  | 协议版本（此版本固定为3） | <red>必选</red>
| ua    |终端分辨率，机型信息|    可选
| uid   |用户唯一标识 |可选
|bdi_mac    |无线网卡mac地址| 可选
|bdi_cid    |基站id   |可选
|bdi_bear   |联网类型   |可选
|class |检索资源类型，g只检索游戏，s只检索软件，默认为混合检|  可选
|dpi    |分辨率，宽_高，如320_640，用于适配  |可选
|apilevel|  API Level，用于适配| 可选

<blockquote class="bs-callout bs-callout-warning" style="padding:10px"><h4>注意</h4>为更好进行机型和网络适配，对于所有请求参数，尽可能携带可选参数</blockquote>

##### POST参数 #####
|字段名称  | 备注 | 是否必选
| ------------ | ------------ | ------------
| data   | 应用信息json打包 | <red>必选</red>

<blockquote class="bs-callout bs-callout-warning" style="padding:10px"><h4>注意</h4><red>单次上报应用个数最大值为80个</red></blockquote>

<tab></tab>除了上述get参数外，还必须通过post方式提交需升级应用的信息。提交的应用信息由package、versioncode、signmd5和md5四部分组成。应用信息采用json方式打包，一次可提交一个或者多个应用。如掌上百度和手机QQ两个应用时，信息打包成json后：
```
[
    {
        "package": "bdmobile.android.app",
        "versioncode": "16783100",
        "signmd5": "345345",
        "md5": "XXXXXXXXXXXX"
    },
    {
        "package": "com.tencent.qq",
        "versioncode": "61",
        "signmd5": "23443564",
        "md5": "XXXXXXXXXXXX"
    }
    ...
]
```
其中，掌上百度的package为bdmobile.android.app，versioncode为16783100，signmd5为345345；手机QQ的package为com.tencent.qq，versioncode为61，signmd5为23443564。package、versioncode直接读取，signmd5生成算法请参见附录一，md5指当前应用安装包文件的md5签名，需小写。
<tab></tab>更新接口的返回数据，只包括有更新的应用。如一次提交了10个应用，其中5个应用有新版本，则结果里面只包含有新版本的5个应用。只有上传了md5的情况下，才可能返回省流量更新包地址。省流量更新包如何使用，可联系百度应用提供技术支持。如未返回省流量更新包或者地址为空是，请使用完整包地址url即可。

## 返回结果 ##
### XML示例 ###
```xml
<?xml version="1.0" encoding="utf-8"?>
<response>
    <statuscode>0</statuscode>
    <statusmessage>done</statusmessage>
    <result>
        <apps>
            <app>
                <sname><![CDATA[掌上百度]]></sname>
                <versionname>1.0.23.18</versionname>
                <package>bdmobile.android.app</package>
                <versioncode>16783122</versioncode>
                <url>http://m.baidu.com/api?action=redirect&token=****from=****type=ap
                p&blink=http%3A%2F%2Fgdown.baidu.com%2Fdata%2Fwisegame%
                2F97804c11367e6c10%2Fzhangshangbaidu.apk</url>
                <patch>http://m.baidu.com/api?action=redirect&token=****from=****type=app&blink=http%3A%2F%2Fgdown.baidu.com%2Fdata%2Fwisegame%
                2F97804c11367e6c10%2Fzhangshangbaidu.patch</patch>
                <patch_size>35241</patch_size>
            </app>
            ……
        </apps>
    </result>
</response>
```

### 返回字段说明 ###
----------
| 字段名称   | 类型   | 说明
| ------------ | ------------ | ------------
| sname | string | 应用名称
| versionname  | string | 版本名称
| package | string | 包名称
| versioncode| int | 版本code
| url| string | 下载链接
| patch| string | 省流量更新包url(如果有的话)
| patch_size| int | 省流量更新包大小(如果有的话)
| signmd5| string | 全包签名
| md5| string | 全包MD5（可以用原包和省流量包合并后的md5进行对比）
| updatetime| int | 更新时间
| size| int | 包大小
| changelog| string | 更新说明

### 错误示例 ###
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<response>
    <statuscode>108</statuscode>
    <statusmessage>[from] , param is signed in a wrong type</statusmessage>
</response>
```
### 错误说明 ###
参见 [附录4》返回码对照表](/api?bdi_docs=1&action=intro&source=intro_extrainfo4&cur=natintro "附录4》返回码对照表")
