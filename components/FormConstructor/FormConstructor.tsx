import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { z, ZodAny, ZodString } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Button from "../Button/Button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Checkbox } from "../ui/checkbox"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Label } from "../ui/label"
import FileDrop, { FileTypes } from "../FileDrop/FileDrop"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"

type FormSchema = {
  title?: string
  fields: InputSchema[]
}

type BaseInputSchema = {
  name: string
  parser: ZodString
  placeholder?: string
  label?: string
  defaultValue?: string
  description?: string
  fileTypes?: FileTypes
  itemsGroup?: ItemsGroupItem[]
  basisSize?: string
};

type TextInputSchema = BaseInputSchema & {
  type: 'text' | 'number' | 'email' | 'textarea' | 'file';
};

type GroupInputSchema = BaseInputSchema & {
  type: 'checkbox' | 'radio' | 'select';
  itemsGroup: ItemsGroupItem[];
};

type InputSchema = TextInputSchema | GroupInputSchema;

type ItemsGroupItem = {
  value: string
  label: string
}

type FormSchemaInner = {
  form: any,
  onSubmit: any
} & FormSchema

const FormConstructor = ({fields, title}:FormSchema) => {

  const formSchemaObject:any = {}
  const formDefaultValuesObject:any = {}

  fields.forEach(element => {
    formSchemaObject[element.name] = element.parser
  });

  fields.forEach(element => {
    formDefaultValuesObject[element.name] = element.defaultValue
  });

  const formSchema = z.object(formSchemaObject)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: formDefaultValuesObject,

      })

      function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)
      }

      return <FormConstructorInner title={title} form={form} onSubmit={onSubmit} fields={fields} />

}


const FormConstructorInner = ({form, onSubmit, fields, title}:FormSchemaInner) => {


  const showInput = (field:any, fieldItem:InputSchema) => {

    const checkboxContainer = (<div className="flex flex-col gap-2 my-2">
      {
        fieldItem.itemsGroup?.map((item,index) => (
          <div key={index} className="flex gap-2 items-center">
            <Checkbox name={item.value} id={`check-${item.value}-${index}}`}/>
            <Label htmlFor={`check-${item.value}-${index}}`}>{item.label}</Label>
          </div>
        ))
      }
    </div>)

    const radioContainer = (<RadioGroup className="flex flex-col gap-2 my-2">
      {
        fieldItem.itemsGroup?.map((item,index) => (
          <div key={index} className="flex gap-2 items-center">
            <RadioGroupItem key={index} value={item.value} id={`radio-${item.value}-${index}}`} />
            <Label htmlFor={`radio-${item.value}-${index}}`}>{item.label}</Label>
          </div>
        ))
      }
    </RadioGroup>)

    const selectContainer = (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={fieldItem.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {fieldItem.label && <SelectLabel>{fieldItem.label}</SelectLabel>}
          {
            fieldItem.itemsGroup?.map((item,index) => (
              <SelectItem key={index} value={item.value}>{item.label}</SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>)

    const textareaContainer = <Textarea {...field} {...fieldItem} />
    const fileContainer = fieldItem.fileTypes ? <FileDrop fileTypes={fieldItem.fileTypes} /> : <Input {...fieldItem} {...field} />
    const defaultContainer =  <Input {...fieldItem} {...field} />


    const handlerInput:any = {
      checkbox: checkboxContainer,
      radio: radioContainer,
      select: selectContainer,
      textarea: textareaContainer,
      file: fileContainer
    }


    return handlerInput[fieldItem.type] ?? defaultContainer

   } 

    return (
      <Form {...form}>
      <h2 className="font-bold text-3xl">{title}</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-wrap -mx-4 items-baseline" noValidate>
        {
            
            fields.map((fieldItem,index) => {


                return <FormField
                key={index}
                control={form.control}
                name={fieldItem.name}
                render={({ field }) => (
                  <FormItem className={`${fieldItem.basisSize ?? 'basis-full'} px-4`}>
                   {fieldItem.label && <FormLabel>{fieldItem.label}</FormLabel>}
                    <div className={`flex flex-col ${fieldItem.itemsGroup && 'flex-col-reverse mb-2'}`}>
                    <FormControl>
                      {
                       showInput(field, fieldItem)
                      }
                    </FormControl>
                    <FormDescription className={`${fieldItem.itemsGroup && 'mb-1 -mt-2'}`}>
                    {fieldItem.description}
                    </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            })
        }
        <div className="basis-full">
          <Button title="Submit" type="submit"/>
        </div>
      </form>
    </Form>
    )   
}

export default FormConstructor