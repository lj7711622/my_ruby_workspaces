package com.reocar.core.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.reocar.base.convert.BaseConvertI;
import com.reocar.base.dao.BaseDaoI;
import com.reocar.base.service.BaseServiceI;
import com.reocar.base.service.impl.BaseServiceImpl;
import com.reocar.core.convert.ResourcesConvert;
import com.reocar.core.dao.ResourcesDaoI;
import com.reocar.core.model.ResourcesModel;
import com.reocar.core.search.ResourcesSearch;
import com.reocar.core.view.ResourcesView;

@Service("resourcesService")
public class ResourcesServiceImpl extends BaseServiceImpl<ResourcesModel, ResourcesSearch, ResourcesView> implements BaseServiceI<ResourcesModel, ResourcesSearch, ResourcesView>{
	@Resource(name="resourcesDao")
	private ResourcesDaoI resourcesDao;
	@Override
	public BaseDaoI<ResourcesModel> getDao() {
		return resourcesDao;
	}
	@Override
	public BaseConvertI<ResourcesModel, ResourcesView> getConvert() {
		return new ResourcesConvert();
	}
}
