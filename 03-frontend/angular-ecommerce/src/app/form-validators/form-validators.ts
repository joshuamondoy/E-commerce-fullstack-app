import { FormControl, ValidationErrors } from "@angular/forms";

export class FormValidators {  // whitespace validation
    /* static here means that we don't need to instantiate this class we just call 
    and import in and call the function using .notation like so FormValidators.notOnlyWhiteSpace */
    static notOnlyWhitespace(control: FormControl) : ValidationErrors {
        
        // check if string only contains whitespace
        if ((control.value != null) && (control.value.trim().length === 0)) {

            // invalid, return error object
            return { 'notOnlyWhitespace': true };
        }
        else {
            // valid, return null
            return null;
        }
    }
}
