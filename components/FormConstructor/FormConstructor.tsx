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
  fields: InputSchema<any>[]
  isSteped?:boolean
  submitHandler?: (arg:any) => any
  additionalFeatures?: ['option-bellow' | 'allow-new' | 'allow-many'];
}

type AdditionalFeatures = 'selected-bellow' | 'allow-new' | 'allow-many';

interface BaseInputSchema<T> {
  name: keyof T | '';
  parser?: ZodTypeAny;
  mask?: (arg: string) => any;
  placeholder?: string;
  label?: string;
  defaultValue?: any;
  description?: string;
  fileTypes?: FileTypes;
  basis?: string;
  additionalFeatures?: AdditionalFeatures[];
  itemsGroup?: ItemsGroupItem[];
  repeaterGroup?: InputSchema<any>[];
}

interface SectionSchema<T> extends BaseInputSchema<T> {
  type: 'section';
}

interface TextInputSchema<T> extends BaseInputSchema<T> {
  type: 'text' | 'number' | 'email' | 'textarea' | 'file' | 'date';
}

interface FileInputSchema<T> extends BaseInputSchema<T> {
  type: 'file';
  fileTypes: FileTypes;
}

interface RepeaterInputSchema<T> extends BaseInputSchema<T> {
  type: 'repeater';
  repeaterGroup: InputSchema<any>[];
}

interface GroupInputSchema<T> extends BaseInputSchema<T> {
  type: 'checkbox' | 'radio' | 'select' | 'autocomplete';
  itemsGroup: ItemsGroupItem[];
}

export interface ItemsGroupItem {
  value: string;
  label: string;
}

export type InputSchema<T> =
  | TextInputSchema<T>
  | GroupInputSchema<T>
  | FileInputSchema<T>
  | SectionSchema<T>
  | RepeaterInputSchema<T>


const FormConstructor = ({fields, title, submitHandler, buttonLabel, fieldsGroupsNumber = 1, fieldsGroups, groupsPosition, isSteped}:FormSchema) => {

  const formSchemaObject:any = {}
  const formDefaultValuesObject:any = {}
  const fieldsByGroup:InputSchema<any>[][] = []

  if(fieldsGroups) {
    const noIncludedGroupArr:InputSchema<any>[] = []
    fieldsGroups.forEach((group) => {
      const includedGroupArr:InputSchema<any>[] = []

      fields.forEach(item => {
        group.includes(item.name as string) ? includedGroupArr.push(item) : noIncludedGroupArr.push(item)
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
    formSchemaObject[element.name] = element.parser ?? z.any()
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
    return (
      <>    <FormConstructorInner isSteped={isSteped} groupsPosition={groupsPosition} title={title} buttonLabel={buttonLabel} form={form} onSubmit={onSubmit} fieldsGroup={fieldsByGroup} />
      <div onClick={() => {

        const values = form.getValues()

        try {
          formSchema.parse(values);
        } catch (err) {
          if (err instanceof z.ZodError) {
            err.errors.forEach((issue) => {
              // console.log(issue); // Vai imprimir a mensagem de erro específica
              console.log(form.formState.errors.repeater?.root)
            });
          }
        }
      }}>Testar</div>
    </>
  )
}


export default FormConstructor