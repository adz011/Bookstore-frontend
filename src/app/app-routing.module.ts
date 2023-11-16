import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from "./pages/register/register.component";
import { authGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: 'home',
    canActivate: [authGuard],
    component: HomeComponent
  },
  {
    path: 'cart',
    canActivate: [authGuard],
    component: CartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '', redirectTo: 'register', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
