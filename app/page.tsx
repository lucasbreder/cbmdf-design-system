"use client"
import Header from "@/components/Header/Header";
import Title from "@/components/Title/Title";

export default function Home() {

  return (

     <div className="w-full flex flex-col gap-4">
       <Header>
       <Title title="Dashboard" subtitle="DITIC" />
        </Header>
      </div>

  );
}
