# 1. Drag and drop XML files that you created so far into EXCEL worksheet.​ What happen?

# Answer: 

     -> When I drag and drop xml file(activity-2.xml) into EXCEL worksheet,
        It first prompts to select "How you would like to open this file"
        1. As an XML file
        2. As a read only workbook
        3. Use the XML source task pane

#
# 1. As an XML File
     -> Excel prompts that "The specified XML source does not refer to a schema. Excel will create a schema based on the XML source data."
     -> I clicked OK
     -> The Table displayed as the same records into Excel.
![image info](../activity-3/1.AsanXMLfile.JPG)  

#
# 2. As a read only workbook
     -> Excel displays records such as
     | /Employess        |
     | /Employee/EmpName | /Employee/EmpNo | /Employee/EmpNo/#agg  | /Employee/Salary | /Employee/Salary/#agg |

![image info](../activity-3/2.Asareadonlyworkbook.JPG) 

#
# 3. Use the XML source task pane
     -> XML maps in this workbook:
     -> There is Employees folder in which Employee child folder in which 3 fields available such as EmpNo, EmpName, Salary.
![image info](../activity-3/3.UsetheXMLsourcetaskpane.JPG) 
#
