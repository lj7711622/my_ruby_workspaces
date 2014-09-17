package com.reocar.base.search;

import java.io.Serializable;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;
import org.hibernate.criterion.DetachedCriteria;

public abstract class  BaseSearch implements Serializable{
		
		/**
	 * 
	 */
	private static final long serialVersionUID = 8029488306749225056L;
	public static final String        Order_Type_Asc      = "asc";
	public static final String        Order_Type_Desc     = "desc";
	protected static final int        Default_Rows        = Integer.MAX_VALUE;
	protected static final int        Default_Page        = 1;
	protected static final String     Default_Order       = Order_Type_Asc;
	protected static final String     Default_Sort        = "id";
	// 每页条数
	protected int    rows          = Default_Rows;
	// 当前页码
	protected int    page          = Default_Page;
	// 排序字段
	protected String sort          = Default_Sort;
	// 排序类型
	protected String order         = Default_Order;
	
	
	public int getRows() {
		return rows;
	}

	public void setRows(int rows) {
		this.rows = rows;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public String getSort() {
		return sort;
	}

	public void setSort(String sort) {
		this.sort = sort;
	}

	public String getOrder() {
		return order;
	}

	public void setOrder(String order) {
		this.order = order;
	}

	protected boolean isBlank() throws InstantiationException, IllegalAccessException{
		return this.equals(this.getClass().newInstance());
	}
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}
	@Override
	public boolean equals(Object obj) {
		if (obj == null) {
			return false;
		}
		return EqualsBuilder.reflectionEquals(obj, this);
	}

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this, ToStringStyle.MULTI_LINE_STYLE);
	}
	
	public abstract void setDc(DetachedCriteria dc);
}
