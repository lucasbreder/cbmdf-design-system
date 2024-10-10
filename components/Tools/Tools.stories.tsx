import { Meta, StoryObj } from "@storybook/react";
import Tools from "./Tools";


const meta = {
    title: 'Tools',
    tags: ['autodocs'],
    component: Tools,

} satisfies Meta<typeof Tools>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        hasBackButton: true,
        children: [
            <div>Children</div>
        ],
        items: [
            {
                url: '/',
                icon: 'pen'
            },
            {
                url: '/',
                icon: 'box-archive',
                color: 'text-red-500'
            }
        ]   
    },
};
