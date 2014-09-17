package com.reocar.core.bean.login;

import com.reocar.base.bean.BaseBean;

public class LoginFormBean extends BaseBean{

	/**
	 * 
	 */
	private static final long serialVersionUID = -1189544585487191750L;
	
	private String loginName;
	
	private String loginPass;
	
	private String validateCode;

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getLoginPass() {
		return loginPass;
	}

	public void setLoginPass(String loginPass) {
		this.loginPass = loginPass;
	}

	public String getValidateCode() {
		return validateCode;
	}

	public void setValidateCode(String validateCode) {
		this.validateCode = validateCode;
	}
	
	

}
