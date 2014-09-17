package com.reocar.core.utils;

import java.util.ResourceBundle;

/**
 * 项目参数工具类
 * 
 * 
 */
public class ResourceUtil {

	private static final ResourceBundle bundle = java.util.ResourceBundle.getBundle("config");

	/**
	 * 获得sessionInfo名字
	 * 
	 * @return
	 */
	public static final String getSessionInfoName() {
		return bundle.getString("sessionInfoName");
	}
	
	/**
	 * 获得上传文件保存路径
	 * 
	 * @return
	 */
	public static final String getUploadFileSavePath() {
		return bundle.getString("uploadFileSavePath");
	}
	
	
	public static final String getSSOUrl(){
		return bundle.getString("ssoUrl");
	}
}
