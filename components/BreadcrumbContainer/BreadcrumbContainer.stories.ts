import { Meta, StoryObj } from "@storybook/react";
import { BreadcrumbContainer } from "./BreadcrumbContainer";

const meta = {
    title: 'Breadcrumb',
    tags: ['autodocs'],
    component: BreadcrumbContainer,

} satisfies Meta<typeof BreadcrumbContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {
                title: 'Home',
                url: '/'
            },
            {
                title: 'Página 1',
                url: '/'
            }
        ]
    },
};


