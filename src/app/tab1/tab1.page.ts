import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
interface FormData {
  fullName: AbstractControl<any, any>;
  email: AbstractControl<any, any>;
  password: AbstractControl<any, any>;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  myForm: FormGroup<FormData>;
  
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group<FormData>({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]), 
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/)]),
      fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[a-zA-Z\s]+$/) ])
    });
  }
  


  submitForm() {
    alert('Gracias por unirte a nuestra comunidad')
  }
}
