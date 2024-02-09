import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/state/Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @Input() changeTemplate!: () => void;

  registrationForm: FormGroup = this.formBuilder.group({
    firstName: ['',],
    lastName: ['',],
    email: ['',],
    password: ['', ],
  });

  constructor(
    private formBuilder: FormBuilder,
    // private store: Store,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
  }

  submitForm(): void {
    if (this.registrationForm.valid) {
      // Handle form submission logic here
      console.log('register req data', this.registrationForm.value);
      // this.store.dispatch(register({ user: this.registrationForm.value }));
      this.authService.register(this.registrationForm.value)
    }
  }

}
