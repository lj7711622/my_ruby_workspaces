package com.reocar.core.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.reocar.base.model.BaseModel;
@Entity
@Table(name="rc_resourceses")
public class ResourcesModel extends BaseModel{

	/**
	 * 
	 */
	private static final long serialVersionUID = -6854708816641941782L;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinTable(name="rc_resourceses",
			   joinColumns=@JoinColumn(name="_id"),
 			   inverseJoinColumns=@JoinColumn(name="_pid"))
	private ResourcesModel parent;
	
	@Column(name="_pid")
	private String pid;
	
	@Column(name="_code")
	private String code;
	
	@Column(name="_type")
	private Integer type;
	
	@Column(name="_name")
	private String name;
	
	@Column(name="_url")
	private String url;
	
	@Column(name="_remark")
	private String remark;

	public ResourcesModel getParent() {
		return parent;
	}

	public void setParent(ResourcesModel parent) {
		this.parent = parent;
	}

	public String getPid() {
		return pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}
}
