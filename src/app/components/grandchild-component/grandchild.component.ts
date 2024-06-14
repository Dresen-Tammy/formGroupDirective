import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { StreetFormModel } from '../../models/form.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss']
})
export class GrandchildComponent implements OnInit {
  // create a form group with only the fields that are needed in this component
  public granchildFormGroup = new FormGroup<StreetFormModel>({
    number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    name: new FormControl('', [Validators.required]),
});

  // Inject the FormGroupDirective to access the parent form
  public constructor(public parentForm: FormGroupDirective, public userService: UserService) {
  }
  
  public ngOnInit(): void {
    // add the form group to the parent form
    this.parentForm.form.addControl('street', this.granchildFormGroup);
    // populate the form with the user data
    this.userService.user$.subscribe((user) => {
      this.granchildFormGroup.setValue({
        number: user.address.street.number,
        name: user.address.street.name,
      });
    })
  }
}
