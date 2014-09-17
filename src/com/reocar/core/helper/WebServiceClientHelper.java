package com.reocar.core.helper;

import org.apache.cxf.endpoint.Client;
import org.apache.cxf.jaxws.endpoint.dynamic.JaxWsDynamicClientFactory;

public class WebServiceClientHelper {
	 /**
	* @Title: callService
	* @Description: 调用远程的webservice并返回数据
	* @param wsUrl
	*            ws地址
	* @param method
	*            调用的ws方法名
	* @param arg
	*            参数
	* @return
	* @return：String
	* @throws
	*/
	 public static Object[] callService(String wsUrl, String method, Object... args) {
		JaxWsDynamicClientFactory dcf = JaxWsDynamicClientFactory.newInstance();
		Client client = dcf.createClient(wsUrl);
		Object[] res = null;
		 try {
			 res = client.invoke(method, args);
		} catch (Exception e) {
			e.printStackTrace();
		}
		 return res;
	}
}
