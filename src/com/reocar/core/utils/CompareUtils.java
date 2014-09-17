/*
 * 作者		www.TheWk.cn.vc
 * 开发环境	Windows7 64位 MyEclipse8.6 JDK1.6.0_37
 * 开发日期	2013-6-7
 */
package com.reocar.core.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

/**
 * 
 * @author ZhengYu
 */
public class CompareUtils {
	public static final String ADD = "add";
	public static final String DEL = "del";
	//before{1,2,3} after{2,4,5}
	/**
	 * 比较两个 数组得到新增的元素 和 没有的元素 返回Map （新增KEY “add” 丢失KEY “del”）
	 * 
	 * @param before
	 * @param after
	 * @return
	 */
	public static Map<String, Object[]> findEx(Object[] before, Object[] after) {
		Map<String, Object[]> map = new HashMap<String, Object[]>();
		map.put(DEL, findNoExist(before, after));
		map.put(ADD, findNoExist(after, before));
		return map;
	}

	/**
	 * 比较两个数组 得到前一个数组的元素 在后面数组没有的
	 * 
	 * @param before
	 * @param after
	 * @return
	 */
	private static Object[] findNoExist(Object[] arg1, Object[] arg2) {
		if(null == arg1) arg1 = new Object[]{};
		if(null == arg2) arg2 = new Object[]{};
		List<Object> list = new ArrayList<Object>();
		for (int i = 0; i < arg1.length; i++) {
			boolean isExist = false;
			for (int j = 0; j < arg2.length; j++) {
				if(null != arg1[i]){
					if (arg1[i].equals(arg2[j])) {
						isExist = true;
						break;
					}
				}
			}
			if (!isExist) {
				 list.add(arg1[i]);
			}
		}
		return list.toArray();
	}

	/**
	 * 将String数组转换为Long数组
	 * 
	 * @param array
	 * @return
	 */
	public static Long[] objArrayToLong(Object[] array) {
		Long[] longArray = new Long[array.length];
		for (int i = 0; i < array.length; i++) {
			if(null != array[i]){
				String str = array[i].toString();
				if (StringUtils.isNotBlank(str)) {
					longArray[i] = Long.parseLong(str);
				}
			}
		}
		return longArray;
	}

	/**
	 * 判断字符串最后一个字符是不是逗号
	 * 
	 * @param str
	 * @return
	 */
	public static boolean isExistDotOfLast(String str) {
		boolean isExist = false;
		str = str.trim();
		char lastChar = str.charAt(str.length() - 1);
		if (lastChar == ',' || lastChar == '，') {
			isExist = true;
		}
		return isExist;
	}

	/**
	 * 判断字符串最后一个字符是不是匹配的符号
	 * 
	 * @param str
	 * @return
	 */
	public static boolean isExistCharOfLast(String str, char sgin) {
		boolean isExist = false;
		str = str.trim();
		char lastChar = str.charAt(str.length() - 1);
		if (lastChar == sgin) {
			isExist = true;
		}
		return isExist;
	}

	/**
	 * 过滤掉字符串最后一个字符
	 * 
	 * @param str
	 * @return
	 */
	public static String filterLastChar(String str, char sgin) {
		if (StringUtils.isNotBlank(str) && isExistCharOfLast(str, sgin)) {
			return str.substring(0, str.length() - 1);
		}
		return str;
	}

	/**
	 * 过滤掉字符串最后一个字符时逗号的
	 * 
	 * @param str
	 * @return
	 */
	public static String filterLastDot(String str) {
		if (StringUtils.isNotBlank(str) && isExistDotOfLast(str)) {
			return str.substring(0, str.length() - 1);
		}
		return str;
	}
	
	public static String arrayToStr(Object[] array){
		String str = "";
		if(null != array && array.length > 0){
			for(Object o : array){
				str = str + "," + o.toString();
			}
		}
		return StringUtils.isBlank(str)?str : str.substring(1);
	}
	
	public static String[] strToArray(String str,String split){
		if(StringUtils.isNotBlank(str) && str.contains(split)){
			return str.split(split);
		}
		return null;
	}
	
	public static Boolean isInArray(String[] strs,String str){
		for(String _str : strs){
			if(StringUtils.equals(_str, str)){
				return true;
			}
		}
		return false;
	}
	/**
	 * 判断空字符串的方法
	 * @param str
	 * @return
	 */
	public static Boolean isNotBlank(String str){
		Boolean result = false;
		result = StringUtils.isNotBlank(str) && !StringUtils.equals(str, "undefined");
		return result;
	}
}
