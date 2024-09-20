
import { Meta, StoryObj } from "@storybook/react";
import CalendarMaterialCheck from "./CalendarMaterialCheck";

const meta = {
    title: 'Material Check Calendar',
    tags: ['autodocs'],
    component: CalendarMaterialCheck
} satisfies Meta<typeof CalendarMaterialCheck>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        date: new Date(2024,8,20),
        materialsChecks: [
            {
                title: 'Nome do material',
                image: 'https://picsum.photos/200',
                isChecked: true,
                isTested: false,
                observation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut hendrerit augue. Ut varius ante vitae nulla auctor, eu posuere justo condimentum. Suspendisse laoreet fringilla leo ac pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos'

            },
            {
                title: 'Nome do material',
                image: 'https://picsum.photos/200',
                isChecked: true,
                isTested: false,
                observation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut hendrerit augue. Ut varius ante vitae nulla auctor, eu posuere justo condimentum. Suspendisse laoreet fringilla leo ac pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos'

            },
        ]
    }
};