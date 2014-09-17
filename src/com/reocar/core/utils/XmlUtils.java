package com.reocar.core.utils;

import java.util.List;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

/**
 * 数据对接Xml解析工具类
 * 
 * @author Mr.Shower
 */
public class XmlUtils {

	public static Document getDocument(String str) throws DocumentException {
		return DocumentHelper.parseText(str);
	}

	/**
	 * 通过文本找到指定标签的Element
	 * 
	 * @param document
	 * @param tag
	 * @return
	 */
	public static Element getElementByTag(Document document, String tag) {
		Element root = document.getRootElement();
		return root.element(tag);
	}

	/**
	 * 通过文本找到对象标签的值
	 * 
	 * @param document
	 * @param tag
	 * @return
	 */
	public static String getValue(Document document, String tag) {
		return getElementByTag(document, tag).getTextTrim();
	}

	/**
	 * 通过子集获得文本中指定标签的值
	 * 
	 * @param list
	 * @param tag
	 * @return
	 */
	public static String getValue(List<Element> list, String tag) {
		String result = "";
		for (Element ele : list) {
			if (ele.getName().equals(tag)) {
				result = ele.getTextTrim();
				break;
			}
		}
		return result;
	}
	
	public static void appendElement(Element parent,String tag,String value){
		 Element ele = parent.addElement(tag);
		 ele.setText(value);
	}
}
