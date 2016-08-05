## 分类列表【action=cate】 ##
获取分类列表

## 请求说明 ##
### URL ###
> http://m.baidu.com/api?action=cate

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
    <categories>
        <category>
            <id>401</id>
            <type>game</type>
            <name>
            <![CDATA[ 休闲益智 ]]>
            </name>
        </category>
        <category>
            <id>402</id>
            <type>game</type>
            <name>
            <![CDATA[ 角色扮演 ]]>
            </name>
        </category>
        ...
    </boards>
</response>
```
### 返回说明 ###
----------
参见 [附录4》分类说明](/api?bdi_docs=1&action=intro&source=natintro_extrainfo4 "附录4》分类说明")


