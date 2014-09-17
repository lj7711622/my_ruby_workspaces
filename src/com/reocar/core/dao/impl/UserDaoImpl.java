package com.reocar.core.dao.impl;

import org.springframework.stereotype.Repository;

import com.reocar.base.dao.impl.BaseDaoImpl;
import com.reocar.core.dao.UserDaoI;
import com.reocar.core.model.UserModel;
@Repository("userDao")
public class UserDaoImpl extends BaseDaoImpl<UserModel> implements UserDaoI{

}
