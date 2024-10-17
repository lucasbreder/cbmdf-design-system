import { ControllerRenderProps, FieldValues } from "react-hook-form"
import { InputSchema } from "../FormConstructor/FormConstructor"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

type RadioContainerProps = {
    field:ControllerRenderProps<FieldValues, string>
    formItem:InputSchema<any>
}

const RadioContainer = ({formItem, field}:RadioContainerProps) => {


    return (
      <RadioGroup onValueChange={field.onChange}
      defaultValue={formItem.defaultValue} className="flex flex-col gap-2 my-2">
      {
        formItem.itemsGroup?.map((item,index) => (
          <div key={index} className="flex gap-2 items-center">
            <RadioGroupItem key={index} value={item.value} id={`radio-${item.value}-${index}}`} />
            <Label htmlFor={`radio-${item.value}-${index}}`}>{item.label}</Label>
          </div>
        ))
      }
    </RadioGroup>
    )
}

export default RadioContainer