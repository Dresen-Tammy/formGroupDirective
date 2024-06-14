import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { UserFormModel } from '../../models/form.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  // create the formGroup with only the fields that are needed in this component
  public formGroup = new FormGroup<UserFormModel>({
    first: new FormControl('', [Validators.required]),
    last: new FormControl('', [Validators.required]),
  }); 
 
  public constructor(public userService: UserService) {}

  public ngOnInit(): void {
    // populate the form with the user data
    this.userService.user$.subscribe((user) => {
      this.formGroup.setValue({
        first: user.first,
        last: user.last,
      });
    });
 
  }

  public submit(): void {
    console.log('Form', this.formGroup);
  }
}
