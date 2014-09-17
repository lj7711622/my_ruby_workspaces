package com.reocar.base.convert;

import com.reocar.base.model.BaseModel;
import com.reocar.base.view.BaseView;

public interface BaseConvertI<T extends BaseModel,V extends BaseView> {
	T addConvert(V view);
	
	T editConvert(V view);
	
	V convertToView(T model);
}
