import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormValidationService} from "../../services/form-validation.service";
import {UserRepresentation} from "../../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    nickname: new FormControl('', Validators.required),
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

  register() {
    if (this.registerForm.valid) {
      const val = this.registerForm.value;
      let user = new UserRepresentation(
        val.email!!,
        val.password!!,
        val.firstname!!,
        val.lastname!!,
        val.nickname!!,
      )
      this.authService.register(user)
    }
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login')
  }

  invalidFormMsg(formControl: FormControl<string | null>) {
    return this.formValidation.getErrorMessage(formControl)
  }
}
