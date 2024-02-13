import { Component } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
    public employeeName!: string;

    constructor(public layoutService: LayoutService) { }
    year = new Date().getFullYear();
}
