import { Router } from '@angular/router';
import { SigninService } from './../../../Shared/services/signin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _signinSerive: SigninService, private _router: Router) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this._signinSerive.signinFn(this.registerForm.value).subscribe(res => {

      this._router.navigate(['/upload']);
      console.log(res);
      localStorage.setItem('token', res['id']);
      localStorage.setItem('userId', res['userId']);

    }, err => {
      alert('wrong credentials')
      console.log(err)
    })


  }

}
