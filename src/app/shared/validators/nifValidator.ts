import { AbstractControl } from "@angular/forms";

export function nifValidator(control: AbstractControl) {
    const nif = control.value as string;
    if(!validaNIF(nif)) {
        return { nif: true };
    } else
    return null;
}

function validaNIF(nif: string) {

  // has 9 digits?
  if (!/^[0-9]{9}$/.test(nif)) return false;

  // is from a person?
  if (!/^[123]|45|5/.test(nif)) return false;

  const value = new String(nif);
  // digit check
  let tot: number =
    parseInt(value[0]) * 9 +
    parseInt(value[1]) * 8 +
    parseInt(value[2]) * 7 +
    parseInt(value[3]) * 6 +
    parseInt(value[4]) * 5 +
    parseInt(value[5]) * 4 +
    parseInt(value[6]) * 3 +
    parseInt(value[7]) * 2;
  let div: number = tot / 11;
  let mod: number = tot - parseInt(div.toString()) * 11;
  let tst: number = mod == 1 || mod == 0 ? 0 : 11 - mod;
  return parseInt(value[8]) == tst;
}
