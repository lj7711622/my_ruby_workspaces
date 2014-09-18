package com.reocar.core.security;

import javax.annotation.Resource;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

import com.reocar.base.bean.SessionUser;
import com.reocar.core.service.LoginServiceI;

public class CurrentSecurityRealm extends AuthorizingRealm{
	@Resource(name="loginService")
	private LoginServiceI loginService;
	/**
	 * 授权
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
		return info;
	}
	/**
	 * 认证
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken) throws AuthenticationException {
		UsernamePasswordToken token = (UsernamePasswordToken) authcToken;
		String loginName = token.getUsername();
		String loginPass = new String(token.getPassword());
		String host = token.getHost();
		SessionUser sessionUser = loginService.login(loginName, loginPass, host);
		return new SimpleAuthenticationInfo(sessionUser, new String(token.getPassword()), getName());
	}

}
