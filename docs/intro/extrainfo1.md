### signmd5生成算法 ###
--------
处理过程为：
- 读取应用的签名，android签名相关资料可参照网页：http://developer.android.com/guide/publishing/app-signing.html
- 对公钥进行MD5签名；
- 对MD5签名信息进行Hash运算，Java实现示例代码片段如下：

1、读取安装应用签名：

```java
context.getPackageManager().getPackageInfo(packageName,
                    PackageManager.GET_SIGNATURES);
```
2、根据packageinfo计算签名的MD5值：

```java
public String getMd5(PackageInfo packageinfo) {
	if (packageinfo == null) return null;
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");
			md.update(packageinfo.signatures[0].toCharsString().getBytes());
			byte[] b = md.digest();
			char[] HEXCHAR = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9','a‘, 'b‘, 'c', 'd', 'e', 'f' };
			StringBuilder sb = new StringBuilder(b.length * 2);
			for (int i = 0; i < b.length; i++) {
				sb.append(HEXCHAR[(b[i] & 0xf0) >>> 4]);
				sb.append(HEXCHAR[b[i] & 0x0f]);
			}
			return sb.toString();
		} catch (NoSuchAlgorithmException e) {
			return null;
		}
	}
}
```
3、根据MD5值计算signmd5值：

```java
public String creatSignInt(String md5) {
	if (md5 == null || md5.length() < 32)  return "-1";
	String sign = md5.substring(8, 8 + 16);
	long id1 = 0;
	long id2 = 0;
	String s = "";
	for (int i = 0; i < 8; i++) {
		id2 *= 16;
		s = sign.substring(i, i + 1);
		id2 += Integer.parseInt(s, 16);
	}
	for (int i = 8; i < sign.length(); i++) {
		id1 *= 16;
		s = sign.substring(i, i + 1);
		id1 += Integer.parseInt(s, 16);
	}
    long id = (id1 + id2) & 0xFFFFFFFFL;
    return String.valueOf(id);
}
```
##### 示例 #####
###### 签名：
308201923081fca00302010202044d3c2820300d06092a864886f70d0101050500300d310b300906035504031302796b3020170d3131303132333133303734345a180f32303831303130353133303734345a300d310b300906035504031302796b30819f300d06092a864886f70d010101050003818d003081890281810095a1a931cc6bbc8899441e614f469104e2520a95ff90942ba177d336d98b1a5d6a637a0e95d1a3cc630537ecb1a5c708b5751d8f13bf8ba993b95748ed15b87c6dc22bf76e97f7ad68d86cad686752a48ce0cba009065a5f17650ab2301b9b871e3d0682712c0914a6b97df5b15ad15c14f080410b562973f830f31a31a75f970203010001300d06092a864886f70d0101050500038181002e5332040bde9448f53c63472c3a210da2101afe353538253072d643f089eb7eab68f0db2cedfb115bb73d2116db5fc0f516259f41ac0c04ee3b5e00710469d654b2d17a8330ad601e58f8d630afbc75420b9c55f62de033bcf02bdd9a1014d376576d048bebbe84a88826d9230527b5078bf08724cafb847ae64fa0e9aca40f
###### MD5：
0f3c509eef614432e414ce9d37f00c80
###### Signmd5：
3547730639
