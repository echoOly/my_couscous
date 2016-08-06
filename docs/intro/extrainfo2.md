---
currentMenu: extrainfo2
---
### 数据加密算法 ###
------------

为保证用户隐私数据，需要对用户提交的敏感数据进行加密处理，说明如下：
1.	获取AES加密需要的key。将渠道号与密钥（API平台提供）拼接，然后获取拼接生成字符串的md5值并取后16位，最后将截取后的结果全部转为大写。
2.	处理AES加密需要的iv值。iv向API平台申请即可，如果申请到的iv值不足16位，需要用字符“0”补足。
3.	填充原文数据。具体算法见示例。
4.	AES加密模式为CBC，实现算法为RIJNDAEL算法。具体初始化方式见示例。
5.	生成的密文需要进行base64编码处理，并进行urlencode。

Java示例程序(要求jdk1.8):

```java
/*
 * Copyright (C) 2015 Baidu Inc. All rights reserved.
 */
package com.baidu.example;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.Base64;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;


/**
 *
 * @author yuanxingzhong
 * @since 2015年12月16日
 */
public final class AESUtility {

    /**
     * 加密，先aes，再base64再urlencode
     * @param rawStr
     * @param key
     * @param iv
     * @return
     */
    public static String encode(String rawStr, String from, String key, String iv) {
        if (null == rawStr || null == key || rawStr.isEmpty() || key.isEmpty()) {
            System.err.println("加密的必要参数为空，加密失败！");
            return null;
        }
        byte[] aesBytes = AESEncode(rawStr, from, key, iv);
        if (null == aesBytes) {
            System.err.println("aes加密失败");
            return null;
        }

        String base64Encode = Base64.getEncoder().encodeToString(aesBytes);

        String urlEncodeStr =  URLEncoder.encode(base64Encode);

        return urlEncodeStr;
    }

    /**
     * 对字符串进行aes加密
     * @param rawStr
     * @param key
     * @param iv
     * @return
     */
    private static byte[] AESEncode(String rawStr, String from, String key, String iv) {
        try {
            IvParameterSpec ivParam = null;
            if (null != iv && !iv.isEmpty()) {
                ivParam = new IvParameterSpec(generateIV(iv));
            }

            String strMd5 = toMd5(from + key);
            if (null == strMd5) {
                System.err.println("生成key失败！");
                return null;
            }
            byte[] strBytes = strMd5.getBytes("utf-8");

            SecretKeySpec cipherKey = new SecretKeySpec(strBytes, strBytes.length / 2, strBytes.length / 2, "AES");

            Cipher encodeCipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
            if (null != ivParam) {
                encodeCipher.init(Cipher.ENCRYPT_MODE, cipherKey, ivParam);
            } else {
                encodeCipher.init(Cipher.ENCRYPT_MODE, cipherKey);
            }

            return encodeCipher.doFinal(rawStr.getBytes("utf-8"));

        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (NoSuchPaddingException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (InvalidAlgorithmParameterException e) {
            e.printStackTrace();
        } catch (IllegalBlockSizeException e) {
            e.printStackTrace();
        } catch (BadPaddingException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static byte[] generateIV(String iv) {
        if (null == iv || iv.isEmpty()) {
            return null;
        }
        try {
            byte[] ivBytes = iv.getBytes("utf-8");
            return Arrays.copyOf(ivBytes, 16);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return null;
    }


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

}
```
.net示例程序：

```.net
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace YYGJ.CollectApp.Job.JobHelpers.Helper
{
    public class BDAESUtility
    {
        /**
     * 加密，先aes，再base64再urlencode
     * @param rawStr
     * @param key
     * @param iv
     * @return
     */
        public static string Encode(string rawStr, string key, string channel, string iv)
        {
            if (null == rawStr || null == key || string.IsNullOrEmpty(rawStr) || string.IsNullOrEmpty(key))
            {
                //加密的必要参数为空，加密失败！
                return null;
            }
            byte[] aesBytes = AESEncode(rawStr, key, channel, iv);
            if (null == aesBytes)
            {
                //aes加密失败
                return null;
            }

            string base64Encode = Convert.ToBase64String(aesBytes, 0, aesBytes.Length);

            string urlEncodeStr = HttpUtility.UrlEncode(base64Encode, Encoding.UTF8);

            return urlEncodeStr;
        }

        /**
         * 对字符串进行aes加密
         * @param rawStr
         * @param key
         * @param iv
         * @return
         */
        private static byte[] AESEncode(string rawStr, string key, string channel, string iv)
        {
            if (string.IsNullOrEmpty(key) || string.IsNullOrEmpty(rawStr))
            {
                throw new Exception("加密key字符串是空或者加密字符串为空！");
            }
            string strMd5 = ToMd5(channel+key);

            strMd5 = strMd5.Substring(strMd5.Length - 16).ToUpper();

            if (null == strMd5)
            {
                return null;
            }
            byte[] bKey = Encoding.UTF8.GetBytes(strMd5);
            byte[] ivBytes = Encoding.UTF8.GetBytes(iv);
            byte[] bIV = ToByte(ivBytes, 16); ;
            byte[] bStr = Encoding.UTF8.GetBytes(rawStr);
            try
            {
                SymmetricAlgorithm desc = Aes.Create();
                desc.Mode = CipherMode.CBC;//CipherMode.CBC
                using (MemoryStream mStream = new MemoryStream())
                {
                    using (CryptoStream cStream = new CryptoStream(mStream, desc.CreateEncryptor(bKey, bIV), CryptoStreamMode.Write))
                    {
                        cStream.Write(bStr, 0, bStr.Length);
                        cStream.FlushFinalBlock();
                        byte[] res = mStream.ToArray();
                        return res;
                    }
                }
            }
            catch
            {
                return null;
            }
        }

        /// <summary>
        /// 把任意类型数据按字节读取到byte[]
        /// </summary>
        /// <param name="sIn">该类型的一个实例</param>
        /// <param name="nLen">该类型的长度</param>
        /// <returns>字节流</returns>
        public static byte[] ToByte(byte[] bytes, int nLen)
        {
            IntPtr psIn = IntPtr.Zero;
            byte[] buffer = new byte[nLen];
            int length = bytes.Length;
            if (length < 16)
            {
                for (int i = 0; i < length; i++)
                {
                    buffer[i] = bytes[i];
                }
                for (int i = length; i < 16; i++)
                {
                    buffer[i] = 0;
                }
                return buffer;
            }
            return bytes;
        }
        //将字节流转成指定类型
        public static object ToObject(byte[] rawdatas, Type anytype)
        {
            int rawsize = Marshal.SizeOf(anytype);
            if (rawsize > rawdatas.Length) return null;
            IntPtr buffer = Marshal.AllocHGlobal(rawsize);//分配指定大小的内存,返回一个指针
            Marshal.Copy(rawdatas, 0, buffer, rawsize);
            object retobj = Marshal.PtrToStructure(buffer, anytype);
            Marshal.FreeHGlobal(buffer);
            return retobj;
        }

        public static byte[] GenerateIV(string iv)
        {
            if (null == iv || string.IsNullOrEmpty(iv))
            {
                return null;
            }
            try
            {
                byte[] ivBytes = Encoding.UTF8.GetBytes(iv);
                return ToByte(ivBytes, 16);
            }
            catch (Exception e)
            {
                return null;
            }
        }


        /**
         * 获取字符串的md5
         * @param str
         * @return
         */
        public static string ToMd5(string str)
        {
            try
            {
                using (MD5 md5 = MD5.Create())
                {
                    byte[] bytes = Encoding.UTF8.GetBytes(str);
                    bytes = md5.ComputeHash(bytes);
                    if (null != bytes)
                    {
                        return ParseByte2HexStr(bytes);
                    }
                }
            }
            catch (Exception e)
            {
                return e.StackTrace;
            }
            return null;
        }

        /**
         * 将二进制转换成16进制
         * @param buf
         * @return
         */
        public static String ParseByte2HexStr(byte[] bytes)
        {
            string hexString = string.Empty;
            if (bytes != null)
            {
                StringBuilder strB = new StringBuilder();

                for (int i = 0; i < bytes.Length; i++)
                {
                    strB.Append(bytes[i].ToString("X2"));
                }
                hexString = strB.ToString();
            }
            return hexString;
        }
    }
}
```
PHP示例程序：

```php
/*
 * Copyright (C) 2015 Baidu Inc. All rights reserved.
 */
class CryptAES {
    /**
     * @brief 加密
     *
     * @param $usData 需要加密的明文
     * @param $from   渠道标示
     * @param $secret secret
     * @param $iv     iv
     *
     * @return string
     */
    public static function encode($usData, $from, $secret, $iv) {
        if (!self::_validParams($from, $secret, $iv)) {
            return false;
        }

        list($key, $iv) = self::_init($from, $secret, $iv);
        $usData         = self::pad($usData);
        $enmcrypt       = mcrypt_module_open(MCRYPT_RIJNDAEL_128, '', MCRYPT_MODE_CBC, '');
        mcrypt_generic_init($enmcrypt, $key, $iv);

        // 加密
        $data = mcrypt_generic($enmcrypt, $usData);
        $data = urlencode(base64_encode($data));
        mcrypt_generic_deinit($enmcrypt);
        mcrypt_module_close($enmcrypt);

        return $data;
    }

    /**
     * @brief 解密
     *
     * @param $usData 需要解密的密文
     * @param $from   渠道标示
     * @param $secret secret
     * @param $iv     iv
     *
     * @return string
     */
    public static function decode($usData, $from, $secret, $iv) {
        if (empty($usData) || !self::_validParams($from, $secret, $iv)) {
            return false;
        }

        list($key, $iv) = self::_init($from, $secret, $iv);
        $usData         = base64_decode(urldecode($usData));
        $enmcrypt       = mcrypt_module_open(MCRYPT_RIJNDAEL_128, '', MCRYPT_MODE_CBC, '');
        mcrypt_generic_init($enmcrypt, $key, $iv);
        $data = mdecrypt_generic($enmcrypt, $usData);
        mcrypt_generic_deinit($enmcrypt);
        mcrypt_module_close($enmcrypt);
        return self::unpad($data);
    }

    /**
     * @brief 初始化加密参数
     *
     * @param $from
     * @param $secret
     * @param $iv
     *
     * @return
     */
    private static function _init($from, $secret, $iv) {
        // 获取加密key
        $key = strtoupper(substr(md5($from . $secret), -16));
        // 如果iv长度不足16字节，进行补足
        $iv  = str_pad(substr($iv, 0, 16), 16, chr(0));

        return array($key, $iv);
    }

    /**
     * @brief 验参
     *
     * @param $from
     * @param $secret
     * @param $iv
     *
     * @return
     */
    private static function _validParams($from, $secret, $iv) {
        if (empty($from) || empty($secret) || empty($iv)) {
            return false;
        }
        return true;
    }
    /**
     * @brief pkcs 填充
     *
     * @param $text string
     *
     * @return string
     */
    public static function pad($text) {
        $blocksize = 16;
        $pad       = $blocksize - (strlen($text) % $blocksize);
        return $text . str_repeat(chr($pad), $pad);
    }

    /**
     * @brief 解pkcs
     *
     * @param $text string
     *
     * @return string
     */
    public static function unpad($text) {
        $pad = ord($text{strlen($text) - 1});
        if ($pad > strlen($text)) return false;
        if (strspn($text, chr($pad), strlen($text) - $pad) != $pad) return false;
        return substr($text, 0, -1 * $pad);
    }
}
```

##### 示例 #####
###### imei原文：
1231414124131231

###### 渠道号、密钥及iv：
渠道号：testiD
密钥：testiD
iv：12345678

###### 密文：
oHYCp0y3sur6VerprhWrjFParjYcUZkIUpVsqQEpPTU%3D
