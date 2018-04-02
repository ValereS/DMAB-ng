import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  public email: string;
  public mdp: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.minLength(5)]],
      mdp: [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  private initFormModel() {

  }

  submit() {
    return this.loginForm.valid;
  }
}
