package com.reocar.base.dao.impl;

import java.lang.reflect.ParameterizedType;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.springframework.beans.factory.annotation.Autowired;

import com.reocar.base.dao.BaseDaoI;
import com.reocar.base.model.BaseModel;
import com.reocar.base.search.BaseSearch;
import com.reocar.core.tools.StringFormat;
@SuppressWarnings("unchecked")
public class BaseDaoImpl<T extends BaseModel> implements BaseDaoI<T> {
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public T get(String id) {
		return (T)sessionFactory.getCurrentSession().get(getClazz(), id);
	}

	@Override
	public T load(String id) {
		return (T)sessionFactory.getCurrentSession().load(getClazz(), id);
	}

	@Override
	public List<T> findListBySearch(BaseSearch search) {
		DetachedCriteria dc = DetachedCriteria.forClass(getClazz());
		search.setDc(dc);
		if(StringUtils.equals(search.getOrder(), BaseSearch.Order_Type_Asc)){
			dc.addOrder(Order.asc(search.getSort()));
		}else{
			dc.addOrder(Order.desc(search.getSort()));
		}
		return dc.getExecutableCriteria(sessionFactory.getCurrentSession())
						.setFirstResult((search.getPage()-1)*search.getRows())
						.setMaxResults(search.getRows())
						.list();
	}

	@Override
	public T findModelBySearch(BaseSearch search) {
		DetachedCriteria dc = DetachedCriteria.forClass(getClazz());
		search.setDc(dc);
		return (T)dc.getExecutableCriteria(sessionFactory.getCurrentSession()).uniqueResult();
	}

	@Override
	public Long countBySearch(BaseSearch search) {
		DetachedCriteria dc = DetachedCriteria.forClass(getClazz());
		search.setDc(dc);
		return (Long)dc.getExecutableCriteria(sessionFactory.getCurrentSession()).setProjection(Projections.rowCount()).uniqueResult();
	}

	@Override
	public List<T> findListByHql(String hql, Object... params) {
		Query q = this.sessionFactory.getCurrentSession().createQuery(hql);
		if (params != null && params.length > 0) {
			for (Integer i = 0; i < params.length; i++) {
				q.setParameter(i, params[i]);
			}
		}
		return q.list();
	}
	
	@Override
	public List<T> findListByHql(String hql,Integer page,Integer rows,Object... params){
		Query q = this.sessionFactory.getCurrentSession().createQuery(hql);
		if (params != null && params.length > 0) {
			for (Integer i = 0; i < params.length; i++) {
				q.setParameter(i, params[i]);
			}
		}
		return q.setFirstResult((page - 1) * rows).setMaxResults(rows).list();
	}

	@Override
	public T findModelByHql(String hql, Object... params) {
		Query q = this.sessionFactory.getCurrentSession().createQuery(hql);
		if (params != null && params.length > 0) {
			for (Integer i = 0; i < params.length; i++) {
				q.setParameter(i, params[i]);
			}
		}
		return (T)q.uniqueResult();
	}

	@Override
	public Long countByHql(String hql, Object... params) {
		Query q = this.sessionFactory.getCurrentSession().createQuery(hql);
		if (params != null && params.length > 0) {
			for (Integer i = 0; i < params.length; i++) {
				q.setParameter(i, params[i]);
			}
		}
		return (Long) q.uniqueResult();
	}

	@Override
	public List<Object[]> findObjListBySql(String sql, Object... params) {
		if(StringUtils.isNotBlank(sql)){
			sql = StringFormat.format(sql, params);
		}
		return this.sessionFactory.getCurrentSession().createSQLQuery(sql).list();
	}

	@Override
	public Object findObjBySql(String sql, Object... params) {
		if(StringUtils.isNotBlank(sql)){
			sql = StringFormat.format(sql, params);
		}
		return this.sessionFactory.getCurrentSession().createSQLQuery(sql).uniqueResult();
	}

	@Override
	public Long countBySql(String sql, Object... params) {
		if(StringUtils.isNotBlank(sql)){
			sql = StringFormat.format(sql, params);
		}
		return (Long)this.sessionFactory.getCurrentSession().createSQLQuery(sql).uniqueResult();
	}

	@Override
	public String save(T model) {
		return (String)this.sessionFactory.getCurrentSession().save(model);
	}

	@Override
	public void update(T model) {
		this.sessionFactory.getCurrentSession().update(model);
	}

	@Override
	public void saveOrUpdate(T model) {
		 this.sessionFactory.getCurrentSession().saveOrUpdate(model);;
	}

	@Override
	public void merge(T model) {
		this.sessionFactory.getCurrentSession().merge(model);
	}

	@Override
	public void delete(T model) {
		this.sessionFactory.getCurrentSession().delete(model);;
	}

	@Override
	public void enable(T model) {
		model.setIsDisable(false);
		this.update(model);
	}

	@Override
	public void disable(T model) {
		model.setIsDisable(true);
		this.update(model);
	}

	@Override
	public void enlock(T model) {
		model.setIsLock(true);
		this.update(model);
	}

	@Override
	public void dislock(T model) {
		model.setIsLock(false);
		this.update(model);
	}
	
	private Class<T> getClazz(){
		return  (Class< T >)((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
	}
}
