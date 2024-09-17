import { Meta, StoryObj } from "@storybook/react";

import FileDrop from "./FileDrop";

const meta = {
    title: 'File Drop',
    tags: ['autodocs'],
    component: FileDrop,

} satisfies Meta<typeof FileDrop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {

    }
}