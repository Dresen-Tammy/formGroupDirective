import { AbstractControl } from "@angular/forms";
// Create a FormModel interface that includes all the controls we need in the form.
// Mark the controls as optional, so we can implement the form incrementally.
export interface UserFormModel {
  first?: AbstractControl;
  last?: AbstractControl;
  address?: AbstractControl;
}

export interface AddressFormModel {
  street?: AbstractControl;
  city?: AbstractControl;
  state?: AbstractControl;
  zip?: AbstractControl;
}

export interface StreetFormModel {
  number?: AbstractControl;
  name?: AbstractControl;
}