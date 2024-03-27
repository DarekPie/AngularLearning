import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { throttleTime } from 'rxjs/operators';

const formData = [1, 2, 3];
const x = [
  {
    sites: [
      {
        site: 1,
        questions: [
          {
            question: 'How old are you?',
            answers: ['15', '25', '35'],
            isRadioButton: true,
          },
        ],
      },
    ],
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm = new FormGroup({
    userData: new FormGroup({
      username: new FormControl('123', Validators.required),
      email: new FormControl('mail', [Validators.required, Validators.email]),
      hidden: new FormControl(null),
    }),
    gender: new FormControl('male'),
  });

  get userDataFromGroup(): FormGroup {
    return this.signupForm.controls.userData;
  }

  get emailControl(): FormControl {
    return this.userDataFromGroup.controls.email as FormControl;
  }

  ngOnInit(): void {
    this.emailControl.valueChanges
      .pipe(throttleTime(1000))
      .subscribe((x) => console.log(x));
  }

  ngSubmit() {
    console.log(this.signupForm);
    // formData.forEach(element => {
    //   this.signupForm.addControl('', new FormGroup({
    //     element: new FormControl(element, { validators: [Validators.min(2)]}),
    //     array: new FormArray([new FormControl('124'), new FormControl('123')])
    //   }));
    // });
  }
}
