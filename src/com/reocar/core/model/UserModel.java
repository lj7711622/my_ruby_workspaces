package com.reocar.core.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.reocar.base.model.BaseModel;
@Entity
@Table(name="rc_users")
public class UserModel extends BaseModel{

	/**
	 * 
	 */
	private static final long serialVersionUID = 7969860343322782010L;
	
	@Column(name="_code")
	private String code;
	
	@Column(name="_name")
	private String name;
	
	@Column(name="_password")
	private String password;
	
	@Column(name="_salt")
	private String salt;
	
	@Column(name="_org_id")
	private String orgId;
	
	@Column(name="_pos_id")
	private String posId;
	
	@Column(name="_sex")
	private Integer sex;
	
	@Column(name="_card_id")
	private String cardId;
	
	@Column(name="_tel")
	private String tel;
	
	@Column(name="_address")
	private String address;
	
	@Column(name="_email")
	private String email;
	
	@Column(name="_remark")
	private String remark;

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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSalt() {
		return salt;
	}

	public void setSalt(String salt) {
		this.salt = salt;
	}

	public String getOrgId() {
		return orgId;
	}

	public void setOrgId(String orgId) {
		this.orgId = orgId;
	}

	public String getPosId() {
		return posId;
	}

	public void setPosId(String posId) {
		this.posId = posId;
	}

	public Integer getSex() {
		return sex;
	}

	public void setSex(Integer sex) {
		this.sex = sex;
	}

	public String getCardId() {
		return cardId;
	}

	public void setCardId(String cardId) {
		this.cardId = cardId;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	
}
