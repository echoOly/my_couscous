---
currentMenu: topic
---
## 专题接口【action=topic】
获取指定专题列表数据

## 请求说明 ##
### URL ###
> http://m.baidu.com/api?action=topic

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
| id    |专题id 参见[数据接口》专题列表](/api?bdi_docs=1&action=intro&source=natintro_topiclist "数据接口》专题列表")  |<red>必选</red>
| ua    |终端分辨率，机型信息|    可选
| uid   |用户唯一标识 |可选
|bdi_mac    |无线网卡mac地址| 可选
|bdi_cid    |基站id   |可选
|bdi_bear   |联网类型   |可选
|dpi    |分辨率，宽_高，如320_640，用于适配  |可选
|apilevel|  API Level，用于适配| 可选
|rn |每页显示结果数，默认rn=10，最大值为20 |可选
|pn |偏移量，默认pn=0，即第一页，必须为rn的整数倍  |可选

<blockquote class="bs-callout bs-callout-warning" style="padding:10px"><h4>注意</h4>为更好进行机型和网络适配，对于所有请求参数，尽可能携带可选参数</blockquote>

## 返回结果 ##
### JSON示例 ###
```json
{
    "statuscode": 0,
    "statusmessage": "done",
    "result": {
        "title": "智能手表应用",
        "pn": 0,
        "rn": 15,
        "disp_num": 66,
        "ret_num": 14,
        "apps": [
            {
                "sname": "滴答表盘",
                "docid": "8833334",
                "packageid": "1377123",
                "package": "cn.foxday.hf",
                "type": "soft",
                "download_url": "http://m.baidu.com/api?action=redirect&token=shoubiaozhushou&from=1012490f&type=app&dltype=new&tj=soft_8833334_1377123_%E6%BB%B4%E7%AD%94%E8%A1%A8%E7%9B%98&blink=b249687474703a2f2f646f776e2e616e64726f69642e642e636e2f636f6f702f62616964755f312f42414944555f435f4e2f6e6f656e632d6e65772f67616d65312f332f34323830332f636e2e666f786461792e68662d322e362e312e322d32303630362e61706b3457&crversion=1",
                "size": "23887418",
                "icon": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=0c68b2f299ecccb49f499fcced11a497&ref=http%3A%2F%2Fb.hiphotos.bdimg.com&src=http%3A%2F%2Fb.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2Facfc1e178a82b9012b07cf4b748da9773912ef24.jpg",
                "signmd5": "4244303853",
                "score": "60",
                "score_count": "3",
                "versioncode": "20606",
                "versionname": "2.6.1.2",
                "all_download": "1638",
                "manual_short_brief": "",
                "updatetime": "2016-02-02",
                "catename": "主题壁纸",
                "buildtime": "2016-02-02 19:26:34",
                "icon_source": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=a685c4391627c563c10dd820a46cfe73&ref=http%3A%2F%2Fb.hiphotos.bdimg.com&src=http%3A%2F%2Fb.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F7d178a82b9014a90d73209b2ae773912b31beeb5.jpg",
                "brief": "《滴答表盘》是一款致力于帮助智能手表用户一键更换手表表盘的应用。通过滴答，用户可以在种类繁多的手表表盘中寻找自己喜欢的表盘，通过手机应用，将选择的表盘发送到和手机配对连接的手表上，立即开始享受新表盘带来的完美体验。未读短信、未接来电、天气信息，只需要一抬手，就可以在手表上掌握你关心的所有信息。滴答表盘，不只是看时间。"
            },
            ...
        ]
    }
}
```

### 返回字段说明 ###
----------
参见 [附录4》返回APP字段说明](/api?bdi_docs=1&action=intro&source=natintro_extrainfo4 "附录4》返回APP字段说明")
此外：

|字段名称  | 备注
| ------------ | ------------
|type   | 分类 soft、game
|catename   | 子分类名称，例:网络社区
|score  | app打分
|score_count |app打分人数
|manual_short_brief | 小编评语
|buildtime  | 创建时间
|updatetime  |更新时间


### 错误示例 ###
```json
{
    "statuscode": 106,
    "statusmessage": "param incorrect"
}
```

### 错误说明 ###
参见 [附录4》返回码对照表](/api?bdi_docs=1&action=intro&source=natintro_extrainfo4 "附录4》返回码对照表")
