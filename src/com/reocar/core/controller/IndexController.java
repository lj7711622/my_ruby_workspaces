package com.reocar.core.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.reocar.base.controller.BaseController;
import com.reocar.core.bean.login.LoginFormBean;
@Controller(IndexController.LOCATION +"IndexController")
@RequestMapping(IndexController.LOCATION)
public class IndexController extends BaseController{
	
	public static final String LOCATION = "reocar/layout/";
	
	public static final String INDEX_PAGE = LOCATION + "index";
	
	public static final String TOP_PAGE = LOCATION + "top";
	
	public static final String LEFT_PAGE = LOCATION + "left";
	
	public static final String CENTER_PAGE = LOCATION + "center";
	
	public static final String BOTTOM_PAGE = LOCATION + "bottom";
	
	public static final String LOGIN_PAGE = LOCATION + "login";
	
	public static final String LOGIN_OUT_PAGE = LOCATION + "login_out";
	
	@RequestMapping(method = RequestMethod.GET, value = "index")
	@RequiresAuthentication
	// RequiresAuthentication：使用该注解标注的类，实例，方法在访问或调用时，当前Subject必须在当前session中已经过认证。
	// RequiresGuest：使用该注解标注的类，实例，方法在访问或调用时，当前Subject可以是“gust”身份，不需要经过认证或者在原先的session中存在记录。
	// RequiresPermissions：当前Subject需要拥有某些特定的权限时，才能执行被该注解标注的方法。如果当前Subject不具有这样的权限，则方法不会被执行。
	// RequiresRoles：当前Subject必须拥有所有指定的角色时，才能访问被该注解标注的方法。如果当天Subject不同时拥有所有指定角色，则方法不会执行还会抛出AuthorizationException异常。
	// RequiresUser：当前Subject必须是应用的用户，才能访问或调用被该注解标注的类，实例，方法。
	public String index() {
		return INDEX_PAGE;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "top")
	public String top() {
		return TOP_PAGE;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "left")
	public String left(ModelMap model, HttpSession session) {
		return LEFT_PAGE;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "center")
	public String center(ModelMap model, HttpSession session) {
		return CENTER_PAGE;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "bottom")
	public String bottom() {
		return BOTTOM_PAGE;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "login")
	public String login(){
		return LOGIN_PAGE;
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "login")
	public String doLogin(@Valid @ModelAttribute("LoginFormBean") LoginFormBean loginFormBean, BindingResult errors, ModelMap model, HttpServletRequest request, HttpSession session){
		String message = null;
		if (errors.hasErrors()) {
			message = errors.getFieldError().getDefaultMessage();
			model.put(MESSAGE, message);
			return LOGIN_PAGE;
		}
		if (log.isDebugEnabled()) {
			log.debug("loginName:" + loginFormBean.getLoginName());
			log.debug("loginPass:" + loginFormBean.getLoginPass());
			log.debug("validateCode:" + loginFormBean.getValidateCode());
		}
		Subject subject = SecurityUtils.getSubject();
		UsernamePasswordToken token = new UsernamePasswordToken(loginFormBean.getLoginName(), loginFormBean.getLoginPass(), true);
		
		try {
			subject.login(token);
			return INDEX_PAGE;
		}
		catch (LockedAccountException lae) {// 帐号被锁定
			lae.printStackTrace();
			message = "该帐号已经被禁用,请联系系统管理员!";
		}
		catch (UnknownAccountException uae) {// 帐号未找到
			uae.printStackTrace();
			message = "帐号不存在,请检查!";
		}
		catch (IncorrectCredentialsException ice) {// 帐号或密码认证失败
			ice.printStackTrace();
			message = "帐号或密码错误,请检查!";
		}
		catch (AuthenticationException ae) {// 一般在身份验证过程中由于错误引发的异常。
			ae.printStackTrace();
			message = "登录失败,请联系系统管理员!";
		}
		token.clear();
		model.put(MESSAGE, message);
		return LOGIN_PAGE;
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "loginout")
	public String doLoginout(HttpServletResponse response) {
		response.setHeader("Pragma", "No-cache");
		response.setHeader("Cache-Control", "no-cache");
		response.setDateHeader("Expires", 0);
		response.setHeader("cache-control", "no-store");
		Subject subject = SecurityUtils.getSubject();
		subject.logout();
		return LOGIN_OUT_PAGE;
	}
	
}
