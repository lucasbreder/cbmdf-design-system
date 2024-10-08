import { showInput } from "@/helpers/showInput"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { InputSchema } from "./FormConstructor"

type FormFieldConstructorProps = {
    form: any
    fieldItem: InputSchema
}

const FormFieldConstructor = ({form, fieldItem}:FormFieldConstructorProps) => {
    return (
        <FormField
        control={form.control}
        name={fieldItem.name}
        render={({ field }) => {              
          return (
            <FormItem className={`${fieldItem.basis ?? 'basis-full'} px-2 mb-4`}>
           {fieldItem.label && fieldItem.type !== "section" && <FormLabel>{fieldItem.label}</FormLabel>}
            <div className={`flex flex-col ${(fieldItem.type === 'radio' || fieldItem.type === 'checkbox') && 'flex-col-reverse mb-2'}`}>
            <FormControl>
              {
               showInput(form, field, fieldItem)
              }
            </FormControl>
            <FormDescription className={`${(fieldItem.type === 'radio' || fieldItem.type === 'checkbox') && 'mb-1 -mt-2'}`}>
            {fieldItem.description}
            </FormDescription>
            </div>
            <FormMessage />
          </FormItem>
          ) 
        }
      }
      />
    )
}

export default FormFieldConstructor
