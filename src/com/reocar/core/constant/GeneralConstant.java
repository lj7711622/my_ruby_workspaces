package com.reocar.core.constant;

import java.util.LinkedHashMap;
import java.util.Map;

public interface GeneralConstant {
	public abstract class USER_CODE_CONSTANT{
		public static final String SUPER_ADMIN_CODE = "SUPER_ADMIN";
	}
	
	public abstract class SYS_ENABLE{
		public static final Boolean YES = true;
		public static final Boolean NO = false;
		public static Map<Boolean, String> valueMap = new LinkedHashMap<Boolean,String>();
		static{
			valueMap.put(YES, "启用");
			valueMap.put(NO, "禁用");
		}
	}
	
	public abstract class SYS_LOCK{
		public static final Boolean YES = true;
		public static final Boolean NO = false;
		public static Map<Boolean, String> valueMap = new LinkedHashMap<Boolean,String>();
		static{
			valueMap.put(YES, "锁定");
			valueMap.put(NO, "未锁定");
		}
	}
}
