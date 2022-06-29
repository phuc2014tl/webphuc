import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shares/dialog/dialog.component';

const state = {
  datatask: null as any,
};
type TaskState = typeof state;

@Injectable()
export class TaskStore extends ComponentStore<TaskState> {
  // get datatask(): any {
  //   return this.get((x) => x.datatask);
  // }
  constructor(private service: LoginService, private dialog: MatDialog) {
    super(state);
    this.service.loadTask().subscribe((data) => {
      this.patchState({ datatask: data });
      // console.log(this.datatask);
    });
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '25%',
    });
  }
}
