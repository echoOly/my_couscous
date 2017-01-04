## 分类列表【action=cate】 ##
获取分类列表, <red>pver=3，增加了二级分类，返回数据格式进行了统一规范</red>

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
| pver   |协议版本（此版本固定为3）  |<red>必选</red>
<blockquote class="bs-callout bs-callout-warning" style="padding:10px"><h4>注意</h4>所有的二级分类和部分一级分类由策略产生，并非自然分类，应用的所属分类以应用信息为准。</blockquote>

## 返回结果 ##
### XML示例 ###

#### pver=3
```xml
<?xml version="1.0" encoding="utf-8"?>
<response xmlns:from="http://www.baidu.com">
	<statuscode>0</statuscode>
	<statusmessage>done</statusmessage>
	<result>
		<categories>
			<id>401</id>
			<type>game</type>
			<name><![CDATA[休闲益智]]></name>
			<child_nodes>
				<id>8501</id>
				<type>game</type>
				<name><![CDATA[休闲]]></name>
			</child_nodes>
			<child_nodes>
				<id>8502</id>
				<type>game</type>
				<name><![CDATA[消除]]></name>
			</child_nodes>
            ...
        </categories>
        ...
    </result>
</response>
```

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
参见 [附录4》分类说明](/api?bdi_docs=1&action=intro&source=intro_extrainfo4&cur=natintro "附录4》分类说明")
