package com.reocar.core.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.springframework.stereotype.Service;

import com.reocar.base.bean.SessionUser;
import com.reocar.core.model.UserModel;
import com.reocar.core.search.UserSearch;
import com.reocar.core.service.LoginServiceI;
import com.reocar.core.service.UserServiceI;
import com.reocar.core.utils.PasswordUtils;

@Service("loginService")
public class LoginServiceImpl implements LoginServiceI{
	@Resource(name="userService")
	private UserServiceI userService;
	
	@Override
	public SessionUser login(String loginName, String loginPass, String host)  throws AuthenticationException{
		SessionUser sessionUser = new SessionUser();
		UserSearch userSearch = new UserSearch();
		userSearch.setEqualCode(loginName);
		List<UserModel> userList = userService.list(userSearch);
		if (userList == null || userList.size() == 0 || userList.size() > 1) {
			throw new UnknownAccountException();
		}
		UserModel userModel = userList.get(0);
		
		String realPass = PasswordUtils.encryptPassword(loginPass, userModel.getSalt());
		if (!StringUtils.equals(userModel.getPassword(),realPass)) {
			throw new IncorrectCredentialsException();
		}
		if (userModel.getIsDisable()) {
			throw new LockedAccountException();
		}
		sessionUser.setId(userModel.getId());
		sessionUser.setCode(userModel.getCode());
		sessionUser.setName(userModel.getName());
		return sessionUser;
	}

	@Override
	public void loginOut() {
		
	}
	
}
