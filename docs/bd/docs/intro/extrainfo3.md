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
from=1018654f&token=jingyan&type=app&docid=9403459&req_biz=1&bdi_imei=XWvGSz2%2F6IEu3xlWyyVa%2BQ%3D%3D&bdi_loc=5YyX5Lqs5biC&bdi_uip=127.0.0.1&bdi_bear=WF&resolution=720_1280&dpi=300&apilevel=18&os_version=4.3&brand=OPSSON&model=Q1&pver=3&ua=opera&show_time=1452249585&refer_tag=rec&uid=712ACBBE63076AEC76BE860AQDEWE880&bdi_cid=9177265119920&bdi_mac=YWM6YmM6MzI6OWE6YmY6MzM=&bdi_imsi=NWEzYjI4N2YyYjEzYmVmOA==&ct=1452249585&cname=WS:YY&cver=&cpack=monkey

###### urlencode:
from=1018654f&token=jingyan&type=app&docid=9403459&req_biz=1&bdi_imei=XWvGSz2%252F6IEu3xlWyyVa%252BQ%253D%253D&bdi_loc=5YyX5Lqs5biC&bdi_uip=127.0.0.1&bdi_bear=WF&resolution=720_1280&dpi=300&apilevel=18&os_version=4.3&brand=OPSSON&model=Q1&pver=3&ua=opera&show_time=1452249585&refer_tag=rec&uid=712ACBBE63076AEC76BE860AQDEWE880&bdi_cid=9177265119920&bdi_mac=YWM6YmM6MzI6OWE6YmY6MzM%3D&bdi_imsi=NWEzYjI4N2YyYjEzYmVmOA%3D%3D&ct=1452249585&cname=WS%3AYY&cver=&cpack=monkey

###### 排序：
apilevel=18&bdi_bear=WF&bdi_cid=9177265119920&bdi_imei=XWvGSz2%252F6IEu3xlWyyVa%252BQ%253D%253D&bdi_imsi=NWEzYjI4N2YyYjEzYmVmOA%3D%3D&bdi_loc=5YyX5Lqs5biC&bdi_mac=YWM6YmM6MzI6OWE6YmY6MzM%3D&bdi_uip=127.0.0.1&brand=OPSSON&cname=WS%3AYY&cpack=monkey&ct=1452249585&cver=&docid=9403459&dpi=300&from=1018654f&model=Q1&os_version=4.3&pver=3&refer_tag=rec&req_biz=1&resolution=720_1280&show_time=1452249585&token=jingyan&type=app&ua=opera&uid=712ACBBE63076AEC76BE860AQDEWE880

###### 签名：
CAC16505BC1964A2C4310707AD395DB4

###### 最后的请求参数：
apilevel=18&bdi_bear=WF&bdi_cid=9177265119920&bdi_imei=XWvGSz2%252F6IEu3xlWyyVa%252BQ%253D%253D&bdi_imsi=NWEzYjI4N2YyYjEzYmVmOA%3D%3D&bdi_loc=5YyX5Lqs5biC&bdi_mac=YWM6YmM6MzI6OWE6YmY6MzM%3D&bdi_uip=127.0.0.1&brand=OPSSON&cname=WS%3AYY&cpack=monkey&ct=1452249585&cver=&docid=9403459&dpi=300&from=1018654f&model=Q1&os_version=4.3&pver=3&refer_tag=rec&req_biz=1&resolution=720_1280&show_time=1452249585&token=jingyan&type=app&ua=opera&uid=712ACBBE63076AEC76BE860AQDEWE880&sign=CAC16505BC1964A2C4310707AD395DB4&action=appdetail&format=json
