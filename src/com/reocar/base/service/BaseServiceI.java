package com.reocar.base.service;

import java.util.List;

import com.reocar.base.bean.EasyuiDataGrid;
import com.reocar.base.bean.SessionUser;
import com.reocar.base.model.BaseModel;
import com.reocar.base.search.BaseSearch;
import com.reocar.base.view.BaseView;

public interface BaseServiceI<T extends BaseModel,S extends BaseSearch,V extends BaseView> {
	EasyuiDataGrid<V> datagrid(S search);
	
	List<T> list(S search);
	
	List<V> viewList(S search);
	
	void add(T model,SessionUser user);
	
	void edit(T model,SessionUser user);
	
	void delete(T model,SessionUser user);
	
	
}
