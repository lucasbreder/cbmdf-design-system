import { showInput } from "@/helpers/showInput"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { InputSchema } from "./FormConstructor"
import { UseFormReturn } from "react-hook-form"

type FormFieldConstructorProps = {
    form: UseFormReturn
    fieldItem: InputSchema<any>
}

const FormFieldConstructor = ({form, fieldItem}:FormFieldConstructorProps) => {

    return (
        <FormField
        control={form.control}
        name={fieldItem.name as string}
        render={({ field }) => {              
          return (
            <FormItem className={`${fieldItem.basis ?? 'basis-full'} px-2 mb-4`}>
           {(fieldItem.defaultValue || 
            (fieldItem.label && fieldItem.label !== fieldItem.placeholder))
            && fieldItem.type !== "section" && 
            <FormLabel>{fieldItem.label ?? fieldItem.placeholder}</FormLabel>}
            
            <div className={`flex flex-col ${(fieldItem.type === 'radio' || fieldItem.type === 'checkbox' || fieldItem.type === 'repeater') && 'flex-col-reverse mb-2'}`}>
            <FormControl>
              {
               showInput(form, field, fieldItem)
              }  
            </FormControl>
            
            <FormDescription className={`${(fieldItem.type === 'radio' || fieldItem.type === 'checkbox' || fieldItem.type === 'repeater') && 'mb-1 -mt-2'}`}>
            {fieldItem.description}
            </FormDescription>
            </div>
            {
              fieldItem.type !== 'repeater' ? <FormMessage/> :
              <div className="text-sm font-medium text-destructive">{form.formState.errors[fieldItem.name as string]?.root?.message?.toString()}</div>
            }
          </FormItem>
          ) 
        }
      }
      />
    )
}

export default FormFieldConstructor
