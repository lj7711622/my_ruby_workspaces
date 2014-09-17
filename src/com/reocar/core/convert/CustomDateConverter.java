/*
 * 作者		www.TheWk.cn.vc
 * 开发环境	Windows7 64位 MyEclipse8.6 JDK1.6.0_37
 * 开发日期	2013-9-20
 */
package com.reocar.core.convert;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.core.convert.converter.Converter;

/**
 * <hr/>
 * 
 * @author www.TheWk.cn.vc
 * @version 1.0 2013-9-20
 * @class common.converter.CustomDateConverter
 */
public class CustomDateConverter implements Converter<String, Date> {

	private static final DateFormat DateFormat = new SimpleDateFormat("yyyy-MM-dd");

	@Override
	public Date convert(String source) {
		try {
			return DateFormat.parse(source);
		}
		catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}
}
