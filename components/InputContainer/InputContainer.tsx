import { ControllerRenderProps, FieldValues } from "react-hook-form"
import { InputSchema } from "../FormConstructor/FormConstructor"
import { Input } from "../ui/input"

type CheckboxContainerProps = {
    field:ControllerRenderProps<FieldValues, string>
    formItem:InputSchema<any>
}

const InputContainer = ({formItem, field}:CheckboxContainerProps) => {
    return (
    
    <Input {...field} type={formItem.type} placeholder={formItem.placeholder} onChange={(e) => {
      const { value } = e.target;
      if(formItem.mask) {
        e.target.value = formItem.mask(value)
      }
      field.onChange(e);
    }}/>
    )
}

export default InputContainer