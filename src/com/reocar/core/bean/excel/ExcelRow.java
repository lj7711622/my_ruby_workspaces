package com.reocar.core.bean.excel;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ExcelRow implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -5420761400134349612L;
	private List<ExcelCell> cells = new ArrayList<ExcelCell>();
	private Integer index;
	public List<ExcelCell> getCells() {
		return cells;
	}
	public void setCells(List<ExcelCell> cells) {
		this.cells = cells;
	}
	public Integer getIndex() {
		return index;
	}
	public void setIndex(Integer index) {
		this.index = index;
	}
}
