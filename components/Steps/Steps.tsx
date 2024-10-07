import { ReactNode, useState } from "react"
import { InputSchema } from "../FormConstructor/FormConstructor"
import FormFieldConstructor from "../FormConstructor/FormFieldConstructor"
import { UseFormReturn } from "react-hook-form"
import LinkItem from "../Link/LinkItem"
import Button from "../Button/Button"

type StepsProps = {
    fieldsGroup: InputSchema[][]
    form: UseFormReturn
    buttonLabel?: string

}

type StepProps = {
    children: ReactNode[] | ReactNode
    activatedSteps: number[]
    setActivatedSteps: any
    index: number
    fields: InputSchema[]
    form: UseFormReturn
    length: number
    buttonLabel?: string
}

const Steps = ({fieldsGroup, form, buttonLabel}:StepsProps) => {

    const [activatedSteps, setActivatedSteps] = useState<number[]>([0])

    return (
        <div className="flex gap-5">
        {
            fieldsGroup.map((fields, index) => {
                return (
                    <Step buttonLabel={buttonLabel} form={form} fields={fields} length={fieldsGroup.length} setActivatedSteps={setActivatedSteps} activatedSteps={activatedSteps} key={index} index={index}>
                       {
                        fields.map((fieldItem,index) => {
                          return <FormFieldConstructor key={index} form={form} fieldItem={fieldItem} />
                       })
                       }
                    </Step>
                  )
            })
        }
        </div>
    )
}

const Step = ({children, activatedSteps, index, setActivatedSteps, fields, form, length, buttonLabel}:StepProps) => {



    return (
        <div className={`flex flex-col gap-2 w-full items-end ${activatedSteps.includes(index) ? 'opacity-100' : 'opacity-10'}`}>
            <div className={`flex flex-wrap -mx-2 items-end justify-start ${activatedSteps.includes(index) ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                {children}
                {index + 1 === length && <Button title={buttonLabel ?? 'Enviar'} type="submit"/>}
                </div>
            {(index + 1 < length && !activatedSteps.includes(index +1)) && <div className="w-full" onClick={() => {
                const validationStepControllet:boolean[] = []
                fields.forEach((field) => {
                    form.trigger(field.name).then((e) => {
                        validationStepControllet.push(e)
                    }).finally(() => {
                        !validationStepControllet.includes(false) && setActivatedSteps((prev:number[]) => [...prev, index +1])
                    })
                })
                
            }}><LinkItem href="#" title="Próximo Passo" icon="arrow-right" /></div>}
        </div>
    )
}

export default Steps