# sample demo  #

### 榜单接口【board】 ###
------------

## 接口描述 ##
>合作方获取榜单的具体数据 [TOC]

## 请求说明 ##
### URL ###
> http://m.baidu.com/api?action=board

### 请求方式 ###
> GET

### 支持格式 ###
> JSON/XML

### 是否需要登录 ###
> 否

### 请求参数 ###
------------
|字段名称  | 备注  | 是否必选
| ------------ | ------------ | ------------ |
|from | 合作方标识，由百度BD提供。  | <span style='color:red'>必选</span>
| token | 由百度分配，用于验证请求方的合法性。 | <span style='color:red'>必选</span>
|  type |  type=app，服务类型，对于android，type值为app | <span style='color:red'>必选</span>
|  id  | 榜单编码  | <span style='color:red'>必选</span>
| bdi_imei  | android手机imei号。（AES加密，见附录二） | <span style='color:red'>必选</span>
| bdi_loc | 客户端所在的城市 例：北京市。（base64处理） | <span style='color:red'>必选</span>
| bdi_uip | 客户端ip（客户端用户请求ip） |  <span style='color:red'>必选</span>
| bdi_bear  | 网络环境（WF、4G、3G、2G）| <span style='color:red'>必选</span>
| resolution  | 手机分辨率 例：720_1280 |  <span style='color:red'>必选</span>
| dpi | 屏幕密度 例：320  | <span style='color:red'>必选</span>
| apilevel |  系统api level 例：18（对应android 4.3） | <span style='color:red'>必选</span>
| os_version  | 系统版本号 例：4.3 | <span style='color:red'>必选</span>
|brand|手机品牌 例：OPSSON|<span style='color:red'>必选</span>
|model|手机型号 例：Q1|<span style='color:red'>必选</span>
|pver|协议版本|<span style='color:red'>必选</span>
|sign|签名|<span style='color:red'>必选</span>
|uid|用户唯一标识|可选
|bdi_cid|基站id|可选
|bdi_mac|无线网卡mac地址。（base64处理）|可选
|bdi_imsi|android手机imsi号。（base64处理）|可选
|ct|客户端点击时间|可选
|cname|客户端(宿主)名称|可选
|cver|客户端(宿主)版本号|可选
|cpack|客户端(宿主)包名|可选
|rn|每页显示结果数，默认rn=10，最大值为20|可选
|pn|偏移量，默认pn=0，即第一页，必须为rn的整数倍|可选
|formate|默认xml, 可选json/xml|可选



## 返回结果 ##
###JSON示例###
```javascript
{
    "statuscode": 0,
    "statusmessage": "done",
    "result": {
        "pn": 0,
        "rn": 10,
        "disp_num": 232,
        "ret_num": 10,
        "apps": [
            {
                "sname": "字谜 游戏",
                "docid": "5516036",
                "catename": "休闲益智",
                "size": "4167511",
                "download_url": "http://m.baidu.com/api?action=redirect&token=jingyan&from=1014104s&type=app&dltype=new&tj=game_5516036_827747_%E5%AD%97%E8%B0%9C+%E6%B8%B8%E6%88%8F&blink=a213687474703a2f2f7265736765742e39312e636f6d2f536f66742f436f6e74726f6c6c65722e617368783f616374696f6e3d646f776e6c6f61642674706c3d312669643d3430333236373830f556&crversion=1",
                "icon": "http%3A%2F%2Fh.hiphotos.bdimg.com&src=http%3A%2F%2Fh.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F3043fbf2b21193132729a0dc67380cd791238d70.jpg",
                "versioncode": "1000004",
                "package": "air.com.foxyapp.puzzlenumbershd",
                "iconhdpi": "http%3A%2F%2Fb.hiphotos.bdimg.com&src=http%3A%2F%2Fb.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F15094b36acaf2edd0af316858f1001e939019358.jpg",
                "brief": "这里是最新和最有趣的休闲益智游戏<br>各种有趣的数字字符，让你欲罢不能<br>鲜艳的背景声音逼真的游戏图形<br>更现实的和彻底的经验！<br>流畅的游戏感受<br>这将考验你的反应能力<br>如果你喜欢它，它下载",
                "type": "game",
                "screenshot1_mini": "http%3A%2F%2Fe.hiphotos.bdimg.com&src=http%3A%2F%2Fe.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F4ddda3cc7cd98d10adbe535d233fb80e7bec9070.jpg",
                "screenshot2_mini": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=11d93685bfd899d2cfaa6737471f1d5d&ref=http%3A%2F%2Fh.hiphotos.bdimg.com&src=http%3A%2F%2Fh.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2Fee1001e93901213f175911b056e736d12f2e9570.jpg",
                "screenshot1": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=5bd5b5eac065fb7f7cba56322606ffd6&ref=http%3A%2F%2Fe.hiphotos.bdimg.com&src=http%3A%2F%2Fe.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F4ddda3cc7cd98d10adbe535d233fb80e7bec9070.jpg",
                "screenshot2": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=11d93685bfd899d2cfaa6737471f1d5d&ref=http%3A%2F%2Fh.hiphotos.bdimg.com&src=http%3A%2F%2Fh.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2Fee1001e93901213f175911b056e736d12f2e9570.jpg",
                "versionname": "1.0.4",
                "all_download": "2146",
                "updatetime": "2013-11-01",
                "permission_cn": " 网络通信 : 允许应用程序访问各种网络功能 | 手机通话 : 读取手机状态和身份 ",
                "sourcename": "91助手",
                "packageid": "827747",
                "icon_source": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=041b73828facbf385e0c91b5f4322b9f&ref=http%3A%2F%2Fd.hiphotos.bdimg.com&src=http%3A%2F%2Fd.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2Fcfaf2edda3cc7cd926476bb53b01213fb80e9170.jpg"
            },
            ...
        ]
    }
}
```

### 返回字段说明 ###
----------
参见 [字段对照](http://baidu.com "字段对照")

###错误示例###
```
{
	"statuscode": 108,
	"statusmessage": "[bdi_imei] , param is signed in a wrong type"
}
```
## 附加说明 ##
<blockquote class="bs-callout bs-callout-warning">
    <h4>注意</h4>man 设计之初，就不是像 Babel 一样是一个大而全的系统，而是一个专业的开发手册的平台。
    <p><strong>我们倾向于做成一个纯粹的系统，而不是一锅大杂烩。</strong></p>
</blockquote>
