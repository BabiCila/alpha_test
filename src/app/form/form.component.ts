import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nifValidator } from '../shared/validators/nifValidator';
import { maiorValidator } from '../shared/validators/maiorValidator';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit{

  form!: FormGroup;

  citiesByCountry:{[key: string]: string[]} = {
    "Angola": ["Benguela", "Luanda"],
    "Brasil":["Rio de Janeiro","São Paulo"],
    "CaboVerde":["Praia", "Mindelo"],
    "Moçambique":["Maputo", "Matola"],
    "Portugal": ["Lisboa", "Porto"],
  }

  cities: string[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(/.+@.+\..+/)]],
      nif: [null, [Validators.required, nifValidator]],
      nascimento: [null,[Validators.required, maiorValidator]],
      pais: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      endereco: [null, Validators.required],
      codigopostal: [null, [Validators.required]],
      telefone: [null, [Validators.required, Validators.pattern(/^9[1236]{1}[0-9]{7}$|^2[1236]{1}[0-9]{7}$|^3[1236]{1}[0-9]{7}$/)]],
      genero: [null, [Validators.required]],
    })
  }


  onChange(){
    const country:string = this.form.get("pais")?.value;
    this.cities = this.citiesByCountry[country];
  }

  onSubmit(){
    console.log(this.form);
    //this.form.reset();
  }
}
