import { Meta, StoryObj } from "@storybook/react";
import InfoNumber from "./InfoNumber";

const meta = {
    title: 'Info Number',
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: { type: 'text' }
        }
    },
    component: InfoNumber,
} satisfies Meta<typeof InfoNumber>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        number: 100,
        title: 'itens em estoque',
        icon: 'box-open',
        orientation: 'horizontal'

    }
}


