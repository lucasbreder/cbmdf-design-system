
import { Meta, StoryObj } from "@storybook/react";
import Nav from "./Nav";

const meta = {
    title: 'Nav',
    tags: ['autodocs'],
    component: Nav
} satisfies Meta<typeof Nav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
       items: [
        {
            label: 'Dashboard',
            url: '/dashboard',
            icon: 'border-all'
        },
        {
            label: 'Catálogo',
            url: '/catalogo',
            icon: 'book'
        },
        {
            label: 'Inventário',
            url: '/inventario',
            icon: 'boxes-stacked'
        },
        {
            label: 'Conferência',
            url: '/conferencia',
            icon: 'check'
        },
        {
            label: 'Transferências',
            url: '/transferencia',
            icon: 'right-left'
        },
        {
            label: 'Organização',
            url: '/organizacao',
            icon: 'sitemap'
        },
        {
            label: 'Cautelas',
            url: '/cautelas',
            icon: 'arrow-up-from-bracket'
        }
       ]
    },
};