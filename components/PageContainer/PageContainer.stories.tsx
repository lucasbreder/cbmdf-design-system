import { Meta, StoryObj } from "@storybook/react";
import PageContainer from "./PageContainer";

const meta = {
    title: 'Page Container',
    tags: ['autodocs'],
    component: PageContainer,

} satisfies Meta<typeof PageContainer>;

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
