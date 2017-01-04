## 下载完成回调 ##
对于商业合作三方在下载应用完成后，需回调此接口，完成一次计费操作。

## 请求说明 ##
### URL ###
> 应用数据中提供的回调地址（即字段dl_callback值），加上下面的请求参数。

### 请求方式 ###
> GET & POST

### 请求参数 ###

##### GET 字段：

|字段名称  | 备注 | 是否必选
| ------------ | ------------ | ------------
|bdi_imei	|android手机imei号。参见 [附录2》数据加密](/api?bdi_docs=1&action=intro&source=intro_extrainfo2 "附录2》数据加密")|	<red>必选</red>
|bdi_loc	|客户端所在的城市 例：北京市。（base64处理）|	<red>必选</red>
|bdi_uip	|客户端ip（客户端用户请求ip）	|<red>必选</red>
|bdi_bear	|网络环境（WF/4G/3G/2G）	|<red>必选</red>
|resolution	|手机分辨率 例：720_1280	|<red>必选</red>
|apilevel	|系统api level 例：18（对应android 4.3）	|<red>必选</red>
|os_version	|系统版本号 例：4.3	|<red>必选</red>
|brand	|手机品牌 例：OPSSON	|<red>必选</red>
|model	|手机型号 例：Q1	|<red>必选</red>
|pver	|协议版本（此版本固定为3）	|<red>必选</red>
|sign	|签名,<red>只针对该表的参数签名</red>  参见 [附录3》sign生成算法](/api?bdi_docs=1&action=intro&source=intro_extrainfo3 "附录3》sign生成算法")	|<red>必选</red>
|uid	|用户唯一标识	|可选
|bdi_mac	|无线网卡mac地址	|可选
|bdi_cid	|基站id	|可选
|bdi_imsi	|android手机imsi号。（base64处理）	|可选
|ct|	客户端点击时间	|可选
|cname	|客户端(宿主)名称	|可选
|cver	|客户端(宿主)版本号	|可选
|cpack|	客户端(宿主)包名|	可选

<blockquote class="bs-callout bs-callout-warning" style="padding:10px"><h4>注意</h4>为更好进行机型和网络适配，对于所有请求参数，尽可能携带可选参数; <red>所有参数（包括按 [附录2》数据加密](/api?bdi_docs=1&action=intro&source=intro_extrainfo2 "附录2》数据加密") 处理后的bdi_imei）都需要在上报时再进行urlencode</red></blockquote>

## 返回结果 ##
<red>无数据返回，确保http状态返回是200，则回调正常，其他任何http状态或者报错都是异常；</red>建议复制上报的地址，在浏览器上检验。

### 错误示例 ###
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<response>
    <statuscode>108</statuscode>
    <statusmessage>[from] , param is signed in a wrong type</statusmessage>
</response>
```
### 错误说明 ###
参见 [附录4》返回码对照表](/api?bdi_docs=1&action=intro&source=intro_extrainfo4 "附录4》返回码对照表")
