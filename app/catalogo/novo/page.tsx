"use client"

import FormConstructor from "@/components/FormConstructor/FormConstructor";
import { novoItemCatalogoForm } from "@/data/forms/novoItemCatalogo";


export default function Home() {

  return (

    <div className="w-full flex flex-col gap-4">
        <FormConstructor
        fields={novoItemCatalogoForm} 
        title="Novo Item de Catálogo"
        groupsPosition="reverse"
        fieldsGroups={[['images', 'manual']]}
        buttonLabel="Enviar" 
        submitHandler={(e) => console.log(e)}/>
    </div>

  );
}
