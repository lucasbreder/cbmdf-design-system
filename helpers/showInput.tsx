import Autocomplete from "@/components/Autocomplete/Autocomplete"
import CheckboxContainer from "@/components/CheckboxContainer/CheckboxContainer"
import DatePicker from "@/components/DatePicker/DatePicker"
import FileDrop from "@/components/FileDrop/FileDrop"
import { InputSchema } from "@/components/FormConstructor/FormConstructor"
import FormSection from "@/components/FormSection/FormSection"
import InputContainer from "@/components/InputContainer/InputContainer"
import InputRepeater from "@/components/InputRepeater/InputRepeater"
import RadioContainer from "@/components/RadioContainer/RadioContainer"
import SelectContainer from "@/components/SelectContainer/SelectContainer"
import { Textarea } from "@/components/ui/textarea"
import { ControllerRenderProps, FieldValues, UseFormReturn } from "react-hook-form"

export const showInput = (form:UseFormReturn, field:ControllerRenderProps<FieldValues, string>, formItem:InputSchema<any>) => {

    const defaultContainer =  <InputContainer field={field} formItem={formItem} />
    const checkboxContainer = <CheckboxContainer field={field} formItem={formItem} />
    const radioContainer = <RadioContainer field={field} formItem={formItem} />
    const selectContainer = <SelectContainer field={field} formItem={formItem} />
    const sectionContainer = <FormSection label={formItem.label} />
    const textareaContainer = <Textarea {...field} placeholder={formItem.placeholder} />
    const fileContainer = formItem.fileTypes ? <FileDrop form={form} field={field} fileTypes={formItem.fileTypes} /> : defaultContainer
    const datePickerContainer = <DatePicker formItem={formItem} form={form} field={field} />
    const repeaterContainer = <InputRepeater formItem={formItem} field={field} form={form} />
    const autocompleteContainer = <Autocomplete 
    showSelectedBelow={formItem.additionalFeatures?.includes('selected-bellow')} 
    allowNew={formItem.additionalFeatures?.includes('allow-new')} 
    allowMany={formItem.additionalFeatures?.includes('allow-many')} 
    form={form} 
    field={field} 
    itemsGroup={formItem.itemsGroup} 
    placeholder={formItem.placeholder} />

    const handlerInput:any = {
      checkbox: checkboxContainer,
      radio: radioContainer,
      select: selectContainer,
      textarea: textareaContainer,
      file: fileContainer,
      date: datePickerContainer,
      autocomplete: autocompleteContainer,
      section: sectionContainer,
      repeater: repeaterContainer
    }
    return handlerInput[formItem.type] ?? defaultContainer
   } 