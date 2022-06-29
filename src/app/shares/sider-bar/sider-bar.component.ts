import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sider-bar',
  templateUrl: './sider-bar.component.html',
  styleUrls: ['./sider-bar.component.scss'],
})
export class SiderBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  Logout() {
    localStorage.clear();
    location.reload();
    location.replace('login');
  }
  Nextdashboard() {
    location.replace('dashboard');
  }
  Nexttask() {
    location.replace('task');
  }
}
