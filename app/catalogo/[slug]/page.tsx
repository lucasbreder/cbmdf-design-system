"use client"
import Header from "@/components/Header/Header";
import ImagesGallery from "@/components/ImagesGallery/ImagesGallery";
import InfoNumber from "@/components/InfoNumber/InfoNumber";
import LineChartMaterial from "@/components/LineChartMaterial/LineChartMaterial";

import PageContainer from "@/components/PageContainer/PageContainer";
import Title from "@/components/Title/Title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { materialCards } from "@/data/fakeData";
import { useParams } from "next/navigation";

export default function CatalogoSingle() {

  const params = useParams<{ slug: string }>()
  

  const data = materialCards.find(item => {
    return item.slug === params.slug
  })


  if(data) {
    return (
        <PageContainer>
        <div className="flex gap-2 w-full">
          <div className="flex gap-6 border-r-2 pr-10 justify-between basis-3/6">
          {data.gallery && <div className="basis-3/6"><ImagesGallery hasFeaturedImage images={data.gallery} /></div>}
          <div className="flex flex-col basis-3/6 gap-5 ">
            <Title title={data.title} />
            <p>{data.description}</p>
            <div className="grid grid-cols-2 gap-4">
            {
              data.variations && data.variations.map((variation, index) => {
                return <div>
                  <Card>
                   <CardHeader>
                    <CardTitle>{variation.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {variation.value}
                  </CardContent>
                </Card>
                </div>
              })
            }
            </div>
            <p>{data.obs}</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 pl-10 basis-3/6">
            <div className="grid grid-cols-3 gap-4">
            {data.maxStock && <div ><InfoNumber position="reverse" orientation="vertical" number={data.maxStock} title='estoque máximo' icon="arrow-up"   /></div>}
            {data.minStock && <div ><InfoNumber position="reverse" orientation="vertical" number={data.minStock} title='estoque mínimo' icon="arrow-down"   /></div>}
            {data.loanedItems && <div ><InfoNumber position="reverse" orientation="vertical" number={data.loanedItems} title='itens distribuído' icon="arrow-up-from-bracket"   /></div>}
            {data.stockedItems && <div ><InfoNumber position="reverse" orientation="vertical" number={data.stockedItems} title='itens estocados' icon="boxes-stacked"   /></div>}
            {data.orderAverageTime && <div ><InfoNumber sufix="anos" position="reverse" orientation="vertical" number={data.orderAverageTime} title='tempo médio de pedido' icon="clock"   /></div>}
            {data.lastBuyPrice && <div ><InfoNumber prefix="R$" position="reverse" orientation="vertical"  number={data.lastBuyPrice} title='último preço de compra' icon="coins"   /></div>}
             </div>
            <div>
              <LineChartMaterial dataKey="balance" chartConfig={{
            balance: {
              label: "Balanço",
              color: "#2563eb",
            },
            idealBalance: {
              label: "Balanço Ideal",
              color: "#60a5fa",
            },
          }} chartData={[
            { month: "Janeiro", balance: 300, idealBalance: 200 },
            { month: "Fevereiro", balance: 260, idealBalance: 150 },
            { month: "Março", balance: 237, idealBalance: 100 },
            { month: "Abril", balance: 73, idealBalance: 50 },
            { month: "Maio", balance: 209, idealBalance: [300] },
            { month: "Junho", balance: 214, idealBalance: 250 },
            { month: "Julho", balance: 150, idealBalance: 200 },
            { month: "Agosto", balance: 120, idealBalance: 150 },
            { month: "Setembro", balance: 100, idealBalance: 100 },
            { month: "Outubro", balance: 200, idealBalance: 50 },
            { month: "Novembro", balance: 150, idealBalance: 300 },
            { month: "Dezembro", balance: 100, idealBalance: 250 },
          ]} />
            </div>
          </div>
        </div>
        </PageContainer>

 
   );
  }
  return <div>Nada Econtrado </div>

  
}
