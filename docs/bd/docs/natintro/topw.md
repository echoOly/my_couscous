## top10w【action=topapps】
获取top10w应用包信息，或者获取top10w更新应用包信息，<red>该接口输出离线文件，每天更新一次，每天凌晨2:30~4:00数据维护，请在非数据维护时间内获取，全数据遍历频率请按小时级别获取</red>

## 请求说明 ##
### URL ###
> http://m.baidu.com/api?action=topapps

### 请求方式 ###
> GET

### 支持格式 ###
> 文档

### 请求参数 ###
|字段名称  | 备注 | 是否必选
| ------------ | ------------ | ------------
| from   | 来源，合作方标识，由百度BD提供 | <red>必选</red>
| token  | 标记，由百度分配的唯一的token，用于验证请求方的合法性 | <red>必选</red>
| type   | 服务类别，type=app，对于android，type的值为app | <red>必选</red>
| rt     | 请求的时间戳   |<red>必选</red>
| sign   | 来源验证，from,token,rt,srt字符串进行连接后md5，其中srt联系接口接入人获取 |<red>必选</red>
| pver   | 协议版本（此版本固定为4）  |<red>必选</red>
| page   | 页码，起始值为1，固定每页返回200应用 |<red>必选</red>
| listtype | 列表类型，all:默认值获取全量，update:更新量 <red>更新量:当天较前一天有信息更新的应用</red>| 可选

## 返回结果 ##
### 示例 ###
文本输出，返回应用包信息列表。内容示例如下
```json
[
    {
        "versioncode": "18",
        "packageid": "1805016",
        "signmd5": "1883099443",
        "cateid": "504",
        "brief": "汽车事故在线报案及定损平台，用户在应用中填写事故现场的驾驶人、涉事车辆和事故发生过程说明， 并根据拍照指引提供出险现场的照片，即可完成案件申报和自助查勘。平台根据以上信息，向用户反馈 车辆定损金额，并给予损伤部件的更换或维修建议。",
        "size": "18489004",
        "platform_version": "4.0",
        "aladdin_flag": "n",
        "package": "com.ctcd.easypay",
        "docid": "10061954",
        "versionname": "2.2.4",
        "screenshot": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=1274f7b777e94030e4686f69dd760212&ref=http%3A%2F%2Fd.hiphotos.bdimg.com&src=http%3A%2F%2Fd.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F603b5bb5c9ea15ce7d9476f5be003af33b87b2d0.jpg;http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=58d2fc2d478e730a737e696be2847402&ref=http%3A%2F%2Fd.hiphotos.bdimg.com&src=http%3A%2F%2Fd.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F5987e950352ac65c437ff08ff3f2b21192138ad0.jpg;http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=4cd038faf0693220a8c3901acb17534c&ref=http%3A%2F%2Ff.hiphotos.bdimg.com&src=http%3A%2F%2Ff.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F4ef5e0fe9925bc31d141976456df8db1cb13702a.jpg;http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=bafd5ff58421d5e332d20553bddc0ec8&ref=http%3A%2F%2Ff.hiphotos.bdimg.com&src=http%3A%2F%2Ff.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2Fa81349540923dd54c36f3194d909b3de9c82482a.jpg",
        "permission_cn": " 网络通信 : 允许应用程序访问各种网络功能 | 存储 : 访问SD卡 | 手机通话 : 读取手机状态和身份 | 您的位置 : 获取您的地理位置 | 硬件控件 : 直接访问手机上的硬件（相机，音频，录音） | 系统工具 : 装载和卸载文件系统 | 系统工具 : 修改全局系统设置 | 系统工具 : 检索当前运行的应用程序 | 系统工具 : 读取系统日志文件 | 系统工具 : 防止手机休眠 | 系统工具 : 开机时自动启动 | 系统工具 : 发送置顶广播 ",
        "changelog": "1、新增违章查询、代缴功能； 2、新增快赔点导航功能； 3、修复若干已发现的BUG； 4、优化拍照功能； 5、优化界面逻辑及风格。",
        "catename": "生活实用",
        "permission": "android.permission.CAMERA|android.permission.READ_EXTERNAL_STORAGE|android.permission.ACCESS_MOCK_LOCATION|android.permission.ACCESS_FINE_LOCATION|android.permission.ACCESS_COARSE_LOCATION|android.permission.ACCESS_WIFI_STATE|android.permission.ACCESS_NETWORK_STATE|android.permission.CHANGE_WIFI_STATE|android.permission.READ_PHONE_STATE|android.permission.WRITE_EXTERNAL_STORAGE|android.permission.INTERNET|android.permission.MOUNT_UNMOUNT_FILESYSTEMS|android.permission.BAIDU_LOCATION_SERVICE|android.permission.ACCES_MOCK_LOCATION|com.android.launcher.permission.READ_SETTINGS|android.permission.ACCESS_GPS|android.permission.GET_TASKS|android.permission.BROADCAST_STICKY|android.permission.PROCESS_OUTGOING_CALLS|android.permission.MODIFY_AUDIO_SETTINGS|android.permission.RECORD_AUDIO|android.permission.RECEIVE_BOOT_COMPLETED|android.permission.WRITE_SETTINGS|android.permission.WAKE_LOCK|android.permission.CHANGE_NETWORK_STATE|android.permission.READ_LOGS",
        "all_download_pid": "26",
        "iconhdpi": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=bbc9ced11e25b418d34321f615b6c006&ref=http%3A%2F%2Fg.hiphotos.bdimg.com&src=http%3A%2F%2Fg.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F0d061d950a7b02086d00a81d6ad9f2d3562cc805.jpg",
        "type": "soft",
        "md5": "ca07d7f9a70819cafce23d54749e648d",
        "icon": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=ed0e87f11dee29476cccf35a3576cf10&ref=http%3A%2F%2Fd.hiphotos.bdimg.com&src=http%3A%2F%2Fd.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F603b5bb5c9ea15ce7df276f5be003af33a87b22a.jpg",
        "sname": "易赔付",
        "updatetime": "2016-10-08",
        "download_url": "http://m.baidu.com/api?action=redirect&token=sss&from=test&type=app&dltype=new&refid=2036872685&tj=soft_10061954_1805016_%E6%98%93%E8%B5%94%E4%BB%98&refp=action_search&blink=d42a687474703a2f2f612e67646f776e2e62616964752e636f6d2f646174612f7769736567616d652f613730383139636166636532336435342f796970656966755f31382e61706b3f66726f6d3d6131313031ff57&crversion=1",
        "all_download": "26",
        "icon_source": "http://cdn00.baidu-img.cn/timg?vsapp&size=b800_800&quality=100&imgtype=3&er&sec=0&di=c9aae4626339382f0a549d4c3fef26e1&ref=http%3A%2F%2Fc.hiphotos.bdimg.com&src=http%3A%2F%2Fc.hiphotos.bdimg.com%2Fwisegame%2Fpic%2Fitem%2F5e6d55fbb2fb43164765ec8628a4462308f7d3d0.jpg"
    },
    ...
]
...
```
