import { Component, OnInit } from '@angular/core';
import { DialogStore } from './dialog.store';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: [DialogStore],
})
export class DialogComponent implements OnInit {
  vm$ = this.store.select((state) => {
    return {
      addform: state.addform,
    };
  });

  constructor(private store: DialogStore) {}

  ngOnInit(): void {}
  Add() {
    this.store.adddata();
  }
}