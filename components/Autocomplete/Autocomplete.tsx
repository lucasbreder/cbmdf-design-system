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
import { ControllerRenderProps, FieldValues, UseFormReturn } from "react-hook-form"
import { Badge } from "../ui/badge"
import { Input } from "../ui/input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { toSlug } from "@/helpers/toSlug"

type AutocompleteProps = {
  placeholder?: string
  itemsGroup?: ItemsGroupItem[]
  field: ControllerRenderProps<FieldValues, string>
  form:UseFormReturn
  allowMany?: boolean
  allowNew?: boolean
  showSelectedBelow?: boolean
}


function Autocomplete({itemsGroup = [], placeholder, field, form, allowMany, allowNew, showSelectedBelow}:AutocompleteProps) {
  const [open, setOpen] = useState(false)
  const [openNew, setOpenNew] = useState(false)
  const [items, setItems] = useState(itemsGroup)
  return (
    <span className="relative">
    <Popover open={open}>
      <PopoverTrigger asChild>
      <Button
          variant="outline"
          role="combobox"
          className={`pr-10 w-full justify-between font-normal ${!field.value && 'text-gray-500'}`}
          onClick={() => {
            setOpen(prev => !prev)
          }}
        >
          <div className="flex gap-2 text-gray-500">
          {field.value
                        ? 
            Array.isArray(field.value) ?
            field.value.length > 0 && !showSelectedBelow ? 
              field.value.map((valueField, index) => {
                return <Badge className="text-white flex gap-2" key={index}>

                  {
                    items.find(
                      (item) => item.value === valueField
                    )?.label
                  }
                  <FontAwesomeIcon icon={['fas', 'close']} onClick={() => {
                      const removeItemIndex = field.value.indexOf(valueField)
                      const updatedItems = field.value
                      updatedItems.splice(removeItemIndex, 1)
                      form.setValue(field.name, updatedItems)
                      setOpen(false)
                      setItems(prev =>
                        prev.filter((item) => {
                          return item.value !== valueField
                        })
                      )
                  }} />
                </Badge>
              })
              : placeholder

            :
            items.find(
              (item) => item.value === field.value
            )?.label
          
            : placeholder}
          </div>
        </Button>

      </PopoverTrigger>
      <PopoverContent className="w-full left-0" align="start">
      <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>Nada Encontrado</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
               
               <CommandItem
               value={item.label}
               key={item.value}
               onSelect={() => {
                allowMany ? 
                !field.value.includes(item.value) && form.setValue(field.name, [...form.getValues(field.name), item.value])
                : form.setValue(field.name, item.value)
                
               }}
             >
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    {allowNew && <Popover open={openNew}>
            <PopoverTrigger asChild className="cursor-pointer text-primary z-20 absolute right-4 top-3">
              <FontAwesomeIcon icon={['fas', 'plus-circle']} onClick={() => {
            setOpenNew(prev => !prev)
          }}/>
            </PopoverTrigger>
            <PopoverContent>
              <Input placeholder="Digite o novo item..." onKeyDown={(e:any) => {
                if (e.key === 'Enter') {

                  if(e.target.value) {
                    const value = toSlug(e.target.value)
                    setItems((prev) => [...prev, {
                      value: value,
                      label: e.target.value,
                    }])

                    setOpenNew(false)
                    form.setValue(field.name, [...form.getValues(field.name), value])
                    console.log(form.getValues())
                  }
                  
                }
                
              }}/>
            </PopoverContent>
          </Popover>}
          {showSelectedBelow && <div className="flex flex-col gap-2 mt-2">
            {
               Array.isArray(field.value) && field.value.map((valueField, index) => {
                return <Badge className="text-white flex gap-2 justify-between cursor-pointer" key={index}>

                  {
                    items.find(
                      (item) => item.value === valueField
                    )?.label
                  }
                  <FontAwesomeIcon icon={['fas', 'close']} onClick={() => {
                      const removeItemIndex = field.value.indexOf(valueField)
                      const updatedItems = field.value
                      updatedItems.splice(removeItemIndex, 1)
                      form.setValue(field.name, updatedItems)
                  }} />
                </Badge>
              })
            }
          </div>}
    </span>
  )
}

export default Autocomplete
