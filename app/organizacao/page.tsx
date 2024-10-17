"use client"
import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import Selector from "@/components/Selector/Selector";
import Title from "@/components/Title/Title";

export default function Inventario() {

  return (

    <div className="w-full flex flex-col gap-4">
            <Header>
       <Title title="Organização" subtitle="DITIC" />

            <Button title="Novo" onClick={() => {}} />
        </Header>
    </div>

  );
}
