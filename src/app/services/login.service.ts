import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = 'http://localhost:3000/auth/login';
  baseUrlTask = 'http://localhost:3000/task';
  constructor(private http: HttpClient) {}
  logindashboard(userinfo: any) {
    return this.http.post(this.baseUrl, userinfo);
  }
  loadTask() {
    return this.http.get(this.baseUrlTask);
  }
  postTask(data: any) {
    return this.http.post<any>(this.baseUrlTask, data);
  }
}
