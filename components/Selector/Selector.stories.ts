
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
                function: ExampleFunction
            },
            {
                icon: 'calendar',
                function: ExampleFunction
            },
            {
                icon: 'coffee',
                function: ExampleFunction
            },
            {
                icon: 'moon',
                function: ExampleFunction
            },
            {
                icon: 'sun',
                function: ExampleFunction
            },
            {
                icon: 'cookie',
                function: ExampleFunction
            }
        ],
    },
};

