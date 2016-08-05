### 说明 ###
------------
<tab></tab>为了帮助合作方利用百度无线应用(android)开发接口，高效地进行二次开发，特制定本说明文档。本文档描述的开放接口包括：分类、榜单、检索、内容页、更新和搜索建议六个部分。随着产品的演进和发展，本文档可能与线上实际数据有所差异，不一致的地方请以线上数据为准。如有其他任何问题，敬请联系我们。

### 名词解释 ###
------------
- 榜单：当前分为最新榜、最热榜，榜单可能会随业务发展而有所变化。
- 分类：分类是指应用的分类，如休闲、角色等，具体分类见第四部分补充信息。同榜单一样，分类也会随需而变。
- 更新：对于同一款应用，当其版本更新时(如版本由2.1.0升级到2.2.1)，则认为该应用更新了。
- rn：榜单、分类、检索结果列表页的每页结果数，默认为10，最大值为20。
- pn：榜单、分类、检索结果列表页的偏移量，与rn配合使用用于翻页控制。pn必须要为rn的整倍数。如，pn = 0时为第一页，pn = - rn是为第二页。即，pn = (当前页数-1)*rn。
- disp_num：记录总数
- ret_num：当前页结果数
- apilevel：用于应用适配。关于API Level的更多信息，可以参见http://developer.android.com/guide/topics/manifest/uses-sdk-element.html (需要翻墙才能访问) 。API Level与Platform Version映射关系如下：
[![Level与Platform Version映射关系](http://ascdn.baidu.com/appapi/docs/docsfile/api_level.png "Level与Platform Version映射关系")](http://ascdn.baidu.com/appapi/docs/docsfile/api_level.png "Level与Platform Version映射关系")
