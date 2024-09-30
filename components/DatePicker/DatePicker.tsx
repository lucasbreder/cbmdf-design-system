"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ControllerRenderProps, FieldValues, UseFormReturn } from "react-hook-form"
import { ptBR } from "date-fns/locale"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { isValidDate } from "@/helpers/isValidDate"
import { InputSchema } from "../FormConstructor/FormConstructor"

type DatePickerProps = {
  field: ControllerRenderProps<FieldValues, string>
  form: UseFormReturn
  isWritable?: boolean
  formItem:InputSchema
}

function DatePicker({field, form, isWritable = true, formItem}:DatePickerProps) {

  return (
    <Popover>
      {isWritable ? <div className="flex items-center">
      <PopoverTrigger asChild className="absolute left-7">
        <CalendarIcon className="mr-2 h-4 w-4" />
      </PopoverTrigger>
      <Input type="text" className="pl-10" placeholder={formItem.placeholder ?? 'Selecione uma data'} onFocus={(e) => {
          e.target.placeholder = formItem.placeholder ?? 'Selecione uma data'
        form.setValue(field.name, '')
      }} onChange={(e) => {
        const { value } = e.target;
        const formatedValue = value.replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1")

        const [day, month, year] = formatedValue.split("/").map(Number);


        if(formatedValue.length >= 10) {
          if(isValidDate(day, month, year)) {
            const date = new Date(year, month - 1, day)
            form.setValue(field.name, date)
          } else {
            form.setValue(field.name, '')
            e.target.placeholder = 'Data inválida, preencha novamente'
          }

        } else {
        form.setValue(field.name, formatedValue)
        }
        
      }} value={field.value instanceof Date ? format(field.value, 'dd/MM/yyyy') : field.value}/>
      </div> : 
      <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={cn(
          "justify-start text-left font-normal",
          !field.value && "text-muted-foreground"
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {field.value ? format(field.value, "dd/MM/yyyy") : <span>{formItem.placeholder ?? 'Selecione uma data'}</span>}
      </Button>
    </PopoverTrigger>
      }
      <PopoverContent>
      <Calendar
        mode="single"
        locale={ptBR}
        selected={field.value}  
        onSelect={field.onChange}
        initialFocus
      />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker
