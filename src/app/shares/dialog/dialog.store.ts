import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponentStore } from '@ngrx/component-store';
import { LoginService } from 'src/app/services/login.service';
const state = {
  addform: null as FormGroup | null,
};
type DialogState = typeof state;

@Injectable()
export class DialogStore extends ComponentStore<DialogState> {
  //   get addform(): any {
  //     return this.get((x) => x.addform);
  //   }
  constructor(private formBuilder: FormBuilder, private service: LoginService) {
    super(state);
    this.patchState({
      addform: this.formBuilder.group({
        id: ['', [Validators.required]],
        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        date: ['', [Validators.required]],
        hour: ['', [Validators.required]],
        responsable: ['', [Validators.required]],
        status: ['', [Validators.required]],
        createdBy: ['', [Validators.required]],
        lastChangedBy: ['', [Validators.required]],
      }),
    });
    this.adddata();
  }
  adddata() {
    const add = this.get((x) => x.addform);
    if (add != null && add.valid) {
      this.service.postTask(add.value).subscribe({
        next: (data) => {
          alert('add ok');
        },
        error: () => {
          alert('error');
        },
      });
    }
  }
}
