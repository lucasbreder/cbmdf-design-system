"use client"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command"
import { ItemsGroupItem } from "../FormConstructor/FormConstructor"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

type AutocompleteProps = {
  placeholder?: string
  itemsGroup?: ItemsGroupItem[]
  field: ControllerRenderProps<FieldValues, string>
  form:any 
}


function Autocomplete({itemsGroup = [], placeholder, field, form}:AutocompleteProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover>
      <PopoverTrigger asChild>
      <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {field.value
            ? itemsGroup.find(
                (item) => item.value === field.value
              )?.label
            : placeholder}
          {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
        </Button>

      </PopoverTrigger>
      <PopoverContent className="w-full left-0" align="start">
      <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>Nada Encontrado</CommandEmpty>
            <CommandGroup>
              {itemsGroup.map((item) => (
               
               <CommandItem
               value={item.label}
               key={item.value}
               onSelect={() => {
                 form.setValue(field.name, item.value)
               }}
             >
                  {/* <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  /> */}
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default Autocomplete
