## CPS广告列表下载接口【action=getadfile】 ##
商业合作方需要获取CPS广告数据，下载CPS广告文件。以XML方式返回CPS应用列表。每天04:00生成各渠道方对应XML文件，渠道方可定期下载(频度不要高于1次/小时)。请求的文件不存在时，接口返回HTTP状态:404 Not Found，并附带json错误提示（<red>请以HTTP状态码来判别</red>）。

## 请求说明 ##
### URL ###
> http://m.baidu.com/api?action=getadfile

### 请求方式 ###
> GET

### 支持格式 ###
> XML

### 请求参数 ###


GET 字段：

|字段名称  | 备注 | 是否必选
| ------------ | ------------ | ------------
| from   | 来源，合作方标识，由百度BD提供 | <red>必选</red>
| token  | 标记，由百度分配的唯一的token，用于验证请求方的合法性 | <red>必选</red>
| type  |服务类别，type=app，对于android，type的值为app | <red>必选</red>
| file  |文件名称格式YYYYMMdd.xml 如20160413.xml，默认为当天 |可选
<blockquote class="bs-callout bs-callout-warning" style="padding:10px"><h4>注意</h4>该接口进行了302处理</blockquote>

## 返回结果 ##
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<alldata>
    <version>1.0</version>
    <channel>1001</channel>
    <data>...</data>
    <data>...</data>
    <count>6</count>
</alldata>
```

### 返回字段说明 ###
----------
|节点名称  | 节点规格 | 说明
| ------------ | ------------ | ------------   
| version | string  | 接入文档的版本
| channel | string  | 计费渠道号，百度分配
| data    | XML节点   | APP信息。
| count   | int | APP数据条数

其中data中字段说明如下：

|节点名  | 节点规格 | 说明
| ------------ | ------------ | ------------
| apk_id  | int | 渠道包 ID,唯一标记渠道包
| product_id  | int  | 产品 ID,一个产品会有多个版本,多个渠道包
| channel  | int | 渠道号
| title  | string | app 名称
| package_name  | string | 应用包名
| versioncode  | string  | 版本 code
| version  | string  | app 版本名称,例如 1.0.11
| minsdkversion  | int  | 支持的最小固件版本
| smallmaplink  | string  | icon 图标
| packagelink  | string  | app 下载地址
| packagesize  | int  | 包文件大小
| packageformat  | string  | 文件后缀,apk
| packagemd5  | string  | 包 md5
| summary  | string  | app 一句话描述
| description  | string  | app 简介
| bigmaplink  | string  | 截图,用分号隔开
| category  | int  | 分类 ID 参见 [附录4》分类说明](/api?bdi_docs=1&action=intro&source=intro_extrainfo4&cur=natintro "附录4》分类说明")
| categoryname  | string | 分类名称 参见 [附录4》分类说明](/api?bdi_docs=1&action=intro&source=intro_extrainfo4&cur=natintro "附录4》分类说明")
| subcate | string | 可选分类 ID，多个用,号隔开 参见 [附录4》分类说明](/api?bdi_docs=1&action=intro&source=intro_extrainfo4&cur=natintro "附录4》分类说明") （保留字段） 
| sourcelink | string | app 官网地址 （保留字段）
| platform | string | Android 或 IOS
| releasedate | string | 更新时间
| language | string | app 支持语言,例如中文，英文
| dpi | string | 分辨率 （保留字段）
| fee  | int |  付费类型 0 未知，1 完全免费，2 解锁付费，3 道具付费，4 试用后付费，5 内容付费 （保留字段）
| keyword | string | 关键词 （保留字段）
| hotlevel  | int |  应用打分 （保留字段）
| downloadnumber  | int |  下载量
| browsenumber  | int |  浏览量 （保留字段）
| developer_id  | int |  开发者 id
| developername | string | 开发者名称
| source | string | 来源名称
| sourcesite | string | 来源网站 （保留字段）
| status | string | 状态：update 更新，delete 删除
| changelog | string | 更新说明
| supportpad  | int |  是否支持 pad 标识，0 否，1 是 （保留字段）
| ios_sourcelink | string | ios 版的链接 （保留字段）
| aladdinflag  | int |  阿拉丁标识 （保留字段）
| appid  | int |  百度平台的 appid
| oappid  | int |  原平台的 appid （保留字段）
| server_name | string | 开服名称（游戏有效）（保留字段）
| server_time | string | 开服时间（游戏有效）（保留字段）
| server_start_test | string | 开测开始时间（游戏有效）（保留字段）
| server_end_test | string | 开测结束时间（游戏有效）（保留字段）
| server_test_type | string | 开测类型（游戏有效）（保留字段）

### 错误示例 ###
```json
{
    "Error": {
        "code": "2",
        "Message": "object not exists",
        "LogId": "824845018"
    }
}
```
