
import { Meta, StoryObj } from "@storybook/react";
import TableGrid from "./Table";
import Button from "../Button/Button";

const meta = {
    title: 'Table',
    tags: ['autodocs'],
    component: TableGrid
} satisfies Meta<typeof TableGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        hideColumns: ['id'],
        showItemOver: {
            columnIndex: 2,
            dataItem: 'id'
        },
        actions: [
            <Button title="Aprovar" size="sm" variant="outline" icon="check" color="accept" />,
            <Button size="sm" icon="edit" />,
            <Button size="sm" icon="trash" color="warning" />,
        ],
        jsonData: `[
            {
                "id": 1,
                "image": "https://picsum.photos/200",
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
        ]`

    },
};

