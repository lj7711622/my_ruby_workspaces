package com.reocar.core.bean.excel;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Properties;

import org.apache.commons.lang.StringUtils;

import com.reocar.base.model.BaseModel;

public class ExcelBean extends BaseModel{
	/**
	 * 
	 */
	private static final long serialVersionUID = 2445393836958195763L;
	private ExcelBean(){}
	
	public static ExcelBean createBean(File properties){
		ExcelBean bean = new ExcelBean();
		bean.loadProperties(properties);
		return bean;
	}

	/**
	 * 文件路径
	 */
	private String fileUrl;
	/**
	 * 文件名称
	 */
	private String fileName;
	/**
	 * 数据集合
	 */
	private List<List<?>> sourceList = new LinkedList<List<?>>();
	/**
	 * 工作页集合
	 */
	private List<ExcelSheet> sheets = new ArrayList<ExcelSheet>();
	/**
	 * 类集合
	 */
	private List<Class<?>> clazzList = new LinkedList<Class<?>>();
	/**
	 * 类的名称集合
	 */
	private List<String> clazzNameList = new LinkedList<String>();
	/**
	 * 字段集合
	 */
	private List<List<String>> fieldLists = new LinkedList<List<String>>();
	/**
	 * 字段名称集合
	 */
	private List<List<String>> fieldNameLists = new LinkedList<List<String>>();
	
	
	public String getFileUrl() {
		return fileUrl;
	}

	public void setFileUrl(String fileUrl) {
		this.fileUrl = fileUrl;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public List<ExcelSheet> getSheets() {
		return sheets;
	}

	public void setSheets(List<ExcelSheet> sheets) {
		this.sheets = sheets;
	}

	public List<Class<?>> getClazzList() {
		return clazzList;
	}

	public void setClazzList(List<Class<?>> clazzList) {
		this.clazzList = clazzList;
	}

	public List<List<String>> getFieldLists() {
		return fieldLists;
	}

	public void setFieldLists(List<List<String>> fieldLists) {
		this.fieldLists = fieldLists;
	}
	
	
	public List<List<?>> getSourceList() {
		return sourceList;
	}

	public void setSourceList(List<List<?>> sourceList) {
		this.sourceList = sourceList;
	}
	
	
	public List<String> getClazzNameList() {
		return clazzNameList;
	}

	public void setClazzNameList(List<String> clazzNameList) {
		this.clazzNameList = clazzNameList;
	}

	public List<List<String>> getFieldNameLists() {
		return fieldNameLists;
	}

	public void setFieldNameLists(List<List<String>> fieldNameLists) {
		this.fieldNameLists = fieldNameLists;
	}

	/**
	 * 加载属性文件
	 * @param file
	 */
	private  void loadProperties(File file){
		try {
			Properties properties = new Properties();
			properties.load(new FileInputStream(file));
			String clazz = properties.getProperty("clazz");
			String field = properties.getProperty("field");
			String clazzName = properties.getProperty("clazzName");
			String fieldName = properties.getProperty("fieldName");
			loadClazz(clazz);
			loadClazzName(clazzName);
			loadField(field);
			loadFieldName(fieldName);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	/**
	 * 加载视图类
	 * @param clazz
	 */
	private void loadClazz(String clazz){
		try {
			if(StringUtils.isNotBlank(clazz)){
				if(clazz.contains(";")){
					String[] clazzs = clazz.split(";");
					if(null != clazzs && clazzs.length > 0){
						for(String cl : clazzs){
							if(StringUtils.isNotBlank(cl)){
								this.clazzList.add(Class.forName(cl));
							}
						}
					}
				}else{
					this.clazzList.add(Class.forName(clazz));
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	/**
	 * 加载视图类解释名称
	 * @param clazzName
	 */
	private void loadClazzName(String clazzName){
		try {
			if(StringUtils.isNotBlank(clazzName)){
				if(clazzName.contains(";")){
					String[] clazzs = clazzName.split(";");
					if(null != clazzs && clazzs.length > 0){
						for(String cl : clazzs){
							if(StringUtils.isNotBlank(cl)){
								this.clazzNameList.add(cl);
							}
						}
					}
				}else{
					this.clazzNameList.add(clazzName);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	/**
	 * 加载字段
	 * @param field
	 */
	private void loadField(String field){
		try {
			if(StringUtils.isNotBlank(field)){
				if(field.contains(";")){
					String[] fieldLists = field.split(";");
					for(String fieldListStr : fieldLists){
						List<String> fields= new LinkedList<String>();
						if(StringUtils.isNotBlank(fieldListStr)){
							if(fieldListStr.contains(",")){
								String[] fieldStr = fieldListStr.split(",");
								for(String f :fieldStr){
									if(StringUtils.isNotBlank(f)){
										fields.add(f);
									}
								}
							}else{
								fields.add(fieldListStr);
							}
						}
						this.fieldLists.add(fields);
					}
				}else{
					List<String> fields = new  LinkedList<String>();
					if(field.contains(",")){
						String[] fieldStrs = field.split(",");
						for(String fieldStr : fieldStrs){
							if(StringUtils.isNotBlank(fieldStr)){
								fields.add(fieldStr);
							}
						}
					}else{
						fields.add(field);
					}
					this.fieldLists.add(fields);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	private void loadFieldName(String fieldName){
		try {
			if(StringUtils.isNotBlank(fieldName)){
				if(fieldName.contains(";")){
					String[] fieldLists = fieldName.split(";");
					for(String fieldListStr : fieldLists){
						List<String> fields= new LinkedList<String>();
						if(StringUtils.isNotBlank(fieldListStr)){
							if(fieldListStr.contains(",")){
								String[] fieldStr = fieldListStr.split(",");
								for(String f :fieldStr){
									if(StringUtils.isNotBlank(f)){
										fields.add(f);
									}
								}
							}else{
								fields.add(fieldListStr);
							}
						}
						this.fieldNameLists.add(fields);
					}
				}else{
					List<String> fields = new  LinkedList<String>();
					if(fieldName.contains(",")){
						String[] fieldStrs = fieldName.split(",");
						for(String fieldStr : fieldStrs){
							if(StringUtils.isNotBlank(fieldStr)){
								fields.add(fieldStr);
							}
						}
					}else{
						fields.add(fieldName);
					}
					this.fieldNameLists.add(fields);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
