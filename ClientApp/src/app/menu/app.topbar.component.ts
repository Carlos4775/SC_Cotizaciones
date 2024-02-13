import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Menu } from 'primeng/menu';
import { MegaMenuItem } from 'primeng/api';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
  showSideBar = false;
  public roles: MegaMenuItem[] = [{
    icon: 'pi pi-user',
    items: [
      [{
        label: 'Roles',
        items: []
      }]
    ]
  }];


  public employeeName!: string;

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  @ViewChild('usermenu') usermenu!: ElementRef;

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {

  }

  updateItems(event: Event) {

  }
}
