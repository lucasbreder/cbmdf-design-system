import { ControllerRenderProps, FieldValues } from "react-hook-form"
import { Checkbox } from "../../ui/checkbox"
import { InputSchema } from "../FormConstructor/FormConstructor"
import { Label } from "../../ui/label"

type CheckboxContainerProps = {
    field:ControllerRenderProps<FieldValues, string>
    formItem:InputSchema<any>
}

const CheckboxContainer = ({formItem, field}:CheckboxContainerProps) => {
    return (
        <div className="flex flex-col gap-2 my-2">
      {
        formItem.itemsGroup?.map((item,index) => (
          <div key={index} className="flex gap-2 items-center">
             <Checkbox
              id={`check-${item.value}-${index}}`}
              name={item.value} 
              checked={field.value?.includes(item.value)}
              onCheckedChange={(checked) => {
                return checked
                  ? field.onChange([...field.value, item.value])
                  : field.onChange(
                      field.value?.filter(
                        (value:any) => value !== item.value
                      )
                    )
              }}
            />
            <Label htmlFor={`check-${item.value}-${index}}`}>{item.label}</Label>
          </div>
        ))
      }
    </div>
    )
}

export default CheckboxContainer