import { AbstractControl, FormControl } from "@angular/forms";

export function cpValidator(control: FormControl) {
  const codigopostal = control.value;
  if (codigopostal && codigopostal !== '') {
    const validaCep = /^\d{4}-\d{3}?$/;
    return validaCep.test(codigopostal) ? null : {cepInvalido : true};
  }
  return null
}



  /*const pais = control.value;
  if(pais === "Portugal") {
    return { pais: true };
  } else (validaCodigo(codigopostal as string));
  return null;
}*/


/*function validaCodigo(cp: string) {

  if (!/^\d{4}-\d{3}?$/.test(cp))
    return true;
  else
    return false;
}*/


