import { Meta, StoryObj } from "@storybook/react";
import PageContainer from "./PageContainer";
import Header from "../Header/Header";
import Title from "../Title/Title";
import SearchForm from "../SearchForm/SearchForm";
import Selector from "../Selector/Selector";
import Button from "../Button/Button";
import TableGrid from "../TableGrid/Table";

const meta = {
    title: 'Page Container',
    tags: ['autodocs'],
    component: PageContainer,

} satisfies Meta<typeof PageContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: [
            <Header>
                <Title title="Página" subtitle="Subtítulo" />
                <div className="basis-4/6"><SearchForm placeholder="Faça uma busca..." /></div>
                <Selector iconsOptions={[
                    {
                        icon: 'list',
                        onClick: () => {}
                    },
                    {
                        icon: 'calendar',
                        onClick: () => {}
                    },
                    
                ]} />
                <Button title="Novo" onClick={() => {alert('click')}} />
            </Header>,
            <TableGrid jsonData={`[
            {
                "id": 1,
                "nome": "Fernando",
                "idade": 30,
                "email": "joao@example.com"
            },
            {
                "id": 2,
                "nome": "Maria",
                "idade": 25,
                "email": "maria@example.com",
                "unidade": "15 GBM"
            },
            {
                "id": 3,
                "nome": "Pedro",
                "idade": 35,
                "email": "pedro@example.com"
            },
            {
                "id": 4,
                "nome": "Ana",
                "idade": 28,
                "email": "ana@example.com"
            },
            {
                "id": 5,
                "nome": "Fernando",
                "idade": 30,
                "email": "joao@example.com"
            },
            {
                "id": 6,
                "nome": "Maria",
                "idade": 25,
                "email": "maria@example.com",
                "unidade": "15 GBM"
            },
            {
                "id": 7,
                "nome": "Pedro",
                "idade": 35,
                "email": "pedro@example.com"
            },
            {
                "id": 8,
                "nome": "Ana",
                "idade": 28,
                "email": "ana@example.com"
            },
            {
                "id": 9,
                "nome": "Fernando",
                "idade": 30,
                "email": "joao@example.com"
            },
            {
                "id": 10,
                "nome": "Maria",
                "idade": 25,
                "email": "maria@example.com",
                "unidade": "15 GBM"
            },
            {
                "id": 11,
                "nome": "Pedro",
                "idade": 35,
                "email": "pedro@example.com"
            },
            {
                "id": 12,
                "nome": "Ana",
                "idade": 28,
                "email": "ana@example.com"
            },
            {
                "id": 13,
                "nome": "Ana",
                "idade": 28,
                "email": "ana@example.com"
            },
            {
                "id": 14,
                "nome": "Pedro",
                "idade": 35,
                "email": "pedro@example.com"
            }
        ]`} />, 
        ],
    },
};
