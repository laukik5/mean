import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [{ path: "register", component: RegisterComponent },
{ path: "login", component: LoginComponent },
{ path: "forgotpass", component: ForgotpassComponent },
{ path: "home", component: LandingComponent },
{ path: "aboutus", component: AboutusComponent },
{ path: "", redirectTo: "/home", pathMatch: "full" }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
