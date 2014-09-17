package com.reocar.base.bean;

public class SessionUser extends BaseBean{

	/**
	 * 
	 */
	private static final long serialVersionUID = 827741691042002665L;
	
	private String id;
	
	private String code;
	
	private String name;
	
	

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	public String format(){
		return this.code+"."+this.name;
	}
}
