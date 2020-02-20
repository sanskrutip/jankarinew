import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpProgressEvent } from '@angular/common/http'
 import { User } from 'src/app/user';
import { environment } from 'src/environments/environment';
import { City } from 'src/app/ClassFiles/city';
import { State } from 'src/app/ClassFiles/state';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { Designationlist } from 'src/app/ClassFiles/designationlist';
import { EmployeeNameList } from 'src/app/ClassFiles/employee-name-list';
import { Userr } from 'src/app/ClassFiles/userr';
import { Userrole } from 'src/app/ClassFiles/userrole';


@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {
  city:City[];
  state:State[];
  distirct:Distirct[];
  programList:ProgramList[];
  Departmentlist:Departmentlist[];
  Designationlist:Designationlist[];
  Userrole:Userrole[];

  constructor(private http: HttpClient) {
   
   }
  
  login(user: User) {
    var headers = new HttpHeaders({ "Content-Type": "application/json" })
    return this.http.post(environment.apiUrl+"JankariPortal/" + "Login", JSON.stringify(user), { headers: headers })
  }

  InsertOrgnization(NewOrg: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/"  + "InsertOrgnization", NewOrg);
  }

  GetStatewiseDistrictList(stname: string) {
    return this.http.get<Distirct[]>(environment.apiUrl+"JankariPortal/"  + "StatewiseDistrictList/" + stname)
  }
  GetDistrictwiseCityList(dtname: string) {
    return this.http.get<City[]>(environment.apiUrl+"JankariPortal/" + "DistrictwiseCityList/" + dtname)
  }
  GetStateList() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "StateList")
  }
  GetCityList() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "CityList")
  }
  GetDistrictList() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "DistrictList")
  }
  getMenus(userId, pgid, roleid, MenuId, typeid) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "Menu/" + "/" + userId + "/" + pgid + "/" +roleid + "/" + MenuId + "/" + typeid)
  }
  GetOrganizationlist(where) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "GetOrganizationlist?whr=" + where)
  }

  InsertProgram(Newprog: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertProgram", Newprog);
  }
  GetProgramlist(where) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "GetProgramlist?whr=" + where)
  }

  GetDepartmentlist(where) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "GetDepartmentlist?whr=" + where)
  }
  GetDesignationtList(where) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "GetDesignationlist?whr=" + where)
  }
  InsertDepartment(Newdep: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertDepartment", Newdep);
  }
  InsertDesignation(Newdes: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertDesignation", Newdes);
  }
  DesignationtList() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "DesignationList");
  }
  RemoveDesignation(desid: string) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveDesignation/" + desid)
  }
  
  RemoveProgram(pgid: string) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveProgram/" + pgid)
  }

  RemoveDepartment(depid: string) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveDepartment/" + depid)
  }
  
  ProgramList() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "ProgramList")
  }
  DepartmentList() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "DepartmentList")
  }
  OrganizationList() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "OrganizationList")
  }
  DesignationList() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "DesignationList")
  }
  InsertState(state: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertState", state);
  }
  RemoveState(stname: string) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveState/" + stname)
  }

  InsertDistrict(District: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertDistrict", District);
  }
  RemoveDistrict(dtname: string) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveDistrict/" + dtname)
  }
  Insertholiday(holiday: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "HolidayYearList", holiday);
  }

  InsertCity(city: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertCity", city);
  }
  RemoveCity(ctname: string) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveCity/" + ctname)
  }
  InsertOffice(office: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertOffice", office);
  }
  OfficeList() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "OfficeList")
  }
  GetOfficeList(where) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "GetOfficeList?whr=" + where)
  }
  InsertYear(year: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertFinanacialYear", year);
  }
  RemoveYear(yearid: string) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveFinancialYear/" + yearid)
  }
  GetyearList() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "FinanacialYearList")
  }
  InsertPartner(partner: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertPartner", partner);
  }
  GetPartnerlist(where) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "GetPartnerlist?whr=" + where)
  }

  GetHolidayList() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "HolidayYearList")
  }
  InsertHoliday(NewHoliday: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertHoliday", NewHoliday);
  }
  Removeholiday(holid: string) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveHoliday/" + holid)
  }
  InsertRole(role: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertRole", role);
  }
  RemoveUserrole(roleid: string) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveUserrole/" + roleid)
  }
  
  InsertLeaveCount(leave: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertLeaveCount", leave);
  }
  RemoveLeaveCount(lcid: string) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveLeaveCount/" + lcid)
  }
  LeaveCountList() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "LeaveCountList")
  }
  GetUserlist(where) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "GetUserMasterlist?whr=" + where)
  }
  OrgnazationwiseProgramList(ogid: string) {
    return this.http.get<ProgramList[]>(environment.apiUrl+"JankariPortal/" + "OrgnazationwiseProgramList/" + ogid)
  }

  ProgramwiseDepartmentList(pgid: string) {
    return this.http.get<Departmentlist[]>(environment.apiUrl+"JankariPortal/" + "ProgramwiseDepartmentList/" + pgid)
  }
  DepartmentwiseEmployeeList(depid: string) {
    return this.http.get<EmployeeNameList[]>(environment.apiUrl+"JankariPortal/" + "DepartmentwiseEmployeeList/" + depid)
  }
  GetEmployeeNameList(){
    return this.http.get(environment.apiUrl+"JankariPortal/"  + "EmployeeNameList")
  }

  EmployeewiseUsername(empid: string) {
    return this.http.get<Userr[]>(environment.apiUrl+"JankariPortal/" + "EmployeewiseUsername/" + empid)
  }

  InsertUserMaster(user: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertUserMaster", user);
  }
  GetUserMasterlist(where) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "GetUserMasterlist?whr=" + where)
  }
  
  InsertUserProgram(program: any) {

    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertUserProgram", program);
  }
  
  ProgramwiseRoleList(pgid: string) {
    return this.http.get<Userrole[]>(environment.apiUrl+"JankariPortal/"  + "ProgramwiseRoleList/" + pgid)
  }
  UserRoleList() {
    return this.http.get(environment.apiUrl+"JankariPortal/"  + "UserRoleList")
  }

  GetUserProgramDetails(userid: string) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "GetUserProgramDetails/" + userid)
  }
  EmployeeNameList() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "EmployeeNameList")
    } 
   
   InsertEmployee(employee:any) {
    return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertEmployee", employee)
    } 
    
InsertEmployeeProgram(Empprogram:any) {
  return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertEmployeeProgram", Empprogram);
  } 
  
  DepartmentwiseDesignationList(depid: string) {
  return this.http.get<Designationlist[]>(environment.apiUrl+"JankariPortal/" + "DepartmentwiseDesignationList/" + depid)
  }
  
  InsertEmployeeQualification(EmpQ:any) {
  return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertEmployeeQualification", EmpQ);
  } 
  InsertEmployeeReference(EmpR:any) {
  return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertEmployeeReference", EmpR);
  } 
  GetEmployeeProgram(empid:string) {
  return this.http.get(environment.apiUrl+"JankariPortal/" + "GetEmployeeProgram/" + empid)
  } 
  GetEmployeeQualification(empid:string) {
  return this.http.get(environment.apiUrl+"JankariPortal/" + "GetEmployeeQualification/" + empid)
  } 
  GetEmployeeReference(empid:string) {
  return this.http.get(environment.apiUrl+"JankariPortal/" + "GetEmployeeReference/" + empid)
  } 
  RemoveEmployeeProgram(efid:number) {
  return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveEmployeeProgram/"+efid)
  } 
  RemoveEmployeeQualification(quliid:number) {
  return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveEmployeeQualification/"+quliid)
  } 
  RemoveEmployeeReference(refid:number) {
  return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveEmployeeReference/"+refid)
  } 
  GetEmployeeDetails(empid: string): any {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "GetEmployeeDetails/" + empid)
  }

  UpdateEmployee(empid: string, employee: any) {
    return this.http.post(environment.apiUrl+"JankariPortal/" + "UpdateEmployee/" + empid, employee);
  }

  GetEmployeeList(where) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "GetEmployeeList?whr=" + where)
  }
  GetStatewiseCityList(stname: string) {
    return this.http.get<City[]>(environment.apiUrl+"JankariPortal/" + "StatewiseCityList/" + stname)
    }
    RemoveUserProgram(upid: string) {
      return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveUserProgram/" + upid)
    }

    UpdateOffice(offid: string, office: any) {
      return this.http.post(environment.apiUrl+"JankariPortal/" + "UpdateOffice/" + offid, office);
    }
    UpdatePartner(partnerid: string, partner: any) {
      return this.http.post(environment.apiUrl+"JankariPortal/" + "UpdatePartner/" + partnerid, partner);
    }
    GetOfficeDetails(offid: string): any {
      return this.http.get(environment.apiUrl+"JankariPortal/" + "GetOfficeDetails/" + offid)
    }
    GetPartnerDetails(partnerid: string): any {
      return this.http.get(environment.apiUrl+"JankariPortal/" + "GetPartnerDetails/" + partnerid)
    }
   
    UploadEMPAttendance( data: any) {
      return this.http.post(environment.apiUrl+"Employee/" + "UploadEMPAttendance/", data);
    }

    calcProgressPercent(event: HttpProgressEvent){
      return Math.round(100 * event.loaded / event.total);
    }

    EmployeeUploadAttData(month:string,year:string,where): any {
      return this.http.get(environment.apiUrl+"Employee/" + "EmployeeUploadAttData/" + month+"/"+year+"?whr="+where);
    }

    UpdateEMPAttendance( data: any) {
      return this.http.post(environment.apiUrl+"Employee/" + "UpdateEMPAttendance/", data);
    }

    DepartmentwiseEmpAttendanceList(whr) {
      return this.http.get(environment.apiUrl+"Employee/" + "DepartmentwiseEmpAttendanceList?whr=" +whr )
    }    
  
    GetEmployeeReport(where) {

      return this.http.get(environment.apiUrl+"JankariPortal/" + "GetRptEmployee?whr="  + where )
    }

    EmployeeAttDetailsList(month:string,year:string,where): any {
      return this.http.get(environment.apiUrl+"Employee/" + "EmployeeAttDetailsList/" + month+"/"+year+"?whr="+where);
    }

    EmployeeAttDetailsData(month:string,year:string,where): any {
      return this.http.get(environment.apiUrl+"Employee/" + "EmployeeAttDetailsData/" + month+"/"+year+"?whr="+where);
    }
    GetEmployeeAttGraph(where){
      return this.http.get(environment.apiUrl+"Employee/" + "GetEmpAttAllSumGraphData?whr=" + where  )
    }

    FillDropDown(tablename,column1,column2,where){
      return this.http.get(environment.apiUrl+"JankariPortal/" + "FillDropDown?tablename="+tablename+"&column1="+column1+"&column2="+column2+"&whr="+ where  )
    }
      
GetEmpAttAllSumlineGraph(month:string,year:string,where): any {
  return this.http.get(environment.apiUrl+"Employee/" + "GetEmpAttAllSumlineGraph/" + month+"/"+year+"?whr="+where);
}

GetEmpAttAllSumPieGraph(month:string,year:string,where): any {
  return this.http.get(environment.apiUrl+"Employee/" + "GetEmpAttAllSumPieGraph/" + month+"/"+year+"?whr="+where);
}
GetEmpAttAllSumbarGraph(empcode :string,month:string,year:string): any {
  return this.http.get(environment.apiUrl+"Employee/" + "GetEmpAttAllSumbarGraph/" + empcode+"/"+ month+"/"+year);
}

GetEmpAttAllSumbarGraphback(empcode :string,month:string,year:string): any {
  return this.http.get(environment.apiUrl+"Employee/" + "GetEmpAttAllSumbarGraphback/" + empcode+"/"+ month+"/"+year);
}
GetProfile(userid: string): any {
  return this.http.get(environment.apiUrl+"JankariPortal/" + "GetProfile/" + userid)
}


UpdatePassword(Newpass: any) {

  return this.http.post(environment.apiUrl+"JankariPortal/" + "UpdatePassword", Newpass);
}
GetSalaryList(where) {
  return this.http.get(environment.apiUrl+"Employee/" + "GetSalaryList?whr=" + where)
}
GetOrgid(userid: string): any {
  return this.http.get(environment.apiUrl+"JankariPortal/" + "GetOrgid/" + userid)
}
CheckAttendace(role :string,pgid:string,depid:string,userid:string,month:string,year:string): any {
  return this.http.get(environment.apiUrl+"Employee/"  + "CheckAttendace/" + role+"/"+ pgid+"/"+depid+"/"+userid+"/"+month+"/"+year);
}

CheckAttendaceList(role :string,pgid:string,depid:string,userid:string,month:string,year:string): any {
  return this.http.get(environment.apiUrl+"Employee/" + "CheckAttendaceList/" + role+"/"+ pgid+"/"+depid+"/"+userid+"/"+month+"/"+year);
}

AddEMPAttendance( month:number,year:number,data: any) {
  return this.http.post(environment.apiUrl+"Employee/" + "AddEMPAttendance/"+month+"/"+year, data );
}

GetEmpSalary(role:string,pgid:string,depid :string,userid:string, month:number,year:number): any {
  return this.http.get(environment.apiUrl+"Employee/" + "GetEmpSalary/" + role+"/"+ pgid+"/"+depid+"/"+userid+"/"+month+"/"+year);
}


AddSalary( depid:string, month:string,year:number,fineyear:number,useriddata:string,data: any) {
  return this.http.post(environment.apiUrl+"Employee/" + "AddSalary/"+depid+"/"+month+"/"+year+"/"+fineyear+"/"+useriddata, data );
}
AddEmployeeLeave(lcid: any) {

  return this.http.post(environment.apiUrl+"Employee/" + "AddEmployeeLeave", lcid);
}
GetEmployeeLeaveList(where) {
  return this.http.get(environment.apiUrl+"Employee/" + "GetEmployeeLeaveList?whr=" + where)
}

GetEmployeeLeaveData(i) {
  return this.http.get(environment.apiUrl+"Employee/" + "GetEmployeeLeaveData/" + i)
}
GetEmployeeLeaveDetails(i) {
  return this.http.get(environment.apiUrl+"Employee/" + "GetEmployeeLeaveDetails/" + i)
}
ApproveEmployeeLeave(lcid: string,empid:string,escalateid:string,data: any) {
  return this.http.post(environment.apiUrl+"Employee/" + "ApproveEmployeeLeave/"+lcid+"/"+empid+"/"+escalateid, data );
}
GetRoleDetails(roleid: string): any {
  return this.http.get(environment.apiUrl+"JankariPortal/" + "GetRoleDetails/" + roleid)
}
GetMenuForRole(roleid: string): any {
  return this.http.get(environment.apiUrl+"JankariPortal/" + "GetMenuForRole/" + roleid)
}
GetMenuNoRole(roleid: string): any {
  return this.http.get(environment.apiUrl+"JankariPortal/" + "GetMenuNoRole/" + roleid)
}
Assignmenutorole(roleid: string, employee: any) {
  return this.http.post(environment.apiUrl+"JankariPortal/" + "Assignmenutorole/" + roleid, employee);
}

RemoveRoleMenu(roleid: string,menuid: string) {
  return this.http.get(environment.apiUrl+"JankariPortal/" + "RemoveRoleMenu/" + roleid+"/"+menuid)
}

InsertUserActivity(user: any) {

  return this.http.post(environment.apiUrl+"JankariPortal/" + "InsertUserActivity", user);
}
public getIPAddress()
{
  return this.http.get("http://api.ipify.org/?format=json");
}
GetUserActivityList(where) {
  return this.http.get(environment.apiUrl+"JankariPortal/" + "GetUserActivityList?whr=" + where)
}

 postFile( empid: string,fileToUpload: File) {
  const formData: FormData = new FormData();
formData.append('Image', fileToUpload);
   return this.http.post(environment.apiUrl +"JankariPortal/" +"UploadEMPPhoto/"+empid, formData);

 }
 GetProfileImage(empid: string) {
  return this.http.get(environment.apiUrl +"JankariPortal/"  + "GetEmployeeProfiePic/"+empid)
}
GetSalAlertList(where) {
  return this.http.get(environment.apiUrl + "Employee/" + "GetSalAlertList?whr=" + where)
}


GetEmpApprovalSalaryData(role:string,pgid:string,depid :string,userid:string, month:string,year:string): any {
  return this.http.get(environment.apiUrl+"Employee/" + "GetEmpApprovalSalaryData/" + role+"/"+ pgid+"/"+depid+"/"+userid+"/"+month+"/"+year);
}

  InsertEmployeeDocument(empid:string,year: any,data: any) {

    return this.http.post(environment.apiUrl+"Employee/" + "InsertEmployeeDocument/"+empid+"/"+year, data );
  }


  ApproveSalary(Salid:string,userid: any,data: any) {

    return this.http.post(environment.apiUrl+"Employee/" + "ApproveSalary/"+Salid+"/"+userid, data );
  } 

  GetSalaryEmail(userid :string,month:string,year:string) {
    return this.http.get(environment.apiUrl+"Employee/"  + "GetSalaryEmail/" + userid+"/"+ month+"/"+year);
  }
  GetDownloadICICISalaryList(where) {

    return this.http.get(environment.apiUrl+"Employee/" + "GetDownloadICICISalaryList?whr="  + where )
  }
  GetEmployeeDocument(empid: string): any {
    return this.http.get(environment.apiUrl+"Employee/" + "GetEmployeeDocument/" + empid)
  }
  RemoveEmployeeDocument(empid: string,financialyear:string) {
    return this.http.get(environment.apiUrl+"Employee/" + "RemoveEmployeeDocument/" + empid+"/"+financialyear)
  }
  GetRptSalayProgramWise(where) {

    return this.http.get(environment.apiUrl+"Employee/" + "GetRptSalayProgramWise?whr="  + where )
  }
  GetRptGrossSalary(styear:string,endyear:string,where) {

    return this.http.get(environment.apiUrl+"Employee/" + "GetRptGrossSalary/"  + styear+"/"+ endyear+"?whr="+where )
  }
  GetEmployeeAttendanceSummary(frommonth:string,tomonth:string,fromyear:string,toyear:string,where) {

    return this.http.get(environment.apiUrl+"Employee/" + "GetEmployeeAttendanceSummary/"  + frommonth+"/"+ tomonth+ "/"+ fromyear+"/"+ toyear+"?whr="+where )
  }
  GetRptEmployeeMonthlyAttendance(where) {

    return this.http.get(environment.apiUrl+"Employee/" + "GetRptEmployeeMonthlyAttendance?whr="  + where )
  }

  GetRptSalaryMod(where) {

    return this.http.get(environment.apiUrl+"Employee/" + "GetRptSalaryMod?whr="  + where )
  }
  
  GetRptSalaryICICIBank(where) {
  
    return this.http.get(environment.apiUrl+"Employee/" + "GetRptSalaryICICIBank?whr="  + where )
  }
 
  
  GetRptPartnerMonthlySalary(stdt:string,endt:string,where) {
  
    return this.http.get(environment.apiUrl+"Employee/" + "GetRptPartnerMonthlySalary/"  + stdt+"/"+ endt+"?whr="+where )
  }

  GetSalaryDetailsData(salid: string): any {
    return this.http.get(environment.apiUrl+"Employee/" + "GetSalaryDetailsData/" + salid)
  }
  HomeSummary() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "HomeSummary");
  }
  BirthdayNotification() {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "BirthdayNotification");
  }

  SendBirthdayWish(empid: string,data:any) {
    return this.http.post(environment.apiUrl+"JankariPortal/" + "SendBirthdayWish/" + empid, data)
  }
  GetUserProgramLoginList(where) {

    return this.http.get(environment.apiUrl+"JankariPortal/" + "GetUserProgramLoginList?whr="  + where )
  }

  
  GetProgramWiseEmployeeRole(pgid:string,userid:string) {
  
    return this.http.get(environment.apiUrl+"JankariPortal/" + "GetProgramWiseEmployeeRole/"  + pgid+"/"+ userid )
  }
  FillEmpByDepDes(where){
    return this.http.get(environment.apiUrl+"JankariPortal/" + "FillEmpByDepDes?whr="+ where  )
  }

  FillCenterState(us,  ur, ogid,whr,  col1, col2) {
    return this.http.get(environment.apiUrl + "JankariPortal/" + "FillCenterState?us=" + us + "&ur="+ur+"&ogid="+ogid+"&whr="+whr+ "&col1="+col1+ "&col2="+col2)
  }
 
  GetName(table :string,col:string,where) {
    return this.http.get(environment.apiUrl+"JankariPortal/" + "GetName?table="+ table+"&col="+ col+"&whr="+where)
  }
  FillCenterCityIDI(us,  ur, ogid,whr,  col1, col2) {
    return this.http.get(environment.apiUrl + "JankariPortal/" + "FillCenterCityIDI?us=" + us + "&ur="+ur+"&ogid="+ogid+"&whr="+whr+ "&col1="+col1+ "&col2="+col2)
  }

  
 AddEmployeeFavourite(fev: any) {

  return this.http.post(environment.apiUrl+"JankariPortal/" + "AddEmployeeFavourite", fev);
}
EmployeeFavouriteList(userid :string,pgid:string,roleid:string,url:string,favname:string) {
  return this.http.get(environment.apiUrl+"JankariPortal/"  + "EmployeeFavouriteList/" + userid+"/"+ pgid+"/"+roleid+"/"+url+"/"+favname);
}
EmployeeAllFavouriteList(userid :string,pgid:string,roleid:string) {
  return this.http.get(environment.apiUrl+"JankariPortal/"  + "EmployeeAllFavouriteList/" + userid+"/"+ pgid+"/"+roleid);
}

GetUserDailyTaskList(where){
  return this.http.get(environment.apiUrl+"JankariPortal/" + "GetUserDailyTaskList?whr=" + where  )
}
GetUserDailyReportList(where){
  return this.http.get(environment.apiUrl+"JankariPortal/" + "GetUserDailyReportList?whr=" + where  )
}

AddUserDailyTaskA(userid:string,task: any) {

  return this.http.post(environment.apiUrl+"JankariPortal/"+"AddUserDailyTask/"+userid, task);
}

GetSalarySlipRequestList(where){
  return this.http.get(environment.apiUrl+"Employee/" + "GetSalarySlipRequestList?whr=" + where  )
}
GetSalarySlipNewList(month:string,year:string,where){
  return this.http.get(environment.apiUrl+"Employee/" + "GetSalarySlipNewList/"+ month+"/"+year+"/" + where  )
}

AddsalarySlip(empid:string, month:number,year:number,data: any) {
  return this.http.post(environment.apiUrl+"Employee/" + "AddsalarySlip/"+empid+"/"+month+"/"+year, data );
}

GetApprovedSalaryList(where) {
  return this.http.get(environment.apiUrl+"Employee/" + "GetApprovedSalaryList?whr=" + where)
}

GetApprovedSalaryDetailsData(userid :string,month:string,year:string) {
  return this.http.get(environment.apiUrl+"Employee/"  + "GetApprovedSalaryDetailsData/" + userid+"/"+ month+"/"+year);
}

}
