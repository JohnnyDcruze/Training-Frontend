import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'EmployeesList',component:EmployeesListComponent},{path:'DepartmentList',component:DepartmentListComponent},{path:'**',component:ErrorComponentComponent},{path:'home',component:HomeComponent},{path:'',redirectTo:'/home',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents=[EmployeesListComponent,DepartmentListComponent,ErrorComponentComponent,HomeComponent];
