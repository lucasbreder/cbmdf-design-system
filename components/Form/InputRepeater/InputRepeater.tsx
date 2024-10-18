import { ControllerRenderProps, FieldValues, useFieldArray, UseFormReturn } from "react-hook-form";
import { InputSchema } from "../FormConstructor/FormConstructor";
import FormFieldConstructor from "../FormConstructor/FormFieldConstructor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

type InputRepeaterProps = {
    form:UseFormReturn
    field: ControllerRenderProps<FieldValues, string>
    formItem: InputSchema<any>
}

const InputRepeater = ({form, field, formItem}:InputRepeaterProps) => {


    const baseRepeaterObject:any = {}
    formItem.repeaterGroup && formItem.repeaterGroup.forEach(item => 
      baseRepeaterObject[item.name] = ''
    )

    useEffect(() => {
      append(baseRepeaterObject)
    },[])
    

    const { fields, append, remove } = useFieldArray({
        name: field.name,
      });

     
    return (
        <div className="flex flex-col gap-3">
        {formItem.repeaterGroup && fields.map((fieldItemMap, index) => (
            <div className="flex w-full bg-slate-200 p-2 pt-5 rounded-md">
              <div key={fieldItemMap.id} className="flex flex-wrap items-center w-full">
              {
                  formItem.repeaterGroup?.map((groupItem, groupIndex) => {
                    
                    return (
                      <FormFieldConstructor 
                      key={groupIndex}  
                      form={form} 
                      fieldItem={{
                        ...groupItem,
                        name: `${field.name}.${index}.${groupItem.name as string}`,
                      }} />                            
                )
              
              })
                 
              }
            </div>
            <div className=" p-2 flexx items-center ">
            <FontAwesomeIcon className=" flex items-center cursor-pointer pb-3" icon={['fas', 'close']} onClick={() => {
                remove(index)
              }} />
            </div>
            </div>
          ))}
    
          <div className="flex cursor-pointer items-center justify-center gap-2 text-white bg-primary p-2 rounded-md" onClick={() => {
                append(baseRepeaterObject)
              }} >
            <div>Adicionar</div>
            <FontAwesomeIcon icon={['fas', 'plus']} />
          </div>

          </div>
    )
}

export default InputRepeater