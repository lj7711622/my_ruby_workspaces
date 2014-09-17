package com.reocar.core.bean.excel;

import java.io.Serializable;

import jxl.format.CellFormat;

public class ExcelCell implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -3050645621614045649L;
	
	private Integer index;
	
	 private String value;
	 
	 private CellFormat format;

	 
	public Integer getIndex() {
		return index;
	}

	public void setIndex(Integer index) {
		this.index = index;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public CellFormat getFormat() {
		return format;
	}

	public void setFormat(CellFormat format) {
		this.format = format;
	}
	
}
