import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'forms-td-chalange';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscirption = 'Advanced';

  @ViewChild('signupForm') sgnForm: NgForm;
  onSubmit() {
    console.log(this.sgnForm.value);
  }
}
