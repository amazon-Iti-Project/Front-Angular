import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/** A hero's name can't match the given regular expression */
export function forbiddenPasswordValidator(password: AbstractControl): ValidatorFn {
    
 
  
    // console.log(password)
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = (password.value !== control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
}


export function forbiddenRePasswordValidator(rePassword: AbstractControl): ValidatorFn {
  
    console.log(rePassword)
    return (control: AbstractControl): { [key: string]: any } | null => {
        // console.log(rePassword.pristine)
        const forbidden = (rePassword.dirty && rePassword.touched &&  rePassword.value !== control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
}


export const passwordMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    // console.log(control)
    const password = control.get('password');
    const repassword = control.get('repassword');
    // console.log("match2",password?.value,repassword?.value)
  
    return password && repassword && password.value !== repassword.value ? { noMatching: true } : null;
  };