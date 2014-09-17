package com.reocar.core.tools;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import jxl.write.Label;
import jxl.write.WritableCellFormat;
import jxl.write.WritableFont;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;

import com.reocar.core.bean.excel.ExcelBean;
import com.reocar.core.bean.excel.ExcelCell;
import com.reocar.core.bean.excel.ExcelRow;
import com.reocar.core.bean.excel.ExcelSheet;
import com.reocar.core.utils.ReflectUtils;

/**
 * Excel处理工具类
 * 
 * 导出的代码【例子】
 * File file = new File("excelProperties/repairItem.properties");
	ExcelTools tools = new ExcelTools(file);
	List<List<?>> sourceLists = new ArrayList<List<?>>();
	sourceLists.add(j.getRows());
	ExcelBean bean = tools.getExcelBean(sourceLists);
	bean.setFileUrl("D:/维修项目.xls");
	bean.setFileName("维修项目");
	tools.exportExcel(bean);
	
	导入的代码【例子】
	这里只返回封装好的实体【ExcelBean】 具体保存需另做处理
	File file = new File("excelProperties/repairItem.properties");
	ExcelTools tools = new ExcelTools(file);
	tools.importExcel(excelFile);这里excelFile是导入的Excel文件【java.io.File】对象
	
 * @author ZhengYu
 *
 */
public class ExcelTools{
	public ExcelTools(File propertiesFile){
		this.propertiesFile = propertiesFile;
	}
	/**
	 * 属性配置文件文件
	 * 属性名称 clazz[视图类全路径]
	 * 属性名称 clazzName[视图类名称]
	 * 属性名称 field[字段（与excel的列顺序保持一致）]
	 * 属性名称 fieldName[字段名称（与字段一 一对应）]
	 * 
	 *  eg:【该配置只是一个例子，不能在实际情况下使用】
	 * 1：针对多个视图的情况
	 * clazz=com.reocar.bbp.httpModel.view.DepartmentView;com.reocar.bbp.httpModel.view.UserView
	 * clazzName=部门视图;用户视图
	 * field=id,name;userId,userCode,userName
	 * fieldName=主键,部门名称;用户主键,用户编号,用户名称
	 * 
	 * 2：针对一个视图
	 * clazz=com.reocar.bbp.httpModel.view.DepartmentView
	 * clazzName=部门视图
	 * field=id,name
	 * fieldName=主键,部门名称
	 */
	private File propertiesFile;
	
	public File getPropertiesFile() {
		return propertiesFile;
	}
	public void setPropertiesFile(File propertiesFile) {
		this.propertiesFile = propertiesFile;
	}
	/**
	 * 导出Excel
	 * @param bean
	 */
	public  void exportExcel(ExcelBean bean){
		WritableWorkbook workBook = null;
		try {
			workBook = Workbook.createWorkbook(new File(bean.getFileUrl()));
			for(ExcelSheet sheet : bean.getSheets()){
				WritableSheet w_sheet = workBook.createSheet(sheet.getName(), sheet.getIndex());
				for(Label label : sheet.getHead()){
					w_sheet.addCell(label);
				}
				for(ExcelRow row : sheet.getRows()){
					for(ExcelCell cell : row.getCells()){
						Label lable = new Label(cell.getIndex(), row.getIndex()+1, cell.getValue());
						w_sheet.addCell(lable);
					}
				}
			}
			workBook.write();
			workBook.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	/**
	 * 导入Excel
	 * @param fileUrl
	 * @return
	 */
	public  ExcelBean importExcel(File excelFile){
		if(propertiesFile.exists() && excelFile.exists()){
			ExcelBean bean = ExcelBean.createBean(propertiesFile);
			try {
				bean.setFileName(excelFile.getName());
				Workbook workbook = Workbook.getWorkbook(excelFile);
				if(null != workbook){
					Sheet[] w_sheets = workbook.getSheets();//获得Excel Sheet数组
					if(w_sheets != null && w_sheets.length > 0){
						List<List<?>> sourceLists = new ArrayList<List<?>>();//初始化数据集 集合
						List<Class<?>> clazzs = bean.getClazzList();//得到视图类集合
						List<List<String>> fieldLists = bean.getFieldLists();//得到字段集 集合
						List<ExcelSheet> sheets = new ArrayList<ExcelSheet>();//初始化Sheet集合
						System.out.println("sheets>>>>>>>>>>>>>>>>>>>"+w_sheets.length);
						for(int sheetIndex = 0;sheetIndex<clazzs.size() ;sheetIndex++){
							ExcelSheet sheet = new ExcelSheet();//初始化Sheet
							Sheet w_sheet = w_sheets[sheetIndex];//获得Excel Sheet
							sheet.setIndex(sheetIndex);
							List<ExcelRow> rows = new ArrayList<ExcelRow>();//初始化Row集合
							List<Object> list = new ArrayList<Object>();//初始化数据集合
							Class<?> clazz = clazzs.get(sheetIndex);//获得视图类
							List<String> fieldList = fieldLists.get(sheetIndex);//获得字段集合
							System.out.println("rows>>>>>>>>>>>>>>>>>>>"+w_sheet.getRows());
							System.out.println("colums>>>>>>>>>>>>>>>>>>>"+w_sheet.getColumns());
							for(int rowIndex = 1;rowIndex<w_sheet.getRows();rowIndex++){
								ExcelRow row = new ExcelRow();//初始化Row
								row.setIndex(rowIndex);
								Object obj = clazz.newInstance();//初始化数据对象
								Cell[] w_cells = w_sheets[sheetIndex].getRow(rowIndex);//获得Excel Cell 集合
								List<ExcelCell> cells = new ArrayList<ExcelCell>();//初始化Cell 集合
								for(int cellIndex =0;cellIndex < fieldList.size();cellIndex++){
									ExcelCell cell = new ExcelCell();//初始化Cell
									Cell w_cell = w_cells[cellIndex];//获得Excel Cell
									cell.setIndex(cellIndex);
									cell.setValue(w_cell.getContents());//填充cell值
									cells.add(cell);
									String fieldName = fieldList.get(cellIndex);//获得字段名称
									Object val = ReflectUtils.stringConvertByFieldType(ReflectUtils.getField(clazz, fieldName), cell.getValue());
									ReflectUtils.setValue(fieldName, obj,val);//对对象进行赋值
								}
								row.setCells(cells);
								rows.add(row);
								list.add(obj);//将数据对象放入 数据集中 
							}
							sheet.setRows(rows);
							sheets.add(sheet);
							sourceLists.add(list);//将数据集 放入数据集集合中
						}
						bean.setSourceList(sourceLists);//将数据集赋予ExcelBean
						bean.setSheets(sheets);//将Sheets赋予ExcelBean
					}
				}
				workbook.close();//关闭Excel工作对象
			} catch (Exception e) {
				e.printStackTrace();
				return null;
			}
			return bean;//返回Bean
		}
		return null;//如果配置文件或者导入文件不存在则返回
	}
	/**
	 * 通过数据集 集合得到ExcelBean
	 * @param sourceLists
	 * @return
	 */
	public  ExcelBean getExcelBean(List<List<?>> sourceLists){
		if(this.propertiesFile.exists()){//判断属性文件是否存在
			ExcelBean bean = ExcelBean.createBean(this.propertiesFile);
			try {
				List<Class<?>> clazzs = bean.getClazzList();
				List<String> clazzNames = bean.getClazzNameList();
				List<List<String>> fieldLists = bean.getFieldLists();
				List<List<String>> fieldNameLists = bean.getFieldNameLists();
				List<ExcelSheet> sheets = new ArrayList<ExcelSheet>();
				for(int i=0;i<clazzs.size();i++){
					String clazzName =clazzNames.get(i);
					List<String> fieldNames = fieldLists.get(i);
					List<String> fieldClNames = fieldNameLists.get(i);
					List<?> sourceList = sourceLists.get(i);
					ExcelSheet sheet = new ExcelSheet();
					List<ExcelRow> rows = new ArrayList<ExcelRow>();
					for(int j=0;j<sourceList.size();j++){
						Object obj = sourceList.get(j);
						ExcelRow row = new ExcelRow();
						List<ExcelCell> cells = new ArrayList<ExcelCell>();
						for(int k=0;k<fieldNames.size();k++){
							ExcelCell cell = new ExcelCell();
							cell.setIndex(k);
							cell.setValue(ReflectUtils.getValue(fieldNames.get(k), obj)+"");
							cells.add(cell);
						}
						row.setIndex(j);
						row.setCells(cells);
						rows.add(row);
					}
					sheet.setName(clazzName);
					sheet.setIndex(i);
					sheet.setRows(rows);
					sheet.setHead(getHead(fieldClNames));
					sheets.add(sheet);
				}
				bean.setSheets(sheets);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return bean;
		}
		return null;
	}
	/**
	 * 获得文件头
	 * @param clNames
	 * @return
	 */
	private List<Label> getHead(List<String> clNames){
		List<Label> list = new ArrayList<Label>();
		WritableFont wf = new WritableFont(WritableFont.ARIAL,10,WritableFont.BOLD); 
		WritableCellFormat wcf = new WritableCellFormat(wf); 
		for(int i=0;i<clNames.size();i++){
			list.add(new Label(i,0,clNames.get(i),wcf));
		}
		return list;
	}

}