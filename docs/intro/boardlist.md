---
currentMenu: boardlist
---
## 榜单列表【action=board】 ##
获取榜单列表。包括：最热，最新，软件最热，游戏最热，软件最新，游戏最新，软件新锐，游戏新锐等榜单，可能会随业务发展而有所变化，具体以线上为准。

## 请求说明 ##
### URL ###
> http://m.baidu.com/api?action=board

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

## 返回结果 ##
### XML示例 ###
```xml
<?xml version="1.0" encoding="utf-8"?>
<response>
    <statuscode>0</statuscode>
    <statusmessage>ok</statusmessage>
    <boards>
        <board>
            <id>1</id>
            <name><![CDATA[最热]]></name>
        </board>
        <board>
            <id>2</id>
            <name><![CDATA[最新]]></name>
        </board>
        ...
    </boards>
</response>
```
