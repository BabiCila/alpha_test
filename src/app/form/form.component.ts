import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit{

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      nif: [null, [Validators.required]],
      nascimento: [null,[Validators.required]],
      pais: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      endereco: [null, Validators.required],
      codigopostal: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      genero: [null, [Validators.required]],
    })
  }
  showForm(){
    return JSON.stringify(this.form.value)
  }

  onSubmit(){
    console.log(this.form);
    //this.form.reset();
  }
}
