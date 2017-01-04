###移服接入说明###
1、自然，商业接口可以组合使用，一般用自然接口做应用展示列表，商业接口用作应用详情。

2、目前有返回商业计费的接口有： 移服接口（包名），内容接口（DOCID），检索接口（商业）。其中内容接口（DOCID）需要在百度服务器入库应用后才能使用，检索接口（商业）如需使用请向商务申请权限。

3、商业计费必须流程：下载接口调用->【下载应用】->下载完成回调上报。

4、不存在返回纯商业应用的商业API，商业API返回的是自然+商业的应用，调用商业API时不需要做筛选，直接返回商业接口提供的应用即可。

5、应用信息中有dl_callback字段的属于商业应用，需要在应用下载完成后进行回调上报；没有dl_callback的是免费应用不需要回调上报。

6、带dl_callback字段的商业下载应用信息不能事先保存使用，因为商业应用信息里download_url和dl_callback参数是一一配对的，且每次请求都会发生变化。

7、特别注意应用信息中的下载地址（即字段download_url值）、回调地址（即字段dl_callback值）都需要加上文档中的请求参数才是完整的。

8、商业下载有反作弊机制，API里提供的参数必须完整且真实，否则可能被视为作弊不做计费。

9、按照流程接入后，建议先放1%的真实流量到线上环境；请求量建议达到至少日均1W以上，否则统计数据不能真实反映收入预期。查看数据的后台地址为：http://app.baidu.com/union 。 后台报表数据非实时更新，当天的报表需要间隔1至2天后才会被统计完成并在此后台显示。

### 接口报错排查 ###
1、每个接口中的注意、红色字体说明部分通常是容易出错的地方，务必按照说明上报参数
2、调试过程中出现报错，可以根据错误码参考解决方案可先自行解决。
[![error](https://ascdn.bdstatic.com/appapi/docs/docsfile/error1.png "error")](https://ascdn.bdstatic.com/appapi/docs/docsfile/error1.png "error")

3、也可以在测试页填入原文，可以得到正确的URL， 比对自己错误的URL，找到错误原因；测试页面非必填字段为空时，请求不上报该参数
[![req](https://ascdn.bdstatic.com/appapi/docs/docsfile/req.png "error")](https://ascdn.bdstatic.com/appapi/docs/docsfile/req.png "req")
