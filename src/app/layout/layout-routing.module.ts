import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            // { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'Dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
            { path: 'AdminDashboard', loadChildren: () => import('./admindashboard/admindashboard.module').then(m => m.AdmindashboardModule) },
            { path: 'UserProfile', loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule) },
            { path: 'Notifications', loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule) },
            { path: 'DailyWorkList', loadChildren: () => import('./daily-work-list/daily-work-list.module').then(m => m.DailyWorkListModule) },
            { path: 'AddDailyWork', loadChildren: () => import('./add-daily-work/add-daily-work.module').then(m => m.AddDailyWorkModule) },
            { path: 'AddExtraDailyWork/:id/:id1', loadChildren: () => import('./add-daily-work/add-daily-work.module').then(m => m.AddDailyWorkModule) },
            { path: 'DailyWorkSummary/:id/:id1', loadChildren: () => import('./daily-work-summary/daily-work-summary.module').then(m => m.DailyWorkSummaryModule) },
            { path: 'MyJankari', loadChildren: () => import('./my-jankari/my-jankari.module').then(m => m.MyJankariModule) },


            //AdminModule

            { path: 'Master', loadChildren: () => import('./master/master.module').then(m => m.MasterModule) },
            { path: 'DesignationList', loadChildren: () => import('./admin/designation/designation.module').then(m => m.DesignationModule) },
            { path: 'City', loadChildren: () => import('./admin/city/city.module').then(m => m.CityModule) },
            { path: 'UserRole', loadChildren: () => import('./admin/userrole/userrole.module').then(m => m.UserroleModule) },
            { path: 'LeaveCount', loadChildren: () => import('./admin/leave/leave.module').then(m => m.LeaveModule) },
            { path: 'LeaveEscalation', loadChildren: () => import('./admin/leave-escalation/leave-escalation.module').then(m => m.LeaveEscalationModule) },
            { path: 'DesignationList', loadChildren: () => import('./admin/designation/designation.module').then(m => m.DesignationModule) },
            { path: 'DepartmentList', loadChildren: () => import('./admin/department/department.module').then(m => m.DepartmentModule) },
            { path: 'ProgramList', loadChildren: () => import('./admin/program/program.module').then(m => m.ProgramModule) },
            { path: 'UserList', loadChildren: () => import('./admin/user/user.module').then(m => m.UserModule) },
            { path: 'State', loadChildren: () => import('./admin/state/state.module').then(m => m.StateModule) },
            { path: 'District', loadChildren: () => import('./admin/district/district.module').then(m => m.DistrictModule) },
            { path: 'Holiday', loadChildren: () => import('./admin/holiday/holiday.module').then(m => m.HolidayModule) },
            { path: 'Financial', loadChildren: () => import('./admin/financialyear/financialyear.module').then(m => m.FinancialyearModule) },
            { path: 'UserDetails', loadChildren: () => import('./admin/userdetails/userdetails.module').then(m => m.UserdetailsModule) },
            { path: 'PartnerList', loadChildren: () => import('./admin/partnerlist/partnerlist.module').then(m => m.PartnerlistModule) },
            { path: 'UserActivity', loadChildren: () => import('./admin/useractivity/useractivity.module').then(m => m.UseractivityModule) },
            { path: 'UserDetail/:id', loadChildren: () => import('./admin/auserdetails/auserdetails.module').then(m => m.AuserdetailsModule) },
            { path: 'AddOffice', loadChildren: () => import('./admin/add-edit-office/add-edit-office.module').then(m => m.AddEditOfficeModule) },
            { path: 'EditOffice/:id', loadChildren: () => import('./admin/add-edit-office/add-edit-office.module').then(m => m.AddEditOfficeModule) },
            { path: 'AddPartner', loadChildren: () => import('./admin/add-edit-partner/add-edit-partner.module').then(m => m.AddEditPartnerModule) },
            { path: 'EditPartner/:id', loadChildren: () => import('./admin/add-edit-partner/add-edit-partner.module').then(m => m.AddEditPartnerModule) },
            { path: 'OfficeList', loadChildren: () => import('./admin/officelist/officelist.module').then(m => m.OfficelistModule) },
            { path: 'OfficeDetail/:id', loadChildren: () => import('./admin/officedetail/officedetail.module').then(m => m.OfficedetailModule) },
            { path: 'PartnerDetail/:id', loadChildren: () => import('./admin/partnerdetail/partnerdetail.module').then(m => m.PartnerdetailModule) },
            { path: 'RoleDetails/:id', loadChildren: () => import('./admin/userroledetails/userroledetails.module').then(m => m.UserroledetailsModule) },
            { path: 'UserRoleMenuAssign/:id', loadChildren: () => import('./admin/userrolemenuassign/userrolemenuassign.module').then(m => m.UserrolemenuassignModule) },


            //  EmployeeModule

            { path: 'EmployeeDetails/:id', loadChildren: () => import('./employeemodule/employeedetail/employeedetail.module').then(m => m.EmployeedetailModule) },
            { path: 'AddEmployeePersonal', loadChildren: () => import('./employeemodule/add-edit-employee/add-edit-employee.module').then(m => m.AddEditEmployeeModule) },
            { path: 'EditEmployeePersonal/:id', loadChildren: () => import('./employeemodule/add-edit-employee/add-edit-employee.module').then(m => m.AddEditEmployeeModule) },
            { path: 'AddEmployeeContact', loadChildren: () => import('./employeemodule/add-edit-empcontact/add-edit-empcontact.module').then(m => m.AddEditEmpcontactModule) },
            { path: 'EditEmployeeContact/:id', loadChildren: () => import('./employeemodule/add-edit-empcontact/add-edit-empcontact.module').then(m => m.AddEditEmpcontactModule) },
            { path: 'AddEmployeeOffice', loadChildren: () => import('./employeemodule/add-edit-empoffice/add-edit-empoffice.module').then(m => m.AddEditEmpofficeModule) },
            { path: 'EditEmployeeOffice/:id', loadChildren: () => import('./employeemodule/add-edit-empoffice/add-edit-empoffice.module').then(m => m.AddEditEmpofficeModule) },
            { path: 'EditEmployeeSalary/:id', loadChildren: () => import('./employeemodule/add-edit-empsalary/add-edit-empsalary.module').then(m => m.AddEditEmpsalaryModule) },
            { path: 'EditEmployeeProgram/:id', loadChildren: () => import('./employeemodule/add-edit-empprogram/add-edit-empprogram.module').then(m => m.AddEditEmpprogramModule) },
            { path: 'EditEmployeeQulification/:id', loadChildren: () => import('./employeemodule/add-edit-empqulification/add-edit-empqulification.module').then(m => m.AddEditEmpqulificationModule) },
            { path: 'EditEmployeeReference/:id', loadChildren: () => import('./employeemodule/add-edit-emprefrence/add-edit-emprefrence.module').then(m => m.AddEditEmprefrenceModule) },
            { path: 'EmployeeList', loadChildren: () => import('./employeemodule/employeelist/employeelist.module').then(m => m.EmployeelistModule) },
            { path: 'EmployeeList/:id/:id1/:id2', loadChildren: () => import('./employeemodule/employeelist/employeelist.module').then(m => m.EmployeelistModule) },
            { path: 'UploadAttendance', loadChildren: () => import('./employeemodule/uploadattendance/uploadattendance.module').then(m => m.UploadattendanceModule) },
            { path: 'EmployeeAttendanceList', loadChildren: () => import('./employeemodule/employeeattendance/employeeattendance.module').then(m => m.EmployeeattendanceModule) },
            { path: 'EmployeeReport', loadChildren: () => import('./employeemodule/employee-report/employee-report.module').then(m => m.EmployeeReportModule) },
            { path: 'DepartmentWiseEmpAttList/:id/:id1/:id2', loadChildren: () => import('./employeemodule/depwiseempattlist/depwiseempattlist.module').then(m => m.DepwiseempattlistModule) },
            { path: 'EmployeeWiseAttList/:id/:id1/:id2/:id3', loadChildren: () => import('./employeemodule/perempattlist/perempattlist.module').then(m => m.PerempattlistModule) },
            { path: 'UpdateEmployeeWiseAttList/:id/:id1/:id2/:id3', loadChildren: () => import('./employeemodule/updateperempattlist/updateperempattlist.module').then(m => m.UpdateperempattlistModule) },
            { path: 'SalaryList', loadChildren: () => import('./employeemodule/salarylist/salarylist.module').then(m => m.SalarylistModule) },
            { path: 'Salary', loadChildren: () => import('./employeemodule/salary/salary.module').then(m => m.SalaryModule) },
            { path: 'GenerateAttendance/:id/:id1/:id2/:id3/:id4/:id5/:id6', loadChildren: () => import('./employeemodule/generateattendance/generateattendance.module').then(m => m.GenerateattendanceModule) },
            { path: 'GenerateSalary/:id/:id1/:id2/:id3/:id4/:id5/:id6', loadChildren: () => import('./employeemodule/generatesalary/generatesalary.module').then(m => m.GeneratesalaryModule) },
            { path: 'Employee', loadChildren: () => import('./employeemodule/employeemenu/employeemenu.module').then(m => m.EmployeemenuModule) },
            { path: 'Employeeleavelist', loadChildren: () => import('./employeemodule/employeeleavelist/employeeleavelist.module').then(m => m.EmployeeleavelistModule) },
            { path: 'Applyleave', loadChildren: () => import('./employeemodule/applyleave/applyleave.module').then(m => m.ApplyleaveModule) },
            { path: 'ApproveLeaveList', loadChildren: () => import('./employeemodule/approveleavelist/approveleavelist.module').then(m => m.ApproveleavelistModule) },
            { path: 'ApproveLeave/:id', loadChildren: () => import('./employeemodule/approveleave/approveleave.module').then(m => m.ApproveleaveModule) },
            { path: 'ReportMenu', loadChildren: () => import('./employeemodule/reportmenu/reportmenu.module').then(m => m.ReportmenuModule) },
            { path: 'GenattDetails/:id/:id1/:id2', loadChildren: () => import('./employeemodule/genattdetails/genattdetails.module').then(m => m.GenattdetailsModule) },
            { path: 'SalaryApprove/:id/:id1/:id2/:id3/:id4/:id5', loadChildren: () => import('./employeemodule/salaryapprove/salaryapprove.module').then(m => m.SalaryapproveModule) },
            { path: 'EditEmployeeDocument/:id', loadChildren: () => import('./employeemodule/add-edit-document/add-edit-document.module').then(m => m.AddEditDocumentModule) },
            { path: 'SendEmail', loadChildren: () => import('./employeemodule/sendemail/sendemail.module').then(m => m.SendemailModule) },
            { path: 'DownloadICICIFormat', loadChildren: () => import('./employeemodule/dwiciciformat/dwiciciformat.module').then(m => m.DwiciciformatModule) },
            { path: 'ProgramwiseSalary', loadChildren: () => import('./employeemodule/programwisesalary/programwisesalary.module').then(m => m.ProgramwisesalaryModule) },
            { path: 'AnnualGrossSalary', loadChildren: () => import('./employeemodule/annualgrosssalary/annualgrosssalary.module').then(m => m.AnnualgrosssalaryModule) },
            { path: 'EmployeeLeaveReport', loadChildren: () => import('./employeemodule/Employeeleavereport/Employeeleavereport.module').then(m => m.EmployeeleavereportModule) },
            { path: 'EmployeeMonthlyAttreport', loadChildren: () => import('./employeemodule/empmonthlyattreport/empmonthlyattreport.module').then(m => m.EmpmonthlyattreportModule) },
            { path: 'ICICBankFormat', loadChildren: () => import('./employeemodule/bankformat/bankformat.module').then(m => m.BankformatModule) },
            { path: 'modeofpay', loadChildren: () => import('./employeemodule/modeofpay/modeofpay.module').then(m => m.ModeofpayModule) },
            { path: 'partnerwisesalary', loadChildren: () => import('./employeemodule/partnersalary/partnersalary.module').then(m => m.PartnersalaryModule) },
            { path: 'SalaryDetails/:id', loadChildren: () => import('./employeemodule/saldetails/saldetails.module').then(m => m.SaldetailsModule) },

//employeeModule//SalarySlip

            { path: 'SalarySlipStatus', loadChildren: () => import('./employeemodule/SalarySlip/salary-slip-status/salary-slip-status.module').then(m => m.SalarySlipStatusModule) },
            { path: 'SalarySlip', loadChildren: () => import('./employeemodule/SalarySlip/salary-slip/salary-slip.module').then(m => m.SalarySlipModule) },      
            { path: 'SalarySlipApprovalList', loadChildren: () => import('./employeemodule/SalarySlip/salary-slip-approval-list/salary-slip-approval-list.module').then(m => m.SalarySlipApprovalListModule) },

//employeeModule//ApproveSalary

            { path: 'SalaryApprovalList', loadChildren: () => import('./employeemodule/ApproveSalary/approve-salary-list/approve-salary-list.module').then(m => m.ApproveSalaryListModule) },
            { path: 'ApproveSalary/:id/:id1/:id2', loadChildren: () => import('./employeemodule/ApproveSalary/approve-salary/approve-salary.module').then(m => m.ApproveSalaryModule) },

//CenterModule
            { path: 'Center', loadChildren: () => import('./centermodule/center/center.module').then(m => m.CenterModule) },
            { path: 'CAL&DLL', loadChildren: () => import('./centermodule/calndll/calndll.module').then(m => m.CalndllModule) },
            { path: 'Centerlist', loadChildren: () => import('./centermodule/calnpif/calnpif.module').then(m => m.CalnpifModule) },
            { path: 'Createcalpif', loadChildren: () => import('./centermodule/createcalnpif/createcalnpif.module').then(m => m.CreatecalnpifModule) },
            { path: 'AddEditCenter', loadChildren: () => import('./centermodule/add-edit-center/add-edit-center.module').then(m => m.AddEditCenterModule) },
            { path: 'AddEditCenterType/:id', loadChildren: () => import('./centermodule/add-edit-center-Type/add-edit-center-Type.module').then(m => m.AddEditCenterTypeModule) },
            { path: 'AddEditCenterContact/:id', loadChildren: () => import('./centermodule/add-edit-center-contact/add-edit-center-contact.module').then(m => m.AddEditCenterContactModule) },
            { path: 'GSTDetails/:id', loadChildren: () => import('./centermodule/gst-details/gst-details.module').then(m => m.GstDetailsModule) },
            { path: 'InfraDetails/:id', loadChildren: () => import('./centermodule/infra-details/infra-details.module').then(m => m.InfraDetailsModule) },
            { path: 'OtherInformation/:id', loadChildren: () => import('./centermodule/other-info/other-info.module').then(m => m.OtherInfoModule) },
            { path: 'CenterDetail/:id', loadChildren: () => import('./centermodule/centerdetail/centerdetail.module').then(m => m.CenterdetailModule) },
            { path: 'AddEditCenteragreement/:id', loadChildren: () => import('./centermodule/add-edit-centeragreement/add-edit-centeragreement.module').then(m => m.AddEditCenteragreementModule) },
            { path: 'AddEditComputerHardware/:id', loadChildren: () => import('./centermodule/add-edit-computerhardware/add-edit-computerhardware.module').then(m => m.AddEditComputerhardwareModule) },
            { path: 'AddEditPartnerDetail/:id', loadChildren: () => import('./centermodule/add-edit-partnerdetail/add-edit-partnerdetail.module').then(m => m.AddEditPartnerdetailModule) },
            { path: 'EditCenter/:id', loadChildren: () => import('./centermodule/add-edit-center/add-edit-center.module').then(m => m.AddEditCenterModule) },
            { path: 'EditCenterContact/:id', loadChildren: () => import('./centermodule/add-edit-center-contact/add-edit-center-contact.module').then(m => m.AddEditCenterContactModule) },
            { path: 'EditOtherInformation/:id', loadChildren: () => import('./centermodule/other-info/other-info.module').then(m => m.OtherInfoModule) },
            { path: 'EditCenterType/:id', loadChildren: () => import('./centermodule/add-edit-center-Type/add-edit-center-Type.module').then(m => m.AddEditCenterTypeModule) },

//CenterModule//IDI

            { path: 'IDICenterlist', loadChildren: () => import('./centermodule/IDI/idi-centerlist/idi-centerlist.module').then(m => m.IdiCenterlistModule) },
            { path: 'AddCenterInfo', loadChildren: () => import('./centermodule/IDI/idi-add-edit-center-info/idi-add-edit-center-info.module').then(m => m.IdiAddEditCenterInfoModule) },
            { path: 'IDIEditCenterInfo/:id', loadChildren: () => import('./centermodule/IDI/idi-add-edit-center-info/idi-add-edit-center-info.module').then(m => m.IdiAddEditCenterInfoModule) },
            { path: 'IDICenterContact/:id', loadChildren: () => import('./centermodule/IDI/idi-add-edit-contact/idi-add-edit-contact.module').then(m => m.IdiAddEditContactModule) },
            { path: 'IDICenterInfraDetails/:id', loadChildren: () => import('./centermodule/IDI/idi-add-edit-infra-details/idi-add-edit-infra-details.module').then(m => m.IdiAddEditInfraDetailsModule) },
            { path: 'IDICenterPartnerDetails/:id', loadChildren: () => import('./centermodule/IDI/idi-add-edit-partner-details/idi-add-edit-partner-details.module').then(m => m.IdiAddEditPartnerDetailsModule) },
            { path: 'IDIAgreement/:id', loadChildren: () => import('./centermodule/IDI/idi-agreement/idi-agreement.module').then(m => m.IdiAgreementModule) },
            { path: 'IDIAddCenterCourse/:id', loadChildren: () => import('./centermodule/IDI/idi-center-course/idi-center-course.module').then(m => m.IdiCenterCourseModule) },
            { path: 'IDIComputerHardware/:id', loadChildren: () => import('./centermodule/IDI/idi-computer-hardware/idi-computer-hardware.module').then(m => m.IdiComputerHardwareModule) },
            { path: 'IDICenterCourse/:id', loadChildren: () => import('./centermodule/IDI/idi-center-course/idi-center-course.module').then(m => m.IdiCenterCourseModule) },
            { path: 'IDISancharak', loadChildren: () => import('./centermodule/IDI/idi-sancharak-details/idi-sancharak-details.module').then(m => m.IdiSancharakDetailsModule) },
            { path: 'IDICenterDetails/:id', loadChildren: () => import('./centermodule/IDI/idi-center-details/idi-center-details.module').then(m => m.IdiCenterDetailsModule) },


//CenterModule//CAL-UBS

            { path: 'CALUBSCenterlist', loadChildren: () => import('./centermodule/CAL-UBS/cal-ubs-centerlist/cal-ubs-centerlist.module').then(m => m.CALUBSCenterlistModule) },
            { path: 'CAL-UBS-Add-CenterInfo', loadChildren: () => import('./centermodule/CAL-UBS/cal-ubs-add-edit-centerinfo/cal-ubs-add-edit-centerinfo.module').then(m => m.CalUbsAddEditCenterinfoModule) },
            { path: 'CAL-UBS-Update-CenterInfo/:id', loadChildren: () => import('./centermodule/CAL-UBS/cal-ubs-add-edit-centerinfo/cal-ubs-add-edit-centerinfo.module').then(m => m.CalUbsAddEditCenterinfoModule) },
            { path: 'CAL-UBS-Add-Update-CenterContact/:id', loadChildren: () => import('./centermodule/CAL-UBS/cal-ubs-add-edit-centercontact/cal-ubs-add-edit-centercontact.module').then(m => m.CalUbsAddEditCentercontactModule) },
            { path: 'CAL-UBS-Add-Update-CenterType/:id', loadChildren: () => import('./centermodule/CAL-UBS/cal-ubs-add-edit-centertype/cal-ubs-add-edit-centertype.module').then(m => m.CalUbsAddEditCentertypeModule) },
            { path: 'CAL-UBS-CenterDetail/:id', loadChildren: () => import('./centermodule/CAL-UBS/cal-ubs-centerdetail/cal-ubs-centerdetail.module').then(m => m.CalUbsCenterdetailModule) },
            { path: 'CAL-UBS-Add-Update-OtherInfo/:id', loadChildren: () => import('./centermodule/CAL-UBS/cal-ubs-add-edit-otherinfo/cal-ubs-add-edit-otherinfo.module').then(m => m.CalUbsAddEditOtherinfoModule) },
            { path: 'CAL-UBS-Add-Update-Infra/:id', loadChildren: () => import('./centermodule/CAL-UBS/cal-ubs-add-edit-infra/cal-ubs-add-edit-infra.module').then(m => m.CalUbsAddEditInfraModule) },
            { path: 'CAL-UBS-Add-Update-Partner/:id', loadChildren: () => import('./centermodule/CAL-UBS/cal-ubs-add-edit-partner/cal-ubs-add-edit-partner.module').then(m => m.CalUbsAddEditPartnerModule) },
            { path: 'CAL-UBS-Add-Update-SancharkDeatil/:id', loadChildren: () => import('./centermodule/CAL-UBS/cal-ubs-add-edit-sancharakdetail/cal-ubs-add-edit-sancharakdetail.module').then(m => m.CalUbsAddEditSancharakdetailModule) },
            { path: 'CAL-UBS-Add-Update-Agreement/:id', loadChildren: () => import('./centermodule/CAL-UBS/cal-ubs-add-edit-agreement/cal-ubs-add-edit-agreement.module').then(m => m.CalUbsAddEditAgreementModule) },
            { path: 'CAL-UBS-Add-Update-ComputerHardware/:id', loadChildren: () => import('./centermodule/CAL-UBS/cal-ubs-add-edit-comphardware/cal-ubs-add-edit-comphardware.module').then(m => m.CalUbsAddEditComphardwareModule) },


        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
