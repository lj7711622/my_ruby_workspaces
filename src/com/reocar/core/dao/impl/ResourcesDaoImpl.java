package com.reocar.core.dao.impl;

import org.springframework.stereotype.Repository;

import com.reocar.base.dao.impl.BaseDaoImpl;
import com.reocar.core.dao.ResourcesDaoI;
import com.reocar.core.model.ResourcesModel;
@Repository("resourcesDao")
public class ResourcesDaoImpl extends BaseDaoImpl<ResourcesModel> implements ResourcesDaoI{
	
}
