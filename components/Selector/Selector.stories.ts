
import { Meta, StoryObj } from "@storybook/react";
import Selector from "./Selector";

const ExampleFunction = () => {
    console.log(`ExampleFunction`)
}

const meta = {
    title: 'Selector',
    tags: ['autodocs'],
    component: Selector
} satisfies Meta<typeof Selector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconsOptions: [
            {
                icon: 'list',
                onClick: ExampleFunction
            },
            {
                icon: 'calendar',
                onClick: ExampleFunction
            },
            {
                icon: 'coffee',
                onClick: ExampleFunction
            },
            {
                icon: 'moon',
                onClick: ExampleFunction
            },
            {
                icon: 'sun',
                onClick: ExampleFunction
            },
            {
                icon: 'cookie',
                onClick: ExampleFunction
            }
        ],
    },
};

