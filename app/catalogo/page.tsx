"use client"
import Button from "@/components/Button/Button";
import SearchForm from "@/components/Form/SearchForm/SearchForm";
import Header from "@/components/Header/Header";
import MaterialCard from "@/components/MaterialCard/MaterialCard";
import Selector from "@/components/Selector/Selector";
import TableGrid from "@/components/TableGrid/Table";
import Title from "@/components/Title/Title";
import { materialCards, tablegrid } from "@/data/fakeData";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Catalogo() {

  const router = useRouter();

  const [contentView, setContentView] = useState('blocks')

  return (

     <div className="w-full flex flex-col gap-4">
      <Header>
       <Title title="Catálogo" subtitle="DITIC" />
            <div className="basis-4/6"><SearchForm placeholder="Faça uma busca..." /></div>
            <Selector iconsOptions={[
                {
                    icon: 'border-all',
                    onClick: () => {setContentView('blocks')}
                },
                {
                    icon: 'list',
                    onClick: () => {setContentView('list')}
                },
                
            ]} />
            <Button title="Novo" onClick={() => {router.push('/catalogo/novo')}} />
        </Header>
        {contentView === 'blocks' && <div className={`flex flex-wrap -mx-4 animate-fade-left-enter`}>
        {materialCards.map((item,index) => {
          return <div className="basis-1/4 p-4"><MaterialCard showCategories={true} url={`/catalogo/${item.slug}`} key={index} {...item} /></div>
        })}
        </div>}
        {contentView === 'list' && <div className={`flex flex-wrap -mx-4 animate-fade-left-enter`}><TableGrid hideColumns={['id',  'categories']} jsonData={tablegrid}/></div>}
     </div>

  );
}
