"use client"

import FormConstructor from "@/components/FormConstructor/FormConstructor";
import { materialCards } from "@/data/fakeData";
import { novoItemCatalogoForm } from "@/data/forms/novoItemCatalogo";
import { catalogItemFactory } from "@/factories/catalogItemFactory";
import { useParams } from "next/navigation";


export default function Home() {

  const params = useParams<{ slug: string }>()

  const obj = materialCards.find(item => {
    return item.slug === params.slug
  })

  const data = catalogItemFactory(obj)

  console.log(data)


  novoItemCatalogoForm.forEach((item) => {
    item.defaultValue = (data && item.name !== '') ? data[item.name] : ''
  })


  return (

    <div className="w-full flex flex-col gap-4">
        <FormConstructor
        fields={novoItemCatalogoForm} 
        title="Novo Item de Catálogo"
        groupsPosition="reverse"
        fieldsGroups={[['gallery', 'documents']]}
        buttonLabel="Enviar" 
        submitHandler={(e) => console.log(e)}/>

    </div>

  );
}
