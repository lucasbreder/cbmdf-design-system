"use client"
import Header from "@/components/Header/Header";
import SearchForm from "@/components/SearchForm/SearchForm";
import Selector from "@/components/Selector/Selector";
import Title from "@/components/Title/Title";
import Button from "@/components/Button/Button";

export default function Inventario() {

  return (

    <div className="w-full flex flex-col gap-4">
            <Header>
       <Title title="Conferência" subtitle="DITIC" />
            <div className="basis-4/6"><SearchForm placeholder="Faça uma busca..." /></div>
            <Selector iconsOptions={[
                {
                    icon: 'border-all',
                    onClick: () => {}
                },
                {
                    icon: 'list',
                    onClick: () => {}
                },
                
            ]} />
            <Button title="Novo" onClick={() => {}} />
        </Header>
    </div>

  );
}
