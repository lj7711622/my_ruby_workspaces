
package com.reocar.core.utils;

import java.beans.IntrospectionException;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang.StringUtils;

/**
 * 反射工具类
 * 
 * @author Mr.Shower
 */
public class ReflectUtils {

    /**
     * 查找所有非静态的字段包括父类的
     * 
     * @param clazz
     *            目标class
     * @return 字段List集合
     */
    public static List<Field> getFields(Class<?> clazz) {
		List<Field> list = new ArrayList<Field>();
		for (Field field : clazz.getDeclaredFields()) {
			boolean isStatic = Modifier.isStatic(field.getModifiers());
			if(!isStatic){
				list.add(field);
			}
		}
		if(null != clazz.getSuperclass()){
			Class<?> superClazz = clazz.getSuperclass();
			list.addAll(getFields(superClazz));
		}
		return list;
    }
    /**
     * 得到指定字段数组的Field
     */
    public static List<Field> getFields(Class<?> clazz,List<String> fields){
    	List<Field> list = new ArrayList<Field>();
    	for (Field field : clazz.getDeclaredFields()) {
    		for(String fieldName:fields){
    			if(StringUtils.equals(fieldName, field.getName())){
    				list.add(field);break;
    			}
    		}
		}
		if(null != clazz.getSuperclass()){
			Class<?> superClazz = clazz.getSuperclass();
			list.addAll(getFields(superClazz,fields));
		}
    	return list;
    }
    /**
     * 查找对应的字段对象
     * 
     * @param clazz
     *            对应class
     * @param fieldName字段名称
     * @return 获得字段对象
     */
    public static Field getField(Class<?> clazz, String fieldName) {

		Field field = null;
		List<Field> list = getFields(clazz);
		for (Field f : list) {
		    if (f.getName().equals(fieldName)) {
			field = f;
			break;
		    }
		}
		return field;
    }

    /**
     * 查找对应的字段名称
     * 
     * @param field
     *            字段对象
     * @return 字段名称
     */
    public static String getName(Field field) {
    	return field.getName();
    }

    /**
     * 查找对应的字段值
     * 
     * @param field
     *            字段对象
     * @param obj
     *            字段所属对象
     * @return
     * @throws Exception
     */
    public static Object getValue(String fieldName, Object obj) throws Exception {
		PropertyDescriptor property = getProperty(fieldName, obj.getClass());
		if (null != property.getReadMethod()) {
		    return property.getReadMethod().invoke(obj);
		}
		return null;
    }

    /**
     * 获得PropertyDescriptor 对象
     * 
     * @param fieldName
     *            字段名称
     * @param clazz
     *            目标class
     * @return
     * @throws IntrospectionException
     */
    public static PropertyDescriptor getProperty(String fieldName, Class<?> clazz) throws IntrospectionException {
    	return new PropertyDescriptor(fieldName, clazz);
    }

    /**
     * 赋值方法
     * 
     * @param fieldName
     *            字段名称
     * @param obj
     *            字段所属对象
     * @param value
     *            值
     * @throws Exception
     */
    public static void setValue(String fieldName, Object obj, Object value) throws Exception {

		PropertyDescriptor property = getProperty(fieldName, obj.getClass());
		if (null != property.getWriteMethod()) {
		    property.getWriteMethod().invoke(obj, value);
		}
    }

    /**
     * 将一个对象的字段值 复制到另一个对象相同的字段里面
     * 
     * @param sourse
     *            所需对象
     * @param target
     *            目标对象
     * @throws Exception
     */
    public static void copySameFieldToTarget(Object sourse, Object target) throws Exception {

		if (null == sourse || null == target) throw new Exception("复制资源或对象为null");
		List<Field> sourseFields = getFields(sourse.getClass());
		List<Field> targetFields = getFields(target.getClass());
		for (Field s : sourseFields) {
		    String sName = getName(s);
		    for (Field t : targetFields) {
			String tName = getName(t);
			if (sName.equals(tName) && s.getType().equals(t.getType())) {
			    setValue(tName, target, getValue(sName, sourse));
			    break;
			}
		    }
		}
    }

    /**
     * 将一个对象的字段值 复制到另一个对象相同的字段里面但是不复制null值
     * 
     * @param sourse
     *            所需对象
     * @param target
     *            目标对象
     * @throws Exception
     */
    public static void copySameFieldToTargetFilterNull(Object sourse, Object target) throws Exception {

		if (null == sourse || null == target) throw new Exception("复制资源或对象为null");
		List<Field> sourseFields = getFields(sourse.getClass());
		List<Field> targetFields = getFields(target.getClass());
		for (Field s : sourseFields) {
		    String sName = getName(s);
		    for (Field t : targetFields) {
				String tName = getName(t);
				if (sName.equals(tName) && s.getType().equals(t.getType())) {
				    Object val = getValue(sName, sourse);
				    if (null != val) {
				    	setValue(tName, target, val);
				    }
				    break;
				}
		    }
		}
    }

    /**
     * 将字符串转换为字段的类型
     * 
     * @param field
     *            字段对象
     * @param value
     *            String 值
     * @return
     * @throws ParseException
     */
    public static Object stringConvertByFieldType(Field field, String value) throws ParseException {
		Object val = null;
		boolean isGang = "\\".equals(value);
	
		if (field.getType().equals(String.class)) {
		    val = value;
		} else if (field.getType().equals(Long.class)) {
		    val = Long.parseLong(value);
		} else if (field.getType().equals(Integer.class)) {
		    val = Integer.parseInt(value);
		} else if (field.getType().equals(Boolean.class)) {
		    val = Boolean.parseBoolean(value);
		} else if (field.getType().equals(Date.class)) {
		    val = DateUtil.format(value, "yyyyMMdd HH:mm:ss");
		} else if (field.getType().equals(Double.class)) {
		    if (!isGang) val = Double.parseDouble(value);
		}
		return val;
	    }

    public static Method getMethod(Class<?> clazz, String methodName, Class<?>... parameterTypes) throws SecurityException, NoSuchMethodException {
    	return clazz.getMethod(methodName, parameterTypes);
    }
    
    @SuppressWarnings({"unchecked","rawtypes"})
	public static List<Field> getFieldsByAnnotation(Class<?> clazz,Class annotation){
    	List<Field> list = new ArrayList<Field>();
    	List<Field> allList = getFields(clazz);
    	if(null != allList && allList.size() >0){
    		for(Field field : allList){
    			if(null != field.getAnnotation(annotation)){
    				list.add(field);
    			}
    		}
    	}
    	return list;
    }
    
}
