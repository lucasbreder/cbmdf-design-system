import { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";

const meta = {
    title: 'Title',
    tags: ['autodocs'],
    component: Title,

} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Título da Página',
        subtitle: 'DITIC'
    },
};
