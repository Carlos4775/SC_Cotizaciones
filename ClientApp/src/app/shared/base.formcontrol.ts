import { FormControl, FormGroup } from "@angular/forms";

export class BaseFormControl extends FormControl {
    label: string;
    modelProperty: string;
    constructor(label: string, property: string, control: [any, any]) {
        super(control[0], control[1]);
        this.label = label;
        this.modelProperty = property;
    }
    getValidationMessages() {
        let messages: string[] = [];
        if (this.errors) {
            for (let errorName in this.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`El ${this.label} es requerido`);
                        break;
                    case "minlength":
                        messages.push(`El ${this.label} debe ser menor a ${this.errors['minlength'].requiredLength} caracteres`);
                        break;
                    case "maxlength":
                        messages.push(`El ${this.label} debe ser mayor a ${this.errors['maxlength'].requiredLength} caracteres`);
                        break;
                    case "pattern":
                        messages.push(`El formato de ${this.label} es invalido`);
                        break;
                }
            }
        }
        return messages;
    }
}

export class BaseFormGroup extends FormGroup {
    constructor(fg: {}) {
        super(fg);
    }

    validateForm() {
        this.markAllAsTouched();
        Object.keys(this.controls)
            .forEach(k => {
                this.controls[k].markAsDirty({ onlySelf: true });
            });
    }

    get getControls(): BaseFormControl[] {
        return Object.keys(this.controls)
            .map(k => this.controls[k] as BaseFormControl);
    }
    getValidationMessages(name: string): string[] {
        return (this.controls[name] as BaseFormControl).getValidationMessages();
    }

    isFieldValid(name: string): boolean {
        return this.controls[name].dirty && this.controls[name].touched && this.controls[name].invalid;
    }
}
