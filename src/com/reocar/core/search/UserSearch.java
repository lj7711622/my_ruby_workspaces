package com.reocar.core.search;

import org.apache.commons.lang.StringUtils;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;

import com.reocar.base.search.BaseSearch;

public class UserSearch extends BaseSearch{

	/**
	 * 
	 */
	private static final long serialVersionUID = -3527535991377306405L;
	
	private String equalId;
	
	private String equalName;
	
	private String equalCode;
	
	private String equalPassword;
	
	private String equalSalt;
	
	private String equalPhone;
	
	

	public String getEqualId() {
		return equalId;
	}



	public void setEqualId(String equalId) {
		this.equalId = equalId;
	}



	public String getEqualName() {
		return equalName;
	}



	public void setEqualName(String equalName) {
		this.equalName = equalName;
	}



	public String getEqualPassword() {
		return equalPassword;
	}



	public void setEqualPassword(String equalPassword) {
		this.equalPassword = equalPassword;
	}



	public String getEqualSalt() {
		return equalSalt;
	}



	public void setEqualSalt(String equalSalt) {
		this.equalSalt = equalSalt;
	}



	public String getEqualPhone() {
		return equalPhone;
	}



	public void setEqualPhone(String equalPhone) {
		this.equalPhone = equalPhone;
	}



	public String getEqualCode() {
		return equalCode;
	}



	public void setEqualCode(String equalCode) {
		this.equalCode = equalCode;
	}



	@Override
	public void setDc(DetachedCriteria dc) {
		if(StringUtils.isNotBlank(equalId)){
			dc.add(Restrictions.eq("id", equalId));
		}
		if(StringUtils.isNotBlank(this.equalName)){
			dc.add(Restrictions.eq("name", equalName));
		}
		if(StringUtils.isNotBlank(this.equalPassword)){
			dc.add(Restrictions.eq("password", equalPassword));
		}
		if(StringUtils.isNotBlank(this.equalCode)){
			dc.add(Restrictions.eq("code", equalCode));
		}
		if(StringUtils.isNotBlank(equalSalt)){
			dc.add(Restrictions.eq("salt", equalSalt));
		}
		if(StringUtils.isNotBlank(equalPhone)){
			dc.add(Restrictions.eq("tel", equalPhone));
		}
	}

}
