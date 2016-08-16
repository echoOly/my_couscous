---
currentMenu: board
---

## 帖子列表
获取帖子列表

## 请求说明 ##
### URL ###
> http://api.9aipay.com/list/:id

### 请求方式 ###
> GET

### 支持格式 ###
> JSON/XML (默认XML)

### 请求参数 ###
|字段名称  | 备注 | 是否必选
| ------------ | ------------ | ------------
| from   | 来源| <red>必选</red>
| token  | 唯一的token| <red>必选</red>
|id	|id|<red>必选</red>
|rn	|每页显示结果数，默认rn=10，最大值为20|	可选
|pn	|偏移量，默认pn=0，即第一页，必须为rn的整数倍	|可选
|ct|	客户端点击时间	|可选
|cname	|客户端(宿主)名称	|可选
|cver	|客户端(宿主)版本号	|可选
|cpack|	客户端(宿主)包名|	可选


<blockquote class="bs-callout bs-callout-warning" style="padding:10px"><h4>注意</h4>为更好进行机型和网络适配，对于所有请求参数，尽可能携带可选参数; <red>参数中包含除字母、数字的字符，都需要进行urlencode</red></blockquote>

## 返回结果 ##
### XML示例 ###
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<response>
    <code>0</code>
    <message>done</message>
    <result>
        <pn>0</pn>
        <rn>2</rn>
        <total>300</total>
        <num>2</num>
        <apps>
            <app>
                <sname>
                    <![CDATA[psr]]>
                </sname>
                <id>9218568</id>
                <catename>
                    <![CDATA[输出标准]]>
                </catename>
            </app>
            ...
        </apps>
    </result>
</response>
```

### 返回字段说明 ###
----------
参见 [附录4》返回APP字段说明](/api?bdi_docs=1&action=intro&source=natintro_extrainfo4 "附录4》返回APP字段说明")

### 错误示例 ###
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<response>
    <statuscode>108</statuscode>
    <statusmessage>[from] , param is signed in a wrong type</statusmessage>
</response>
```
### 错误说明 ###
参见 [附录4》返回码对照表](/api?bdi_docs=1&action=intro&source=natintro_extrainfo4 "附录4》返回码对照表")
