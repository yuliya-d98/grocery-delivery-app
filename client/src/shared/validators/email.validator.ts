import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class EmailValidator implements Validator {
  pattern: RegExp =
    /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,4}$/;

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.pattern.test(control.value)) {
      return null;
    }
    return { email: true };
  }
}
