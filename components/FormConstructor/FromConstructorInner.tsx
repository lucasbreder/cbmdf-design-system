
import { InputSchema } from "./FormConstructor"
import Button from "../Button/Button"
import FormFieldConstructor from "./FormFieldConstructor"
import Step from "../Steps/Steps"
import { Form } from "../ui/form"
import Steps from "../Steps/Steps"

type FormSchemaInner = {
    fieldsGroup: InputSchema[][]
    form: any,
    onSubmit: any
    title?: string
    buttonLabel?:string
    groupsPosition?: 'reverse'
    isSteped?: boolean
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
            <div key={index} className="flex flex-wrap -mx-2 items-end justify-start">
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