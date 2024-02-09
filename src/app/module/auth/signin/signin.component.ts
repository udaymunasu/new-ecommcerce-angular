import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/state/Auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  @Input()
  changeTemplate!: () => void;

  loginForm: FormGroup = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    // private store: Store,
    private authService: AuthService
  ) {}
  ngOnInit(): void {}

  submitForm(): void {
    if (this.loginForm.valid) {
      console.log('login req data', this.loginForm.value);
      // this.store.dispatch(login(this.loginForm.value));
      this.authService.login(this.loginForm.value);
    }
  }
}
