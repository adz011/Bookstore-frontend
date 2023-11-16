import { Injectable } from '@angular/core';
import { FormControl } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  constructor() {
  }

  getErrorMessage(formControl: FormControl<string | null>): string {
    let returnMessage = ''
    if (formControl.hasError('required')) {
      returnMessage = 'Enter the value'
    }
    if (formControl.hasError('email')) {
      returnMessage = 'Enter the valid email'
    }
    return returnMessage
  }
}
