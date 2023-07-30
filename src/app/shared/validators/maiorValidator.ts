import { AbstractControl } from "@angular/forms";

export function maiorValidator(control: AbstractControl) {
  const nascimento = new Date(control.value);
  if(!validaIdade(nascimento)) {
    return { dataNascimento: true };
  } else
  return null;
}

function validaIdade(nascimento: Date) {
  const dataAtual = new Date()
  const dataMais18 = new Date(nascimento?.getUTCFullYear() + 18,
                              nascimento?.getUTCMonth(),
                              nascimento?.getDate())
  return dataMais18 <= dataAtual;
}
