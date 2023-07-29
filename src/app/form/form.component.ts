import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      name: [null],
      email: [null],
      nif: [null],
      nascimento: [null],
      pais: [null],
      cidade: [null],
      endereco: [null],
      codigopostal: [null],
      telefone: [null],
      genero: [null],
    })
  }


}
