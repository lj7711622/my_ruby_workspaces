package com.reocar.base.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import com.reocar.base.bean.EasyuiDataGrid;
import com.reocar.base.bean.SessionUser;
import com.reocar.base.convert.BaseConvertI;
import com.reocar.base.dao.BaseDaoI;
import com.reocar.base.model.BaseModel;
import com.reocar.base.search.BaseSearch;
import com.reocar.base.service.BaseServiceI;
import com.reocar.base.view.BaseView;

public abstract class BaseServiceImpl<T extends BaseModel,S extends BaseSearch,V extends BaseView> implements BaseServiceI<T,S,V>{
	public abstract BaseDaoI<T> getDao();
	
	public abstract BaseConvertI<T, V> getConvert();
	
	@Override
	public EasyuiDataGrid<V> datagrid(S search) {
		EasyuiDataGrid<V> dg = new EasyuiDataGrid<V>();
		List<V> view_list = new ArrayList<V>();
		Long count = getDao().countBySearch(search);
		if(count > 0){
			view_list = this.viewList(search);
		}
		dg.setRows(view_list);
		dg.setTotal(count);
		return dg;
	}
	@Override
	public List<T> list(S search){
		return  getDao().findListBySearch(search);
	}
	@Override
	public List<V> viewList(S search){
		List<V> view_list = new ArrayList<V>();
		List<T> list = this.list(search);
		for(T model : list){
			view_list.add(getConvert().convertToView(model));
		}
		return view_list;
	}
	@Override
	public void add(T model,SessionUser user) {
		try {
			Date _time = new Date();
			model.setId(UUID.randomUUID().toString());
			model.setCreateBy(user.format());
			model.setCreateTime(_time);
			model.setUpdateBy(user.format());
			model.setUpdateTime(_time);
			getDao().save(model);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	@Override
	public void edit(T model,SessionUser user) {
		try {
			model.setUpdateBy(user.format());
			model.setUpdateTime(new Date());
			getDao().update(model);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	@Override
	public void delete(T model,SessionUser user) {
		try {
			getDao().delete(model);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
