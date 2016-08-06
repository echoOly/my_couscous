---
currentMenu: cpsdownload
---
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
