import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {FormValidationService} from "../../services/form-validation.service";
import {UserRepresentation} from "../../models/user.model";
import {JWTTokenService} from "../../services/jwttoken.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(
    private authService: AuthService,
    private router: Router,
    private formValidation: FormValidationService
  ) {
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()){
      this.router.navigate([('/home')])
    }
  }

  login() {
    if (this.loginForm.valid) {
      const val = this.loginForm.value;
      let user = new UserRepresentation(
        val.email!!,
        val.password!!
      )
      this.authService.login(user)
    }
  }

  invalidFormMsg(formControl: FormControl<string | null>) {
    return this.formValidation.getErrorMessage(formControl)
  }

  navigateToRegister() {
    this.router.navigate([('/register')])
  }
}
