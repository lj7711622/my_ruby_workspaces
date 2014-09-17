/*
 * 作者		www.TheWk.cn.vc
 * 开发环境	Windows7 64位 MyEclipse8.6 JDK1.6.0_37
 * 开发日期	2013-9-14
 */
package com.reocar.core.utils;

import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang.StringUtils;

/**
 * <hr/>
 * 
 * @author www.TheWk.cn.vc
 * @version 1.0 2013-9-14
 * @class common.utils.PasswordUtils
 */
public class PasswordUtils {

	/**
	 * 加密密码<br/>
	 * 先Md5Hex加密,再ShaHex加密
	 */
	public static String encryptPassword(String pwd) {
		if (StringUtils.isBlank(pwd)) {
			return null;
		}
		return DigestUtils.shaHex(DigestUtils.md5Hex(pwd));
	}

	/**
	 * 加密密码<br/>
	 * 先Md5Hex加密,再ShaHex加密,带盐值的
	 */
	public static String encryptPassword(String pwd, String salt) {
		if (StringUtils.isBlank(pwd)) {
			return null;
		}
		return encryptPassword(pwd + "{" + salt + "}");
	}
}
