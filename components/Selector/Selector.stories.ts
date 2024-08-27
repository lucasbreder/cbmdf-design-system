
import { Meta, StoryObj } from "@storybook/react";
import Selector from "./Selector";

const meta = {
    title: 'Selector',
    tags: ['autodocs'],
    component: Selector
} satisfies Meta<typeof Selector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconsOptions: ['house', 'coffee'],
        className: 'default'
    },
};

