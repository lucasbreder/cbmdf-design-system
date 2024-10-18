import { Meta, StoryObj } from "@storybook/react";
import SearchForm from "./SearchForm";

const meta = {
    title: 'Search Form',
    tags: ['autodocs'],
    component: SearchForm,

} satisfies Meta<typeof SearchForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Faça uma busca...',
        onChange: (value) => { console.log(value)}
    },
};
