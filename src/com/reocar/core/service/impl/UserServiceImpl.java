package com.reocar.core.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.reocar.base.convert.BaseConvertI;
import com.reocar.base.dao.BaseDaoI;
import com.reocar.base.service.impl.BaseServiceImpl;
import com.reocar.core.convert.UserConvert;
import com.reocar.core.dao.UserDaoI;
import com.reocar.core.model.UserModel;
import com.reocar.core.search.UserSearch;
import com.reocar.core.service.UserServiceI;
import com.reocar.core.view.UserView;

@Service("userService")
public class UserServiceImpl extends BaseServiceImpl<UserModel, UserSearch, UserView> implements UserServiceI{
	@Resource(name="userDao")
	private UserDaoI userDao;
	
	@Override
	public BaseDaoI<UserModel> getDao() {
		return userDao;
	}

	@Override
	public BaseConvertI<UserModel, UserView> getConvert() {
		return new UserConvert();
	}

}
