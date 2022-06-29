import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { LoginService } from 'src/app/services/login.service';

const state = {
  login: null as FormGroup | null,
  submitted: false,
  datalogin: null as any,
  showspinner: false,
};
type LoginState = typeof state;

@Injectable()
export class LoginStore extends ComponentStore<LoginState> {
  // read storecomponent
  // get login(): any{
  //   return this.get(x => x.login);
  // }
  constructor(
    private formBuilder: FormBuilder,
    private loginservice: LoginService,
    private router: Router
  ) {
    super(state);
    this.patchState({
      login: this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      }),
    });

    this.loginform();
    // this.spinner();
  }
  spinner() {
    // setTimeout(() => {
    //   this.patchState({ showspinner: false });
    // }, 5000);
  }

  loginform() {
    const data = this.get((x) => x.login);
    if (data != null && data.valid) {
      this.loginservice.logindashboard(data.value).subscribe((data) => {
        if (data != null) {
          this.patchState({ datalogin: data });
          this.router.navigate(['dashboard']);
        }
      });
    } else {
      return;
    }
  }
}
