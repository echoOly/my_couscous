## 内容接口【action=search&[docid/package]=xxx】
获取指定应用内容详细信息

## 请求说明 ##
### URL ###
> http://m.baidu.com/api?action=search&[docid/package]=xxx

### 请求方式 ###
> GET

### 支持格式 ###
> JSON/XML (默认XML)

### 请求参数 ###
获取指定应用内容详细信息可通过[docid]和[package、versioncode、signmd5]两种方式两种方式：
（一）、通过docid，请求参数如下表所示：

|字段名称  | 备注 | 是否必选
| ------------ | ------------ | ------------
| from   | 来源，合作方标识，由百度BD提供 | <red>必选</red>
| token  | 标记，由百度分配的唯一的token，用于验证请求方的合法性 | <red>必选</red>
| type  |服务类别，type=app，对于android，type的值为app | <red>必选</red>
| docid  |应用ID   |<red>必选</red>
| ua   | 终端分辨率，机型信息 | 可选
| uid  | 用户唯一标识 | 可选
| bdi_mac  |无线网卡mac地址 | 可选
| bdi_cid  | 基站id | 可选
| bdi_bear | 联网类型 | 可选
| dpi|  分辨率，宽_高，如320_640，用于适配   |可选
|apileve|   API Level，用于适配 | 可选
（二）、通过package、versioncode和signmd5来获取内容信息，其中package、versioncode为必选参数，signmd5为可选参数。signmd5不作强制性匹配，signmd5的算法请参见附录一。请求参数如下表所示：

|字段名称  | 备注 | 是否必选
| ------------ | ------------ | ------------
| from   | 来源，合作方标识，由百度BD提供 | <red>必选</red>
| token  | 标记，由百度分配的唯一的token，用于验证请求方的合法性 | <red>必选</red>
| type  |服务类别，type=app，对于android，type的值为app | <red>必选</red>
|package|   apk的包名|<red>必选</red>
|versioncode |Apk版本号|<red>必选</red>
| signmd5   | signmd5 | 可选
| ua   | 终端分辨率，机型信息 | 可选
| uid  | 用户唯一标识 | 可选
| bdi_mac  |无线网卡mac地址 | 可选
| bdi_cid  | 基站id | 可选
| bdi_bear | 联网类型 | 可选
| dpi|  分辨率，宽_高，如320_640，用于适配   |可选
|apileve|   API Level，用于适配 | 可选

<blockquote class="bs-callout bs-callout-warning" style="padding:10px"><h4>注意</h4>为更好进行机型和网络适配，对于所有请求参数，尽可能携带可选参数</blockquote>

## 返回结果 ##
### XML示例 ###
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<response>
    <statuscode>0</statuscode>
    <statusmessage>done</statusmessage>
    <result>
        <app>
            <packageformat>apk</packageformat>
            <versioncode>11</versioncode>
            <cateid>502</cateid>
            <platform></platform>
            <adapi>n</adapi>
            <authentication>n</authentication>
            <iconalading>
                <!--[CDATA[ http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=d6acda7d49d692480b312d564df724e5&ref=http%3A%2F%2Fd.hiphotos.bdimg.com&src=http%3A%2F%2Fd.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F562ac65c10385343104cbdd69513b07ecb808842.jpg
                ]]-->
            </iconalading>
            <docid>8070478</docid>
            <versionname>1.1</versionname>
            <iocnhigh>
                <!--[CDATA[ http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=91137309ae74270fb39e2ef3f1d78905&ref=http%3A%2F%2Fe.hiphotos.bdimg.com&src=http%3A%2F%2Fe.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F06380cd7912397dd55a9a2f35f82b2b7d1a28771.jpg
                ]]-->
            </iocnhigh>
            <changelog>
                <!--[CDATA[ ]]-->
            </changelog>
            <bigmaplink2>
                <!--[CDATA[ http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=ce5f2cb797de34c018a9b85cee3af5ef&ref=http%3A%2F%2Fg.hiphotos.bdimg.com&src=http%3A%2F%2Fg.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2Fee1001e93901213fbee0742b52e736d12e2e9571.jpg
                ]]-->
            </bigmaplink2>
            <type>soft</type>
            <icon>
                <!--[CDATA[ http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=096a182a741b2cf9f0f45041b276f834&ref=http%3A%2F%2Fg.hiphotos.bdimg.com&src=http%3A%2F%2Fg.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2Fb639b6003af33a870fee3aedc05c10385243b542.jpg
                ]]-->
            </icon>
            <download_inner>
                <!--[CDATA[ http://m.baidu.com/api?action=redirect&token=dianxinos&from=1436a&type=app&dltype=new&tj=soft_8070478_1564765_%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C-%E9%97%AA%E7%94%B5%E9%94%81%E5%B1%8F%E4%B8%BB%E9%A2%98&blink=033f687474703a2f2f612e67646f776e2e62616964752e636f6d2f646174612f7769736567616d652f663832616461613165643939383335312f776f64657368696a69657368616e6469616e73756f70696e675f31312e61706b3f66726f6d3d61313130313457&crversion=1
                ]]-->
            </download_inner>
            <smallmaplink2>
                <!--[CDATA[ http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=ce5f2cb797de34c018a9b85cee3af5ef&ref=http%3A%2F%2Fg.hiphotos.bdimg.com&src=http%3A%2F%2Fg.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2Fee1001e93901213fbee0742b52e736d12e2e9571.jpg
                ]]-->
            </smallmaplink2>
            <icon_source>
                <!--[CDATA[ http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=11764eed8602171d8db9fada66abe537&ref=http%3A%2F%2Fg.hiphotos.bdimg.com&src=http%3A%2F%2Fg.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F3043fbf2b21193135ec0c54763380cd790238d42.jpg
                ]]-->
            </icon_source>
            <language>中文</language>
            <signmd5>3016848731</signmd5>
            <fee>未知</fee>
            <description>
                <!--[CDATA[ 来到我的世界！咔咔咔，造个房子~哒哒哒，造个大桥~啪啪啪，造个女朋友！！！还在犹豫什么赶快拿起手中的斧头，创造自己的世界吧~<br-->该主题是闪电锁屏专用主题，需搭配闪电锁屏才能发挥最佳效果，请在下载主题后按引导安装闪电锁屏。<br>闪电锁屏，最好用的锁屏工具，将安全和便捷带给您，并有海量精美主题和壁纸任君挑选，美化您的手机锁屏界面，个性锁屏，漂亮锁屏，即刻拥有！<br>--便捷工具箱--无需解锁即可使用手电筒、计算器、便签、照相机等便捷功能。<br>--及时的通知信息--锁屏界面显示您所关注的通知信息，重要信息第一时间掌握。<br>--安全保护--数字锁、轨迹锁，多种密码保护方式，由你做主。<br>--贴心的关怀--锁屏界面提供3日天气信息，点亮屏幕为您的出行保驾护航。<br>--高效的T9搜索--锁屏界面T9搜索，快速查找打开目标桌面应用、联系人。
        ]]>
            </description>
            <packagesize>1812924</packagesize>
            <package>com.dotool.flashlockscreen.theme.wdsj</package>
            <site>
                <!--[CDATA[ mobileapp.baidu.com ]]-->
            </site>
            <smallmaplink1>
                <!--[CDATA[ http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=d30fb25556e0abfb52346cd89ca57e26&ref=http%3A%2F%2Fh.hiphotos.bdimg.com&src=http%3A%2F%2Fh.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2Fd9a1cd11728b4710f635d83bc5cec3fdfc03232a.jpg
                ]]-->
            </smallmaplink1>
            <releasedate>2015-11-02 13:53:38</releasedate>
            <catename>
                <!--[CDATA[ 主题壁纸 ]]-->
            </catename>
            <bigmaplink1>
                <!--[CDATA[ http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=d30fb25556e0abfb52346cd89ca57e26&ref=http%3A%2F%2Fh.hiphotos.bdimg.com&src=http%3A%2F%2Fh.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2Fd9a1cd11728b4710f635d83bc5cec3fdfc03232a.jpg
                ]]-->
            </bigmaplink1>
            <rating>40</rating>
            <sname>
                <!--[CDATA[ 我的世界-闪电锁屏主题 ]]-->
            </sname>
            <url>
                <!--[CDATA[ http://m.baidu.com/api?action=redirect&token=dianxinos&from=1436a&type=app&dltype=new&tj=soft_8070478_1564765_%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C-%E9%97%AA%E7%94%B5%E9%94%81%E5%B1%8F%E4%B8%BB%E9%A2%98&blink=033f687474703a2f2f612e67646f776e2e62616964752e636f6d2f646174612f7769736567616d652f663832616461613165643939383335312f776f64657368696a69657368616e6469616e73756f70696e675f31312e61706b3f66726f6d3d61313130313457&crversion=1
                ]]-->
            </url>
        </app>
    </result>
</response>
```

### 返回字段说明 ###
----------
参见 [附录4》返回APP字段说明](/api?bdi_docs=1&action=intro&source=natintro_extrainfo4 "附录4》返回APP字段说明")

### 错误示例 ###
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<response>
    <statuscode>108</statuscode>
    <statusmessage>[from] , param is signed in a wrong type</statusmessage>
</response>
```
### 错误说明 ###
参见 [附录4》返回码对照表](/api?bdi_docs=1&action=intro&source=natintro_extrainfo4 "附录4》返回码对照表")