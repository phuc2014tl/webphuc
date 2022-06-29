import { Component, OnInit } from '@angular/core';
import { TaskStore } from './task.store';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [TaskStore],
})
export class TaskComponent implements OnInit {
  vm$ = this.store.select((state) => {
    return {
      datatask: state.datatask,
    };
  });
  constructor(public store: TaskStore) {}
  ngOnInit(): void {}
}
