import { useForm } from "react-hook-form"
import { z, ZodTypeAny } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FileTypes } from "../FileDrop/FileDrop"
import FormConstructorInner from "./FromConstructorInner"

type FormSchema = {
  title?: string
  buttonLabel?:string
  fieldsGroupsNumber?: number
  fieldsGroups?: string[][]
  groupsPosition?: 'reverse'
  fields: InputSchema[]
  isSteped?:boolean
  submitHandler?: (arg:any) => any
}

type BaseInputSchema = {
  name: string
  parser?: ZodTypeAny
  mask?: (arg:string) => any
  placeholder?: string
  label?: string
  defaultValue?: string
  description?: string
  fileTypes?: FileTypes
  itemsGroup?: ItemsGroupItem[]
  basis?: string
};

type SectionSchema = BaseInputSchema & {
  type: 'section';
  label?: string
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

export type ItemsGroupItem = {
  value: string
  label: string
}

export type InputSchema = TextInputSchema | GroupInputSchema | FileInputSchema | SectionSchema;


const FormConstructor = ({fields, title, submitHandler, buttonLabel, fieldsGroupsNumber = 1, fieldsGroups, groupsPosition, isSteped}:FormSchema) => {

  const formSchemaObject:any = {}
  const formDefaultValuesObject:any = {}
  const fieldsByGroup:InputSchema[][] = []

  if(fieldsGroups) {
    const noIncludedGroupArr:InputSchema[] = []
    fieldsGroups.forEach((group) => {
      const includedGroupArr:InputSchema[] = []

      fields.forEach(item => {
        group.includes(item.name) ? includedGroupArr.push(item) : noIncludedGroupArr.push(item)
      })

      fieldsByGroup.push(includedGroupArr)
        
      })
      fieldsByGroup.push(noIncludedGroupArr)

  } else {
    const groupSize = Math.floor(fields.length / fieldsGroupsNumber);
    const remainder = fields.length % fieldsGroupsNumber;
    
    let startIndex = 0;
    
      for (let i = 0; i < fieldsGroupsNumber; i++) {
        const size = groupSize + (i < remainder ? 1 : 0);
        const group = fields.slice(startIndex, startIndex + size)
        fieldsByGroup.push(group);
        startIndex += size;
      }
  }

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
    return <FormConstructorInner isSteped={isSteped} groupsPosition={groupsPosition} title={title} buttonLabel={buttonLabel} form={form} onSubmit={onSubmit} fieldsGroup={fieldsByGroup} />
}


export default FormConstructor