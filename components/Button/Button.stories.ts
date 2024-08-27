import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'Button',
    tags: ['autodocs'],
    component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Exemplo',
        disable: false,
        loading: false,
        loadingTitle: 'Carregando...'
    },
};


export const Disable: Story = {
    args: {
        title: 'Desabilitado',
        disable: true,
        loading: false,
        loadingTitle: 'Carregando...'
    },
};