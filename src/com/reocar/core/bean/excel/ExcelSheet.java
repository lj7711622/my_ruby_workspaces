package com.reocar.core.bean.excel;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import jxl.write.Label;

public class ExcelSheet implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -3357234732474355198L;
	private List<Label> head;
	private List<ExcelRow> rows = new ArrayList<ExcelRow>();
	private Integer index;
	private String name;
	public List<ExcelRow> getRows() {
		return rows;
	}
	public void setRows(List<ExcelRow> rows) {
		this.rows = rows;
	}
	public Integer getIndex() {
		return index;
	}
	public void setIndex(Integer index) {
		this.index = index;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Label> getHead() {
		return head;
	}
	public void setHead(List<Label> head) {
		this.head = head;
	}
	
}
