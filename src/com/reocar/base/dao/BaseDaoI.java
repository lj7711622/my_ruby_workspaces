package com.reocar.base.dao;

import java.util.List;

import com.reocar.base.model.BaseModel;
import com.reocar.base.search.BaseSearch;

public interface BaseDaoI<T extends BaseModel> {
	
	T get(String id);
	
	T load(String id);
	
	List<T> findListBySearch(BaseSearch search);
	
	T findModelBySearch(BaseSearch search);
	
	Long countBySearch(BaseSearch search);
	
	List<T> findListByHql(String hql,Object... params);
	
	List<T> findListByHql(String hql,Integer page,Integer rows,Object... params);
	
	T findModelByHql(String hql,Object... params);
	
	Long countByHql(String hql,Object... params);
	
	List<Object[]> findObjListBySql(String sql,Object... params);
	
	Object findObjBySql(String sql,Object... params);
	
	Long countBySql(String sql,Object... params);
	
	String save(T model);
	
	void update(T model);
	
	void saveOrUpdate(T model);
	
	void merge(T model);
	
	void delete(T model);
	
	void enable(T model);
	
	void disable(T model);
	
	void enlock(T model);
	
	void dislock(T model);
}
