
import { InputSchema } from "./FormConstructor"
import FormFieldConstructor from "./FormFieldConstructor"
import Steps from "../Steps/Steps"
import { UseFormReturn } from "react-hook-form"
import Button from "@/components/Button/Button"
import { Form } from "@/components/ui/form"

type FormSchemaInner = {
    fieldsGroup: InputSchema<any>[][]
    form: UseFormReturn,
    onSubmit: any
    title?: string
    buttonLabel?:string
    groupsPosition?: 'reverse'
    isSteped?: boolean
    additionalFeatures?: ['option-bellow' | 'allow-new' | 'allow-many'];
  }

const FormConstructorInner = ({form, onSubmit, fieldsGroup, title, buttonLabel, groupsPosition, isSteped}:FormSchemaInner) => {

    return (
      <Form {...form}>
      <h2 className="font-bold text-3xl">{title}</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <div className={`flex gap-6 items-start ${groupsPosition === 'reverse' && 'flex-row-reverse'}`} >
        {(isSteped && fieldsGroup.length > 1) 
        ? <Steps buttonLabel={buttonLabel} form={form} fieldsGroup={fieldsGroup} />
        : 
        fieldsGroup.map((fields, index) => {
            return (
            <div key={index} className="flex flex-wrap -mx-2 items-start justify-start">
                {
                fields.map((fieldItem,index) => {
                    return <FormFieldConstructor key={index} form={form} fieldItem={fieldItem} />
                })
                }
            </div>
        )
        })    
    }

      </div>
      {!isSteped && <div className="basis-full">
        <Button title={buttonLabel ?? 'Enviar'} type="submit"/>
      </div>}
      </form>
    </Form>
    )   
}

export default FormConstructorInner