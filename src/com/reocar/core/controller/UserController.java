package com.reocar.core.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.reocar.base.controller.BaseController;
@Controller(UserController.LOCATION +"/UserController")
@RequestMapping(UserController.LOCATION)
public class UserController extends BaseController{
	public static final String LOCATION = "reocar/core/users";
}
