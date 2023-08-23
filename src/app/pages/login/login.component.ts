import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  markAllControlsAsTouched() {
    Object.keys(this.loginForm.controls).forEach((controlName) => {
      this.loginForm.controls[controlName].markAsTouched();
    });
  }

  login() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);

    }
    this.markAllControlsAsTouched();
  }


}
