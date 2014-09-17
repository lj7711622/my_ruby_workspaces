package com.reocar.core.tools;

import org.apache.commons.lang.StringUtils;

public class StringFormat {

	/**
	 * 格式化字符串
	 * 
	 * @param str 字符串
	 * @param params 对应占位符参数
	 * @return
	 */
	public static String format(String str, Object... params) {
		String _str = str;
		if (StringUtils.isNotBlank(_str) && params != null) {
			for (int i = 0, len = params.length; i < len; i++) {
				_str = _str.replace("{" + i + "}", params[i].toString());
			}
		}
		return _str;
	}

	public static String filterAndFormatStrDate(String str) {
		String result = str;
		if (StringUtils.isNotBlank(str) && ValidateTools.isDateyyyyMMdd(str)) {
			result = str + " 00:00:00";
		}
		return result;
	}
}
