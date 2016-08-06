---
currentMenu: privilege
---
## 特权接口【action=privilege】
获取百度手机助手客户端的特权数据

## 请求说明 ##
### URL ###
> http://m.baidu.com/api?action=privilege

### 请求方式 ###
> GET

### 支持格式 ###
> JSON

### 请求参数 ###
|字段名称  | 备注 | 是否必选
| ------------ | ------------ | ------------
| from   | 来源，合作方标识，由百度BD提供 | <red>必选</red>
| token  | 标记，由百度分配的唯一的token，用于验证请求方的合法性 | <red>必选</red>
| type  |服务类别，type=app，对于android，type的值为app | <red>必选</red>
| ua    |终端分辨率，机型信息|    可选
| uid   |用户唯一标识 |可选
| bdi_mac    |无线网卡mac地址| 可选
| bdi_cid    |基站id   |可选
| bdi_bear   |联网类型   |可选
| dpi    |分辨率，宽_高，如320_640，用于适配  |可选
| apilevel|  API Level，用于适配| 可选
| rn |每页显示结果数，默认rn=10，最大值为20 |可选
| pn |偏移量，默认pn=0，即第一页，必须为rn的整数倍  |可选

<blockquote class="bs-callout bs-callout-warning" style="padding:10px"><h4>注意</h4>为更好进行机型和网络适配，对于所有请求参数，尽可能携带可选参数</blockquote>

## 返回结果 ##
### JSON示例 ###
线上为准

### 返回字段说明 ###
----------
参见 [附录4》返回APP字段说明](/api?bdi_docs=1&action=intro&source=natintro_extrainfo4 "附录4》返回APP字段说明")
此外：

|字段名称  | 备注
| ------------ | ------------
|privilegetime	|剩余时间，单位ms
|privilegebegin	|开始
|desc	|特权描述信息
|img	|配图，尺寸462*163
|middle_img|	配图，尺寸331*117
|big_img	|配图，尺寸702*248


### 错误示例 ###
```json
{
    "statuscode": 106,
    "statusmessage": "param incorrect"
}
```

### 错误说明 ###
参见 [附录4》返回码对照表](/api?bdi_docs=1&action=intro&source=natintro_extrainfo4 "附录4》返回码对照表")
