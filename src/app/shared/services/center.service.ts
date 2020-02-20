import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { City } from 'src/app/ClassFiles/city';
import { Distirct } from 'src/app/ClassFiles/distirct';
@Injectable({
  providedIn: 'root'
})
export class CenterService {

  constructor(private http: HttpClient) {


  }
  FillDropDown(tablename, column1, column2, where) {
    return this.http.get(environment.apiUrl + "JankariPortal/" + "FillDropDown?tablename=" + tablename + "&column1=" + column1 + "&column2=" + column2 + "&whr=" + where)
  }

  CenterList(userid: string, role: string, pgid: string, where): any {
    return this.http.get(environment.apiUrl + "Center/" + "CenterList/" + userid + "/" + role + "/" + pgid + "?whr=" + where);
  }

  InsertCenter(pgid: string, data: any) {
    return this.http.post(environment.apiUrl + "Center/" + "InsertCenter/" + pgid + "/", data)
  }

  FillEmpByDepDes(where) {
    return this.http.get(environment.apiUrl + "JankariPortal/" + "FillEmpByDepDes?whr=" + where)
  }

  GetStatewiseCityList(stname: string) {
    return this.http.get<City[]>(environment.apiUrl + "JankariPortal/" + "StatewiseCityList/" + stname)
  }
  GetStatewiseDistrictList(stname: string) {
    return this.http.get<Distirct[]>(environment.apiUrl + "JankariPortal/" + "StatewiseDistrictList/" + stname)
  }
  GetDistrictwiseCityList(dtname: string) {
    return this.http.get<City[]>(environment.apiUrl + "JankariPortal/" + "DistrictwiseCityList/" + dtname)
  }
  GetStateList() {
    return this.http.get(environment.apiUrl + "JankariPortal/" + "StateList")
  }
  GetCityList() {
    return this.http.get(environment.apiUrl + "JankariPortal/" + "CityList")
  }
  GetDistrictList() {
    return this.http.get(environment.apiUrl + "JankariPortal/" + "DistrictList")
  }


  AddCenterType(centid: string, userid: string, data: any) {
    return this.http.post(environment.apiUrl + "Center/" + "AddCenterType/" + centid + "/" + userid + "/", data)
  }


  AddCenterContactInfo(centid: string, userid: string, data: any) {
    return this.http.post(environment.apiUrl + "Center/" + "AddCenterContactInfo/" + centid + "/" + userid + "/", data)
  }

  AddCenterotherInfo(centid: string, userid: string, data: any) {
    return this.http.post(environment.apiUrl + "Center/" + "AddCenterotherInfo/" + centid + "/" + userid + "/", data)
  }

  UpdateCenterOtherInfo(centid: string, userid: string, data: any) {
    return this.http.post(environment.apiUrl + "Center/" + "UpdateCenterOtherInfo/" + centid + "/" + userid + "/", data)
  }
  

  AddCenterInfra(centid: string, userid: string, data: any) {
    return this.http.post(environment.apiUrl + "Center/" + "AddCenterInfra/" + centid + "/" + userid + "/", data)
  }




  RemoveCenterInfra(infraid: string) {
    return this.http.get(environment.apiUrl+"Center/" + "RemoveCenterInfra/" + infraid)
  }

  
  AddCenterGST(centid: string, userid: string, data: any) {
    return this.http.post(environment.apiUrl + "Center/" + "AddCenterGST/" + centid + "/" + userid + "/", data)
  }


  UploadCenterGST(centid: string, userid: string,gstapp:string, academicyear:string,fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload);
    return this.http.post(environment.apiUrl + "Center/" + "UploadCenterGST/" + centid+"/"+userid+"/"+gstapp+"/"+academicyear,formData)
  }


    


  GetCenterDetails(centid: string): any {
    return this.http.get(environment.apiUrl + "Center/" + "GetCenterDetails/" + centid)
  }

  GetIDICenterDetails(centid: string): any {
    return this.http.get(environment.apiUrl + "Center/" + "GetIDICenterDetails/" + centid)
  }

  CenterTypeList(centid: string) {
    return this.http.get(environment.apiUrl + "Center/" + "CenterTypeList/" + centid)
  }

  CenterInfraList(centid: string) {
    return this.http.get(environment.apiUrl + "Center/" + "CenterInfraList/" + centid)
  }
  GetCenterPartnerList(centid: string) {
    return this.http.get(environment.apiUrl + "Center/" + "GetCenterPartnerList/" + centid)
  }
  GetSancharakList(centid: string) {
    return this.http.get(environment.apiUrl + "Center/" + "GetSancharakList/" + centid)
  }
  GetAgreementList(centid: string) {
    return this.http.get(environment.apiUrl + "Center/" + "GetAgreementList/" + centid)
  }
  GetGSTList(centid: string) {
    return this.http.get(environment.apiUrl + "Center/" + "GetGSTList/" + centid)
  }
  GetCenterotherInfoList(centid: string) {
    return this.http.get(environment.apiUrl + "Center/" + "GetCenterotherInfoList/" + centid)
  }
  GetCenterComputerList(centid: string) {
    return this.http.get(environment.apiUrl + "Center/" + "GetCenterComputerList/" + centid)
  }
  GetCenterRateList(centid: string) {
    return this.http.get(environment.apiUrl + "Center/" + "GetCenterRateList/" + centid)
  }

  
  UploadAgreement(centid: string, userid: string,stdt: Date, endt: Date,fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload);
    return this.http.post(environment.apiUrl + "Center/" + "UploadAgreement/" + centid+"/"+userid+"/"+stdt+"/"+endt,formData)
  }

  RemoveAgreement(agid:number) {
    return this.http.get(environment.apiUrl+ "Center/" + "RemoveAgreement/"+agid)
    } 
  
    AddCenterComputer(centid: string, data: any) {
  return this.http.post(environment.apiUrl + "Center/" + "AddCenterComputer/" + centid  + "/", data)
}
RemoveCenterComputer(hardwareid:number) {
  return this.http.get(environment.apiUrl+ "Center/" + "RemoveCenterComputer/"+hardwareid)
  } 
  AddCenterPartner(centid: string,userid:string, data: any) {
    return this.http.post(environment.apiUrl + "Center/" + "AddCenterPartner/" + centid  + "/"+ userid, data)
  }
  RemoveCenterPartner(cpid:number) {
    return this.http.get(environment.apiUrl+ "Center/" + "RemoveCenterPartner/"+cpid)
    } 
    UpdateCenter(userid: string,role:string,pgid:string,centid:string, data: any) {
      return this.http.post(environment.apiUrl+"Center/" + "UpdateCenter/" + userid+"/"+role+"/"+pgid+"/"+centid,data);
    }

    RemoveCenterType(ctid: string) {
      return this.http.get(environment.apiUrl+"Center/" + "RemoveCenterType/" + ctid)
    }
    AddCenterUBSInfo(centid: string, userid: string, data1: any) {
      return this.http.post(environment.apiUrl + "Center/" + "AddCenterUBSInfo/" + centid + "/" + userid , data1)
    }
    GetCenterUBSInfoList(centid: string) {
      return this.http.get(environment.apiUrl + "Center/" + "GetCenterUBSInfoList/" + centid)
    }
  
}
