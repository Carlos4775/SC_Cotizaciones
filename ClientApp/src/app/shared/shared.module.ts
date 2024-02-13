import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from "primeng/dialog";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MultiSelectModule } from 'primeng/multiselect';
import { ErrorFieldComponent } from './error.field.component';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule
  ],
  declarations: [
    ErrorFieldComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    CheckboxModule,
    CalendarModule,
    InputTextModule,
    InputMaskModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    ToolbarModule,
    ConfirmDialogModule,
    DialogModule,
    AutoCompleteModule,
    TooltipModule,
    DividerModule,
    TooltipModule,
    CheckboxModule,
    BadgeModule,
    InputNumberModule,
    ProgressSpinnerModule,
    MultiSelectModule,
    ErrorFieldComponent],
  providers: [ConfirmationService]
})

export class SharedModule { }
