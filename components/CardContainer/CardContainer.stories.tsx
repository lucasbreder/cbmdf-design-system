import { Meta, StoryObj } from "@storybook/react";
import CardContainer from "./CardContainer";


const meta = {
    title: 'Card',
    tags: ['autodocs'],
    component: CardContainer,

} satisfies Meta<typeof CardContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Título do Card',
        description: 'Descrição do Card'
    },
};
