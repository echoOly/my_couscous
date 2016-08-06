---
currentMenu: topiclist
---
## 专题列表【action=topiclist】 ##
获取专题列表数据

## 请求说明 ##
### URL ###
> http://m.baidu.com/api?action=topiclist

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
|rn | 每页显示结果数，默认rn=10，最大值为20 | 可选
|pn | 偏移量，默认pn=0，即第一页，必须为rn的整数倍   |可选


## 返回结果 ##
### JSON示例 ###
```json
{
    "statuscode": 0,
    "statusmessage": "done",
    "result": {
        "pn": 0,
        "rn": 2,
        "disp_num": 687,
        "ret_num": 2,
        "topics": [
            {
                "topicid": "1225",
                "topicname": "低调有内涵，拿奖到手软",
                "description": "独立游戏大多都是短小精悍型，而且独具创意的，从玩法到品质一点都不输大制作。请关注小编微信公号：陈浅浅。",
                "type": "soft",
                "img": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=6640a62e54b9ccd65b82079a216d9438&src=http%3A%2F%2Fimgsrc.baidu.com%2Fanxun%2Fpic%2Fitem%2Fd6ca7bcb0a46f21f247dc8aef1246b600d33ae86.jpg",
                "img280": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=03c2059684b05cd2703e16746a721122&src=http%3A%2F%2Fimgsrc.baidu.com%2Fanxun%2Fpic%2Fitem%2F503d269759ee3d6dde3e103644166d224e4ade57.jpg",
                "img460": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=789d027811878167e65302dfb797b2a5&src=http%3A%2F%2Fimgsrc.baidu.com%2Fanxun%2Fpic%2Fitem%2Ffd039245d688d43fa2e1070f7a1ed21b0ff43b86.jpg",
                "updatetime": 1462723200
            },
            {
                "topicid": "1224",
                "topicname": "恐怖游戏，只怕吓到你失禁！",
                "description": "揭开各种恐怖故事的真相，抓住传说中的各种魑魅魍魉。请关注小编微信公号：陈浅浅。",
                "type": "soft",
                "img": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=9076810b2b93ea9295a3bbd824bc349d&src=http%3A%2F%2Fimgsrc.baidu.com%2Fanxun%2Fpic%2Fitem%2F8b13632762d0f70333c924210ffa513d2797c5d0.jpg",
                "img280": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=325eba420c82ddf16a2678168daf8661&src=http%3A%2F%2Fimgsrc.baidu.com%2Fanxun%2Fpic%2Fitem%2Ff9dcd100baa1cd114955c4ddbe12c8fcc2ce2d6f.jpg",
                "img460": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=aa7c21767f10e32d4ba5f8c2c640893c&src=http%3A%2F%2Fimgsrc.baidu.com%2Fanxun%2Fpic%2Fitem%2Fe4dde71190ef76c6a65e4dd69a16fdfaae5167ba.jpg",
                "updatetime": 1462723200
            }
            ...
        ]
    }
}
```
### 返回说明 ###
----------
|字段名称  | 备注
| ------------ | ------------
|topicid   |  专题id，在专题接口中使用这个id查询指定的专题数据
|topicname   |专题名称
|description |专题描述信息
|type    |专题类型 soft、game
|updatetime | 专题更新时间, unix时间戳，单位秒
|img |配图，尺寸192*84
|middle_img | 配图，尺寸460*210
|big_img |配图，尺寸460*124

### 错误示例 ###
```json
{
    "statuscode": 106,
    "statusmessage": "param incorrect"
}
```

### 错误说明 ###
参见 [附录4》返回码对照表](/api?bdi_docs=1&action=intro&source=natintro_extrainfo4 "附录4》返回码对照表")
