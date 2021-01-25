import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorManagerComponent } from './error-manager/error-manager.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [
  {path:'', component: MainPageComponent},
  {path:'homepage', component: MainPageComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'welcome/:name', component:  WelcomePageComponent, canActivate:[RouteGuardService]},
  {path:'todo', component: TodoListComponent, canActivate:[RouteGuardService]},
  {path:'todo/:id', component: TodoEditComponent, canActivate:[RouteGuardService]},
  {path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  

  {path:'**', component: ErrorManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
