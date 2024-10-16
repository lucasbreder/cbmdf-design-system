
import { Meta, StoryObj } from "@storybook/react";
import MaterialCard from "./MaterialCard";


const meta = {
    title: 'Material Card',
    tags: ['autodocs'],
    component: MaterialCard
} satisfies Meta<typeof MaterialCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: 123,
        name: 'Capa de Aproximação',
        categories: ['teste', 'teste1'],
        thumbnail: "https://picsum.photos/200",
        info: {
            'cautelados': '35',
            'cor': 'amarelo'
        },
        quantity: 100,
        patrimonyNumber: 18436,
        showCategories: true
    },
};

