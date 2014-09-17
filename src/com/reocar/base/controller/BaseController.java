package com.reocar.base.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.context.support.WebApplicationContextUtils;


public abstract class BaseController {
	protected Log log = LogFactory.getLog(this.getClass());
	
	protected static final String MESSAGE = "message";
	
	protected HttpServletRequest request;
	
	protected ApplicationContext context;
	
	/**
	 * 自动注入当前Request对象
	 * @param request
	 */
	@ModelAttribute
	public void setReq(HttpServletRequest request){
		this.request = request;
		context = WebApplicationContextUtils.getWebApplicationContext(request.getServletContext());
	}
}
