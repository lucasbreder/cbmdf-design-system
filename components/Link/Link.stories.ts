import { Meta, StoryObj } from "@storybook/react";
import Link from "./Link";

const meta = {
    title: 'Link',
    tags: ['autodocs'],
    component: Link
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Exemplo',
        href: 'https://google.com.br'
    },
};
