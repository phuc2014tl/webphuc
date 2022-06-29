import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'webphuc';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'mail',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/mail.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'lock',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/lock.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'Vector',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/Vector.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'Avatar',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/Avatar.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'Group',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/Group.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'Vectorsidebar',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/Vectorsidebar.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'todo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/todo.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'inprogress',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/inprogress.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'check',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/check.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'user',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/user.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'line',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/line.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'edit',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/edit.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'Add',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/Add.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'logout',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/logout.svg')
    );
  }
}
