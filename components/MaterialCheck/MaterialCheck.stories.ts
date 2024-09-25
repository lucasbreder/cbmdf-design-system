
import { Meta, StoryObj } from "@storybook/react";
import MaterialCheck from "./MaterialCheck";

const meta = {
    title: 'Material Check',
    tags: ['autodocs'],
    component: MaterialCheck
} satisfies Meta<typeof MaterialCheck>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Nome do Material',
        image: "https://picsum.photos/200",
        isEditable: true
    }
};