import { Meta, StoryObj } from "@storybook/react";
import LinkItem from "./LinkItem";

const meta = {
    title: 'Link',
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: { type: "text" }
        }
    },
    component: LinkItem
} satisfies Meta<typeof LinkItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Exemplo',
        href: 'https://google.com.br',
    },
};
