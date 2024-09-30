import { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta = {
    title: 'Footer',
    tags: ['autodocs'],
    component: Footer,

} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: [
            <div>St. B Norte QNB 1 - Taguatinga, Brasília - DF - CEP 72115-010</div>,
            <div>CBMDF - Todos os direitos reservados</div>,   
        ],
    },
};
