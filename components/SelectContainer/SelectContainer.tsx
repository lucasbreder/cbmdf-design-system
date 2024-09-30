import { ControllerRenderProps, FieldValues } from "react-hook-form"
import { InputSchema } from "../FormConstructor/FormConstructor"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"


type SelectContainerProps = {
    field:ControllerRenderProps<FieldValues, string>
    formItem:InputSchema
}

const SelectContainer = ({formItem, field}:SelectContainerProps) => {
    return (
      <Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger>
        <SelectValue placeholder={formItem.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {formItem.label && <SelectLabel>{formItem.label}</SelectLabel>}
          {
            formItem.itemsGroup?.map((item,index) => (
              <SelectItem key={index} value={item.value}>{item.label}</SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
    )
}

export default SelectContainer