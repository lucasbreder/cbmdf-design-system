import Input from "./Input";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'Input',
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: { type: "text" }
        }
    },
    component: Input
} satisfies Meta<typeof Input>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "placeholde"
    }
}