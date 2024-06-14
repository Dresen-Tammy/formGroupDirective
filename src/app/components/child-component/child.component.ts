import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { AddressFormModel } from '../../models/form.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // create a form group with only the fields that are needed in this component
  public childFormGroup = new FormGroup<Partial<AddressFormModel>>({
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
  });

  // Inject the FormGroupDirective to access the parent form
  public constructor(public parentForm: FormGroupDirective, public userService: UserService) {
  }
  
  public ngOnInit(): void {
    // add the form group to the parent form
    this.parentForm.form.addControl('address', this.childFormGroup);
    // populate the form with the user data
    this.userService.user$.subscribe((user) => {
      this.childFormGroup.setValue({
        city: user.address.city,
        state: user.address.state,
        zip: user.address.zip,
      });
    });
 
  }
}
