---
currentMenu: cate
---
## 分类接口【action=cate&id=*】
获取某分类应用列表

## 请求说明 ##
### URL ###
> http://m.baidu.com/api?action=cate&id=*

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
| id    |分类id 参见[数据接口》分类列表](/api?bdi_docs=1&action=intro&source=natintro_catelist "数据接口》分类列表")  |<red>必选</red>
| ua    |终端分辨率，机型信息|    可选
| uid   |用户唯一标识 |可选
|bdi_mac    |无线网卡mac地址| 可选
|bdi_cid    |基站id   |可选
|bdi_bear   |联网类型   |可选
|dpi    |分辨率，宽_高，如320_640，用于适配  |可选
|apilevel|  API Level，用于适配| 可选
|rn |每页显示结果数，默认rn=10，最大值为20 |可选
|pn |偏移量，默认pn=0，即第一页，必须为rn的整数倍  |可选
|sorttype   |排序方式，默认hot(热门)，可选值为new(新品) |可选

<blockquote class="bs-callout bs-callout-warning" style="padding:10px"><h4>注意</h4>为更好进行机型和网络适配，对于所有请求参数，尽可能携带可选参数</blockquote>

## 返回结果 ##
### XML示例 ###
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<response>
    <statuscode>0</statuscode>
    <statusmessage>done</statusmessage>
    <result>
        <title>
            <![CDATA[旅游出行]]>
        </title>
        <pn>0</pn>
        <rn>2</rn>
        <disp_num>300</disp_num>
        <ret_num>1</ret_num>
        <apps>
            <app>
                <sname>
                    <![CDATA[百度地图]]>
                </sname>
                <docid>9150118</docid>
                <catename>
                    <![CDATA[旅游出行]]>
                </catename>
                <size>47371918</size>
                <download_url>
                    <![CDATA[http://m.baidu.com/api?action=redirect&token=91zhuomian&from=1013018b&type=app&dltype=new&tj=soft_9150118_1895482625_%E7%99%BE%E5%BA%A6%E5%9C%B0%E5%9B%BE&blink=4c61687474703a2f2f612e67646f776e2e62616964752e636f6d2f646174612f7769736567616d652f663231303063663765353237333731352f6261696475646974755f3734302e61706b3f66726f6d3d61313130311757&crversion=1&f=gyve8gaM2og2u2ibgavv8_yFvzgPu28tgu29iga_vz_Ka28F_yvV8_ab2ig0P28U_42Atgav2i_Oa2o-ga2moga12i_CaviU_a2vogPDvzg0avzb_422igOY2igpa2zGgavszgPDv8gJ428UguvUiyWuB&refp=action_cate@id_509]]>
                </download_url>
                <icon>
                    <![CDATA[http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=bfb97d581e08a09db0b73408e5549393&ref=http%3A%2F%2Fg.hiphotos.bdimg.com&src=http%3A%2F%2Fg.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2Fcfaf2edda3cc7cd92b506b753e01213fb80e9119.jpg]]>
                </icon>
                <versionname>9.1.5</versionname>
                <updatetime>2016-04-12</updatetime>
                <icon_source>
                    <![CDATA[http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=d1fdd41a740ae1e487d991d2845d150a&ref=http%3A%2F%2Fa.hiphotos.bdimg.com&src=http%3A%2F%2Fa.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F2836acaf2edda3cce44dfa8e06e93901203f92f7.jpg]]>
                </icon_source>
                <brief>
                    <![CDATA[5亿人都在用的百度地图<br>【功能介绍】<br>最全最准手机地图，专业智能语音导航。<br>探索周边美食娱乐。在线订机票、酒店更享多重优惠。<br>明星趣味语音导航，躲避拥堵路线规划，实时公交多城市覆盖<br>海量地点信息，及时更新，查哪儿都知道<br>优步、专车、顺风车随叫随到<br>更有离线地图，节省流量。收藏夹可以同步云端，实现电脑、手机、Pad三端贯通，永不丢失。<br>【温馨提示】<br>Android 2.X系统的用户，百度地图专门为您准备了稳定的优化版本，请移步手机地图官网(http://wuxian.baidu.com/map/)下载使用。语音导航和电子狗会持续使用GPS定位服务，切换至后台播报时，仍会保持GPS连接，相比其他操作会消耗更多的电量。<br>【江湖救急】遇到问题请快速联系我们<br>用户论坛：http://tieba.baidu.com/百度地图<br>官方微博：http://weibo.com/n/百度地图<br>微信公共号搜索： baiduditu<br>您还可以直接在应用内“我的-帮助与反馈”中进行反馈，我们将在第一时间处理您的问题。]]>
                </brief>
                <lang>中文</lang>
                <adv_item>source+NATURAL@boardid+87@pos+1@terminal_type+client</adv_item>
                <package>com.baidu.BaiduMap</package>
                <iconhdpi>
                    <![CDATA[http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=3d3a14556a6ca6397acb55144abbd8be&ref=http%3A%2F%2Fa.hiphotos.bdimg.com&src=http%3A%2F%2Fa.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2Fb258ccbf6c81800ac1efd6a2b63533fa828b4710.jpg]]>
                </iconhdpi>
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
