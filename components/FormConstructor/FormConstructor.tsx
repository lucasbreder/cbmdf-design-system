import { ControllerRenderProps, FieldValues, useForm, UseFormReturn } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { z, ZodTypeAny } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Button from "../Button/Button"
import { Textarea } from "../ui/textarea"
import FileDrop, { FileTypes } from "../FileDrop/FileDrop"
import DatePicker from "../DatePicker/DatePicker"
import Autocomplete from "../Autocomplete/Autocomplete"
import CheckboxContainer from "../CheckboxContainer/CheckboxContainer"
import RadioContainer from "../RadioContainer/RadioContainer"
import SelectContainer from "../SelectContainer/SelectContainer"
import InputContainer from "../InputContainer/InputContainer"

type FormSchema = {
  title?: string
  buttonLabel?:string
  fields: InputSchema[]
  submitHandler?: (arg:any) => any
}

type BaseInputSchema = {
  name: string
  parser: ZodTypeAny
  mask?: (arg:string) => any
  placeholder?: string
  label?: string
  defaultValue?: string
  description?: string
  fileTypes?: FileTypes
  itemsGroup?: ItemsGroupItem[]
  basis?: string
};

type TextInputSchema = BaseInputSchema & {
  type: 'text' | 'number' | 'email' | 'textarea' | 'file' | 'date';
};

type FileInputSchema = BaseInputSchema & {
  type: 'file';
  fileTypes: FileTypes
};

type GroupInputSchema = BaseInputSchema & {
  type: 'checkbox' | 'radio' | 'select' | 'autocomplete';
  itemsGroup: ItemsGroupItem[];
};

export type InputSchema = TextInputSchema | GroupInputSchema | FileInputSchema;

export type ItemsGroupItem = {
  value: string
  label: string
}

type FormSchemaInner = {
  form: any,
  onSubmit: any
} & FormSchema

const FormConstructor = ({fields, title, submitHandler, buttonLabel}:FormSchema) => {

  const formSchemaObject:any = {}
  const formDefaultValuesObject:any = {}

  fields.forEach(element => {
    if(element.parser) {
    formSchemaObject[element.name] = element.parser
  }
  });

  fields.forEach(element => {
    formDefaultValuesObject[element.name] = element.defaultValue ?? ""
  });

  const formSchema = z.object(formSchemaObject)
  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: formDefaultValuesObject,
    })
  function onSubmit(values: z.infer<typeof formSchema>) {
    submitHandler && submitHandler(values)
  }
    return <FormConstructorInner title={title} buttonLabel={buttonLabel} form={form} onSubmit={onSubmit} fields={fields} />
}


const FormConstructorInner = ({form, onSubmit, fields, title, buttonLabel}:FormSchemaInner) => {


  const showInput = (form:UseFormReturn, field:ControllerRenderProps<FieldValues, string>, formItem:InputSchema) => {

    const defaultContainer =  <InputContainer field={field} formItem={formItem} />
    const checkboxContainer = <CheckboxContainer field={field} formItem={formItem} />
    const radioContainer = <RadioContainer field={field} formItem={formItem} />
    const selectContainer = <SelectContainer field={field} formItem={formItem} />
    const textareaContainer = <Textarea {...field} placeholder={formItem.placeholder} />
    const fileContainer = formItem.fileTypes ? <FileDrop form={form} field={field} fileTypes={formItem.fileTypes} /> : defaultContainer
    const datePickerContainer = <DatePicker formItem={formItem} form={form} field={field} />
    const autocompleteContainer = <Autocomplete form={form} field={field} itemsGroup={formItem.itemsGroup} placeholder={formItem.placeholder} />

    const handlerInput:any = {
      checkbox: checkboxContainer,
      radio: radioContainer,
      select: selectContainer,
      textarea: textareaContainer,
      file: fileContainer,
      date: datePickerContainer,
      autocomplete: autocompleteContainer,
    }
    return handlerInput[formItem.type] ?? defaultContainer
   } 


    return (
      <Form {...form}>
      <h2 className="font-bold text-3xl">{title}</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 flex flex-wrap -mx-4 items-baseline" noValidate>
        {
            fields.map((fieldItem,index) => {
                return <FormField
                key={index}
                control={form.control}
                name={fieldItem.name}
                render={({ field }) => {              
                  return (
                    <FormItem className={`${fieldItem.basis ?? 'basis-full'} px-4`}>
                   {fieldItem.label && <FormLabel>{fieldItem.label}</FormLabel>}
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
            })
        }
        <div className="basis-full ml-4">
          <Button title={buttonLabel ?? 'Enviar'} type="submit"/>
        </div>
      </form>
    </Form>
    )   
}

export default FormConstructor