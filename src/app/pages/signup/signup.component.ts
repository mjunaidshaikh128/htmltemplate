import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  teamSizeOptions = [
    { label: '<10', value: '<10' },
    { label: '10-50', value: '10-50' },
    { label: '100-500', value: '100-500' },
    { label: '1000-5000', value: '1000-5000' },
    { label: '>5000', value: '>5000' },
  ];
  positionOptions = [
    { label: 'Developer', value: 'Developer' },
    { label: 'Manager', value: 'Manager' },
    { label: 'Executive', value: 'Executive' },
    { label: 'Other', value: 'Other' },
  ];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      companyName: ['', Validators.required],
      businessEmail: ['', [Validators.required, Validators.email]],
      teamSize: ['', Validators.required],
      position: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required,  Validators.pattern('^[0-9]*$')]],
    });
  }

  markAllControlsAsTouched() {
    Object.keys(this.signupForm.controls).forEach((controlName) => {
      this.signupForm.controls[controlName].markAsTouched();
    });
  }

  signup() {
    if(this.signupForm.valid) {
      console.log(this.signupForm.value);

    }
    this.markAllControlsAsTouched();
  }

 
}
