package com.reocar.core.utils;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.lang.StringUtils;

public class TimestampUtil {
	public static Timestamp getDefault(){
		return new Timestamp(System.currentTimeMillis());
	}
	
	public static Timestamp convertByStr(String str,String formatStr){
		if(StringUtils.isNotBlank(str)){
			if(StringUtils.isBlank(formatStr)) formatStr = "yyyy-MM-dd HH:mm:ss";
			Date date = DateUtil.format(str, formatStr);
			return new Timestamp(date.getTime());
		}
		return null;
	}
	
	public static String toString(Timestamp time){
		if(null != time){
			SimpleDateFormat format = new SimpleDateFormat("yyyy年MM月dd日 HH时mm分ss秒");
			return format.format(time).toString();
		}
		return "";
	}
	
	public static String toString(Timestamp time,String parten){
		if(null != time){
			SimpleDateFormat format = new SimpleDateFormat(parten);
			return format.format(time).toString();
		}
		return "";
	}
}
