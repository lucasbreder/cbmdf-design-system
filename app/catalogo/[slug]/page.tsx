"use client"
<<<<<<< HEAD
import { BreadcrumbContainer } from "@/components/BreadcrumbContainer/BreadcrumbContainer";
import CardContainer from "@/components/CardContainer/CardContainer";
import Header from "@/components/Header/Header";
=======

import { BreadcrumbContainer } from "@/components/BreadcrumbContainer/BreadcrumbContainer";
import CardContainer from "@/components/CardContainer/CardContainer";
>>>>>>> db71d2ffe5dbb55df97897a4cdd93d8f6a0570a9
import ImagesGallery from "@/components/ImagesGallery/ImagesGallery";
import InfoNumber from "@/components/InfoNumber/InfoNumber";
import LineChartMaterial from "@/components/LineChartMaterial/LineChartMaterial";
import Title from "@/components/Title/Title";
import Tools from "@/components/Tools/Tools";
import { Badge } from "@/components/ui/badge";
import { materialCards } from "@/data/fakeData";
import { useParams } from "next/navigation";


export default function CatalogoSingle() {

  const params = useParams<{ slug: string }>()
  

  const data = materialCards.find(item => {
    return item.slug === params.slug
  })


  if(data) {
    return (
        <div className="flex gap-2 w-full py-8">
          <div className="basis-7/12 border-r-2 pr-10">
            <div className="mb-10">
            <Tools hasBackButton items={[
              {
                url: `/catalogo/editar/${params.slug}`,
                icon: 'pen'
            },
            {
                url: '/',
                icon: 'box-archive',
                color: 'text-red-500'
            }
            ]}>
              <BreadcrumbContainer items={[
                {
                  title: "Home",
                  url: '/'
                }, {
                  title: "Catálogo",
                  url: '/catalogo'
                },
                {
                  title: data.name,
                  url: '#'
                }
              ]} />
            </Tools>
            </div>
            <div className="flex gap-10 basis-3/6">
            {data.gallery && <div className="basis-3/6"><ImagesGallery hasFeaturedImage images={data.gallery} /></div>}
            <div className="flex flex-col basis-3/6 gap-5 ">
            {data.categories && <div className="flex gap-2 text-white">
              {data.categories.map((category) => {
<<<<<<< HEAD
              return <Badge>{category.title}</Badge>
            })}
            </div>}
            
              <Title title={data.title} />
              <p className="font-light">{data.description}</p>
             { data.variations && <div className="grid grid-cols-2 gap-6 my-6">
              {
                data.variations && data.variations.map((variation, index) => {
=======
              return <Badge>{category}</Badge>
            })}
            </div>}
            
              <Title title={data.name} />
              <p className="font-light">{data.description}</p>
             { data.variants && <div className="grid grid-cols-2 gap-6 my-6">
              {
                data.variants && data.variants.map((variation, index) => {
>>>>>>> db71d2ffe5dbb55df97897a4cdd93d8f6a0570a9
                  return <CardContainer key={index} title={variation.title} description={variation.value} />
                })
              }
              </div>}
              <Title title="Observações Gerais" type="h4"/>
              <p className="font-light">{data.obs}</p>
              </div>
              
            </div>
          </div>
          <div className="flex flex-col gap-10 pl-10 basis-5/12">
            <div className="grid grid-cols-3 gap-4">
            {data.maxStock && <div ><InfoNumber position="reverse" orientation="vertical" number={data.maxStock} title='estoque máximo' icon="arrow-up"   /></div>}
            {data.minStock && <div ><InfoNumber position="reverse" orientation="vertical" number={data.minStock} title='estoque mínimo' icon="arrow-down"   /></div>}
            {data.loanedItems && <div ><InfoNumber position="reverse" orientation="vertical" number={data.loanedItems} title='itens distribuídos' icon="arrow-up-from-bracket"   /></div>}
            {data.stockedItems && <div ><InfoNumber position="reverse" orientation="vertical" number={data.stockedItems} title='itens estocados' icon="boxes-stacked"   /></div>}
            {data.orderAverageTime && <div ><InfoNumber sufix="anos" position="reverse" orientation="vertical" number={data.orderAverageTime} title='tempo médio de pedido' icon="clock"   /></div>}
            {data.lastBuyPrice && <div ><InfoNumber prefix="R$" position="reverse" orientation="vertical"  number={data.lastBuyPrice} title='último preço de compra' icon="coins"   /></div>}
             </div>
            <div>
              <Title title="Balanço" type="h4"/>
              <LineChartMaterial dataKey="balance" chartConfig={{
            balance: {
              label: "Balanço Real",
              color: "#2563eb",
            },
            idealBalance: {
              label: "Balanço Ideal",
              color: "#60a5fa",
            },
          }} chartData={[
            { month: "Jan", balance: 300, idealBalance: 200 },
            { month: "Fev", balance: 260, idealBalance: 150 },
            { month: "Mar", balance: 237, idealBalance: 100 },
            { month: "Abr", balance: 73, idealBalance: 50 },
            { month: "Mai", balance: 209, idealBalance: [300] },
            { month: "Jun", balance: 214, idealBalance: 250 },
            { month: "Jul", balance: 150, idealBalance: 200 },
            { month: "Ago", balance: 120, idealBalance: 150 },
            { month: "Set", balance: 100, idealBalance: 100 },
            { month: "Out", balance: 200, idealBalance: 50 },
            { month: "Nov", balance: 150, idealBalance: 300 },
            { month: "Dez", balance: 100, idealBalance: 250 },
          ]} />
            </div>
          </div>
        </div>
   );
  }
  return <div>Nada Econtrado </div>

  
}
