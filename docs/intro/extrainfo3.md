### sign生成算法(签名) ###
------------
1.	将接口请求参数（含get及post）用&字符拼接。
如：from=testiD&token=testiD&type=app&...
<blockquote class="bs-callout bs-callout-warning" style="padding:10px"><h4>注意</h4>i、拼接时请注意按照文档所列字段以字典序升序方式进行。<br/>ii、参数action不参与签名，所有参数需做一次urlencode（编码将会以 RFC 1738标准和application/x-www-form-urlencoded媒体类型进行编码，空格会被编码成加号（+））。如未特殊说明，所有参数值统一使用UTF-8编码。</blockquote>
2.	将上面生成的字符串的md5值并转换为大写。

Java示例：

```java
/**
 * 获取字符串的md5
 * @param str
 * @return
 */
public static String toMd5(String str){  
    try {  
        MessageDigest md5 = MessageDigest.getInstance("MD5");  
        byte[] bytes = md5.digest(str.getBytes("utf-8"));
        if (null != bytes) {
            return parseByte2HexStr(bytes);
        }
    } catch (NoSuchAlgorithmException e) {  
        e.printStackTrace();  
    } catch (UnsupportedEncodingException e) {
        e.printStackTrace();
    }
    return null;
}
/**
 * 将二进制转换成16进制 
 * @param buf 
 * @return 
 */  
public static String parseByte2HexStr(byte buf[]) {  
    if (null == buf) {
        return null;
    }
    StringBuffer sb = new StringBuffer();  
    for (int i = 0; i < buf.length; i++) {  
        String hex = Integer.toHexString(buf[i] & 0xFF);  
        if (hex.length() == 1) {  
            hex = '0' + hex;  
        }  
        sb.append(hex.toUpperCase());  
    }  
    return sb.toString();  
}
```

PHP示例：

```php
/**
 * 获取md5
 *
 * @access public
 * @static
 * @param  array $arr 请求原文参数
 * @return string
 */
public static function getMD5($arr) {
    if (empty($arr)) {
        return '';
    }
    ksort($arr);
    $md5 = strtoupper(md5(http_build_query($arr)));

    return $md5;
}
```

##### 示例 #####
###### 原文：
apilevel=18&bdi_cid=9177265119920&bdi_imei=jBsNnCkjxDsnCaRbetUPtw%253D%253D&bdi_imsi=NWEzYjI4N2YyYjEzYmVmOA%3D%3D&bdi_loc=5YyX5Lqs5biC&bdi_mac=YWM6YmM6MzI6OWE6YmY6MzM%3D&bdi_uip=127.0.0.1&brand=OPSSON&class=g&cname=WS%3AYY&cpack=monkey&ct=1452249585&cver=2.0&dpi=300&from=1014104s&model=Q1&os_version=4.3&pn=0&pver=3&resolution=720_1280&rn=10&token=jingyan&type=app&uid=712ACBBE63076AEC76BE860AQDEWE880&word=%E6%AC%A2%E4%B9%90%E6%96%97%E5%9C%B0%E4%B8%BB&bdi_bear=WF

###### 密文：
09C302991E0D5AEC13FF09A9E3A38B2B
