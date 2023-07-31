import { FormControl} from "@angular/forms";

export function cpValidator(control: FormControl) {
  const codigopostal = control.value;
  const pais = control.root.get("pais")?.value;
  if (pais === "Portugal" && codigopostal && codigopostal !== '') {
    const validaCep = /^\d{4}-\d{3}?$/;
    return validaCep.test(codigopostal) ? null : {cepInvalido : true};
  }
  return null
}



