---
currentMenu: sug
---
## 内容建议【action=sug】
获取搜索词的联想词

## 请求说明 ##
### URL ###
> http://m.baidu.com/api?action=sug

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
| word  |搜索词   |<red>必选</red>

## 返回结果 ##
### XML示例 ###
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<response>
    <statuscode>0</statuscode>
    <statusmessage>done</statusmessage>
    <sugs>
        <sug>
            <!--[CDATA[ 社交大全 ]]-->
        </sug>
        <sug>
            <!--[CDATA[ 社交工具 ]]-->
        </sug>
        <sug>
            <!--[CDATA[ 社交互动 ]]-->
        </sug>
        ...
    </sugs>
</response>
```
