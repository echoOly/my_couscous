## 推荐接口【action=rec】
获取推荐应用列表

## 请求说明 ##
### URL ###
> http://m.baidu.com/api?action=rec

### 请求方式 ###
> GET

### 支持格式 ###
> JSON/XML (默认XML)

### 请求参数 ###
获取指定应用的推荐列表可通过docid和package两种方式：
（一）、通过docid，请求参数如下表所示：

|字段名称  | 备注 | 是否必选
| ------------ | ------------ | ------------
| from   | 来源，合作方标识，由百度BD提供 | <red>必选</red>
| token  | 标记，由百度分配的唯一的token，用于验证请求方的合法性 | <red>必选</red>
| type  |服务类别，type=app，对于android，type的值为app | <red>必选</red>
|docid  |应用ID   |<red>必选</red>
|pver   |协议版本（此版本固定为3）  |<red>必选</red>
| ua   | 终端分辨率，机型信息 | 可选
| uid  | 用户唯一标识 | 可选
| bdi_mac  |无线网卡mac地址 | 可选
| bdi_cid  | 基站id | 可选
| bdi_bear | 联网类型 | 可选
| dpi|  分辨率，宽_高，如320_640，用于适配   |可选
|apileve|   API Level，用于适配 | 可选
（二）、通过package，请求参数如下表所示：

|字段名称  | 备注 | 是否必选
| ------------ | ------------ | ------------
| from   | 来源，合作方标识，由百度BD提供 | <red>必选</red>
| token  | 标记，由百度分配的唯一的token，用于验证请求方的合法性 | <red>必选</red>
| type  |服务类别，type=app，对于android，type的值为app | <red>必选</red>
|package|   apk的包名|<red>必选</red>
|pver   |协议版本（此版本固定为3）  |<red>必选</red>
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
        <apps>
            <sname>
                <!--[CDATA[ 爱奇艺 ]]-->
            </sname>
            <size>21093963</size>
            <download_url>
                <!--[CDATA[ http://m.baidu.com/api?action=redirect&token=yuntongdao&from=1001714b&type=app&dltype=new&tj=soft_9338638_3387500632_%E7%88%B1%E5%A5%87%E8%89%BA&blink=5839687474703a2f2f612e67646f776e2e62616964752e636f6d2f646174612f7769736567616d652f663533346162346661383538613833392f6169716979695f38303734302e61706b3f66726f6d3d61313130313457&crversion=1&f=_OvOfgaM2og2u2ibgavv8_yFvzgPu28tgu29iga_vz_Ku28Fgavr8_aDvf_pa2zGguvGi_uZ2igau2iZ_u2wigum2i_Eu281_4vX8_4wv8_Oa282gy2BzgaX2o_su2i__avTigyhv8_favit_u298gatv8_Ku281gav58_ybv8g4av8U_yvs8_yB2zgJ4v8WgOvltgPWvz_yavfD_avJ8_y228g5aviUgu258gab2tglP28U_42m8_umvf_Ru2fQ_uvwiguZ2igauvim_uvOi_us2fgCu2is_P2Ni_advi_ra2oUgPvpzgaDvz_B42ingO2liga72zgsavzbgPvp8g4U28_JuvirA&refp=action_rec
                ]]-->
            </download_url>
            <icon>
                <!--[CDATA[ http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=b1eedffc599b2ee01e2a4c5d8e935b88&ref=http%3A%2F%2Ff.hiphotos.bdimg.com&src=http%3A%2F%2Ff.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F59292df5e0fe9925c120efa333a85edf8db17111.jpg
                ]]-->
            </icon>
            <versionname>7.4</versionname>
            <updatetime>2016-05-05</updatetime>
        </apps>
        <apps>
            <sname>
                <!--[CDATA[ 9块9包邮汇 ]]-->
            </sname>
            <size>3829653</size>
            <download_url>
                <!--[CDATA[ http://m.baidu.com/api?action=redirect&token=yuntongdao&from=1001714b&type=app&dltype=new&tj=soft_8919870_1161768_9%E5%9D%979%E5%8C%85%E9%82%AE%E6%B1%87&blink=5839687474703a2f2f612e67646f776e2e62616964752e636f6d2f646174612f7769736567616d652f303235613865623237396531326465392f396b7561693962616f796f756875695f35342e61706b3f66726f6d3d61313130313457&crversion=1&f=_OvOfgaM2og2u2ibgavv8_yFvzgPu28tgu29iga_vz_Ku28Fgavr8_aDvf_pa2zGguvGi_uZ2igau2iZ_u2wigum2i_Eu281_4vX8_4w28_Aa282gy2BzgaX2o_su2i__avTigyhv8_favit_u298gatv8_Ku281gav58_ybv8g4av8U_yvs8_yB2zgJy2z7gav0tgPDvfgpyv8-gyv0zgOLv8_r4v8UgavltgyDvtgpa2iYgavviguD28gsa2tDgP2p8_4w28_muvfQ_u2Ef_usvigxu2iZguvmi_uQvi_Ru2fQgu2Mi_P32i_CaviU_a2vogPDvzg0avzb_422igOY2igpa2zGgavszgPDv8gJ428U_uv8iAqdB&refp=action_rec
                ]]-->
            </download_url>
            <icon>
                <!--[CDATA[ http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=a517152de32f144c4be1cafaff7f8e08&ref=http%3A%2F%2Fa.hiphotos.bdimg.com&src=http%3A%2F%2Fa.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F462dd42a2834349bbb6668eaceea15ce36d3be79.jpg
                ]]-->
            </icon>
            <versionname>2.66</versionname>
            <updatetime>2016-02-25</updatetime>
        </apps>
            ...
    </result>
</response>
```
### 返回字段说明 ###
----------
### 返回字段说明 ###
----------
| 字段名称   | 说明
| ------------ | ------------
| sname | 应用名称
| docid	| 应用唯一id
| size| 资源包的大小
| updatetime| 更新时间/应用发布的时间
| download_url	| 资源包的下载地址
| icon	| 应用图标
| versioncode	| 版本code
| package	| 包名称
| versionname| 版本号
| brief | 简介
| type | 类型 soft/game
| iconhdpi | 应用图标（72*72
| signmd5| signmd5
| md5 | md5
|packageid | 包id
|icon_source| 应用原图
|strDownload| 下载量 如1650万


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
