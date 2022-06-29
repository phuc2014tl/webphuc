import { Component, OnInit } from '@angular/core';
import { LoginStore } from './login.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginStore],
})
export class LoginComponent implements OnInit {
  vm$ = this.store.select((state) => {
    return {
      login: state.login,
      submitted: state.submitted,
      datalogin: state.datalogin,
      showspinner: state.showspinner,
    };
  });

  constructor(public store: LoginStore) {}
  ngOnInit(): void {}
  onSubmit() {
    this.store.loginform();
    // this.store.patchState({ submitted: true });
    // this.store.patchState({ showspinner: true });
    // this.store.spinner();
  }
}
