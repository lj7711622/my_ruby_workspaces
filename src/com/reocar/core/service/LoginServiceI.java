package com.reocar.core.service;

import org.apache.shiro.authc.AuthenticationException;

import com.reocar.base.bean.SessionUser;

public interface LoginServiceI {
	SessionUser login(String loginName,String loginPass,String host)  throws AuthenticationException;
	
	void loginOut();
}
