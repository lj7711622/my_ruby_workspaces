package com.reocar.base.bean;

import java.util.ArrayList;
import java.util.List;

import com.reocar.base.view.BaseView;


public class EasyuiDataGrid<V extends BaseView> extends EasyuiBean{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2972435119596521478L;
	
	private Long total = 0L;// 总记录数
	private List<V> rows = new ArrayList<V>();// 每行记录
	private List<V> footer = new ArrayList<V>();
	private List<EasyuiDataGridColumn> showColumns = new ArrayList<EasyuiDataGridColumn>();
	private List<EasyuiDataGridRow> showRows = new ArrayList<EasyuiDataGridRow>();
	public Long getTotal() {
		return total;
	}
	public void setTotal(Long total) {
		this.total = total;
	}
	public List<V> getRows() {
		return rows;
	}
	public void setRows(List<V> rows) {
		this.rows = rows;
	}
	public List<V> getFooter() {
		return footer;
	}
	public void setFooter(List<V> footer) {
		this.footer = footer;
	}
	public List<EasyuiDataGridColumn> getShowColumns() {
		return showColumns;
	}
	public void setShowColumns(List<EasyuiDataGridColumn> showColumns) {
		this.showColumns = showColumns;
	}
	public List<EasyuiDataGridRow> getShowRows() {
		return showRows;
	}
	public void setShowRows(List<EasyuiDataGridRow> showRows) {
		this.showRows = showRows;
	}
}
