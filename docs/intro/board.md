---
currentMenu: board
---

## 榜单接口【action=board&id=*】
获取某榜单应用列表

## 请求说明 ##
### URL ###
> http://m.baidu.com/api?action=board&id=*

### 请求方式 ###
> GET

### 支持格式 ###
> JSON/XML (默认XML)

### 请求参数 ###
|字段名称  | 备注 | 是否必选
| ------------ | ------------ | ------------
| from   | 来源，合作方标识，由百度BD提供 | <red>必选</red>
| token  | 标记，由百度分配的唯一的token，用于验证请求方的合法性 | <red>必选</red>
| type  |服务类别，type=app，对于android，type的值为app | <red>必选</red>
|id	|榜单编码。参见 [数据接口》榜单列表](/api?bdi_docs=1&action=intro&source=natintro_boardlist "数据接口》榜单列表")|<red>必选</red>
|bdi_imei	|android手机imei号。参见 [附录2》数据加密](/api?bdi_docs=1&action=intro&source=natintro_extrainfo2 "附录2》数据加密")|	<red>必选</red>
|bdi_loc	|客户端所在的城市 例：北京市。（base64处理）|	<red>必选</red>
|bdi_uip	|客户端ip（客户端用户请求ip）	|<red>必选</red>
|bdi_bear	|网络环境（WF/4G/3G/2G）	|<red>必选</red>
|resolution	|手机分辨率 例：720_1280	|<red>必选</red>
|dpi	|屏幕密度 例：320	|<red>必选</red>
|apilevel	|系统api level 例：18（对应android 4.3）	|<red>必选</red>
|os_version	|系统版本号 例：4.3	|<red>必选</red>
|brand	|手机品牌 例：OPSSON	|<red>必选</red>
|model	|手机型号 例：Q1	|<red>必选</red>
|pver	|协议版本（此版本固定为3）	|<red>必选</red>
|sign	|签名，<red>只针对该表的参数签名</red> 参见 [附录3》sign生成算法](/api?bdi_docs=1&action=intro&source=natintro_extrainfo3 "附录3》sign生成算法")	|<red>必选</red>
|uid	|用户唯一标识	|可选
|bdi_mac	|无线网卡mac地址	|可选
|bdi_cid	|基站id	|可选
|bdi_imsi	|android手机imsi号。（base64处理）	|可选
|rn	|每页显示结果数，默认rn=10，最大值为20|	可选
|pn	|偏移量，默认pn=0，即第一页，必须为rn的整数倍	|可选
|ct|	客户端点击时间	|可选
|cname	|客户端(宿主)名称	|可选
|cver	|客户端(宿主)版本号	|可选
|cpack|	客户端(宿主)包名|	可选


<blockquote class="bs-callout bs-callout-warning" style="padding:10px"><h4>注意</h4>为更好进行机型和网络适配，对于所有请求参数，尽可能携带可选参数; <red>参数中包含除字母、数字的字符，都需要进行urlencode</red></blockquote>

## 返回结果 ##
### XML示例 ###
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<response>
    <statuscode>0</statuscode>
    <statusmessage>done</statusmessage>
    <result>
        <pn>0</pn>
        <rn>2</rn>
        <disp_num>300</disp_num>
        <ret_num>2</ret_num>
        <apps>
            <app>
                <sname>
                    <![CDATA[QQ]]>
                </sname>
                <docid>9218568</docid>
                <catename>
                    <![CDATA[社交通讯]]>
                </catename>
                <size>32970900</size>
                <download_url>
                    <![CDATA[http://m.baidu.com/api?action=redirect&token=1014104s&from=1014104s&type=app&dltype=new&tj=soft_9218568_1858121943_QQ&blink=2c3b687474703a2f2f612e67646f776e2e62616964752e636f6d2f646174612f7769736567616d652f366532636433653066323035353731312f51515f3335302e61706b3f66726f6d3d61313130311757&crversion=1&f=g42mzgaG2og2u2ibgavv8_yFvzgPu28tgu29iga_vz_Ka28F_yvV8_ab2ig0P28U_4vm8_uQvigFuvim_u2l8_4yv8_s4v8Q_u2p8gu828_vyvtDgyv08g4F2z_2uvfD_avpi_ybv8gmyvtDgavJz_ucviQVA8apB&refp=action_board@id_1]]>
                </download_url>
                <icon>
                    <![CDATA[http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=f850ead59b38f1911ab14cb75ac713c0&ref=http%3A%2F%2Fd.hiphotos.bdimg.com&src=http%3A%2F%2Fd.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F0e224f4a20a44623bac08fce9f22720e0cf3d710.jpg]]>
                </icon>
                <versionname>6.3.1</versionname>
                <updatetime>2016-04-11</updatetime>
                <icon_source>
                    <![CDATA[http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=96d75fe8a5033f6c57efa5b3bd705d3a&ref=http%3A%2F%2Ff.hiphotos.bdimg.com&src=http%3A%2F%2Ff.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F0f81800a19d8bc3e941d2c66858ba61ea8d34500.jpg]]>
                </icon_source>
                <adv_item>source+NATURAL@boardid+30753@pos+1@terminal_type+client</adv_item>
            </app>
            ...
        </apps>
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
