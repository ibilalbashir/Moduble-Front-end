import { SignupService } from './../../../Shared/services/signup.service';
import { SigninService } from './../../../Shared/services/signin.service';

import { InvitationService } from './../../../Shared/services/invitation.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/helpers/must-match.validators';
import { ActivatedRoute, Router } from '@angular/router';
declare var swal: any;
@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})
export class SignupScreenComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  order: string;
  currentEmail;
  finalObj = {};

  constructor(private formBuilder: FormBuilder, private _router: Router,
    private route: ActivatedRoute,
    private _invitationService: InvitationService, private signupService: SignupService
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this._invitationService.getInvitationById(params.id).subscribe(res => {
          console.log('invitation res is', res)
          this.currentEmail = res['email']
        }, err => {
          console.log(err)
        })


        this.order = params.order;
        console.log(this.order); // popular
      });


    this.registerForm = this.formBuilder.group({

      fullName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.finalObj = this.registerForm.value;
    this.finalObj['email'] = this.currentEmail;
    delete this.finalObj['confirmPassword'];

    this.signupService.RegisterLink(this.finalObj).subscribe(res => {
      console.log('signup res', res);
      swal(
        'Good job!',
        'User Created',
        'success'
      )
      this._router.navigate(['upload'])
    }, err => {
      console.log(err)
    })

    console.log('form data', this.finalObj)
  }

}
