package com.reocar.core.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.reocar.base.controller.BaseController;

@Controller(ResourcesController.LOCATION +"/ResourcesController")
@RequestMapping(ResourcesController.LOCATION)
public class ResourcesController extends BaseController{
	
	public static final String LOCATION = "reocar/core/recources";
	
	public static final String MODULE = "reocar:core:recources";
	
	public static final String INDEX_PAGE = LOCATION+"/index";
	
	@RequestMapping(method = RequestMethod.GET, value = "index")
	public ModelAndView index(){
		return new ModelAndView(INDEX_PAGE);
	}
}
