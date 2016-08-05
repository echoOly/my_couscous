### 返回APP字段说明 ###
| 字段名称   | 说明
| ------------ | ------------
| sname | 应用名称
| docid	| 应用唯一id
| catename| 应用分类名
| cateid	| 应用分类id
| size| 资源包的大小
| updatetime| 更新时间/应用发布的时间
| download_url	| 资源包的下载地址
| dl_callback	| 下载完成回调地址
| icon	| 应用图标
| versioncode	| 版本code
| package	| 包名称
| versionname| 版本号
| brief | 简介
| type | 类型 soft/game
| screenshot | 截图,分号隔开
| iconhdpi | 应用图标（72*72
| signmd5| signmd5
| md5 | md5
|permission_cn|权限说明 - 中文
|permission|权限说明
|platform_version|平台版本
|packageid | 包id
|changelog|更新说明
|manual_brief| 描述
|manual_short_brief| 标题
|all_download_pid| 包下载量
|all_download| 该版本应用下载量
|icon_source| 应用原图


### 分类说明 ###
------------
|分类ID    |分类名称
| ------------ | ------------ 
|400| 其他游戏
|401| 休闲益智
|402| 角色扮演
|403| 动作射击
|404| 模拟辅助
|405| 体育竞技
|406| 赛车竞速
|407| 棋牌桌游
|408| 经营养成
|500| 其他软件
|501| 系统工具
|502| 主题壁纸
|503| 社交通讯
|504| 生活实用
|505| 咨询阅读

### 返回码对照表 ###
------------
#### 返回正常 ####
```xml
<?xml version="1.0" encoding="UTF-8" ?>
    <statuscode>0</statuscode>
    <statusmessage>ok</statusmessage>
    ...
```
#### 返回错误 ####
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<response>
    <statuscode>108</statuscode>
    <statusmessage>[from] , param is signed in a wrong type</statusmessage>
</response>
```
#### 返回码对照 ####
|返回码 |返回提示  |  说明 
| ------------ | ------------ | ------------
|0   |ok   | 返回正常
|101 |token verified error   | Token验证错误 
|105 |{bdi_xx} param need to be supplied for enter  |  bdi_xx字段必填
|108 |{bdi_xx}, param is signed in a wrong type  | bdi_xx 参数错误
|109 |sign verified error |签名错误


