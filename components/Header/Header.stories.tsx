import Aside from "./Header";
import { Meta, StoryObj } from "@storybook/react";
import Nav from "../Nav/Nav";
import Header from "./Header";
import FormConstructor from "../FormConstructor/FormConstructor";
import { z } from "zod";
import Button from "../Button/Button";
import Selector from "../Selector/Selector";
import { Input } from "../ui/input";
import Title from "../Title/Title";
import SearchForm from "../SearchForm/SearchForm";

const meta = {
    title: 'Header',
    tags: ['autodocs'],
    component: Header,

} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: [
            <Title title="Título da Página" subtitle="Subtítulo" />,
            <div className="basis-1/2"><SearchForm placeholder="Faça uma busca..." /></div>,
            <Selector iconsOptions={[
                {
                    icon: 'list',
                    onClick: () => {}
                },
                {
                    icon: 'calendar',
                    onClick: () => {}
                },
                
            ]} />,
            <Button title="Novo" onClick={() => {alert('click')}} />
               
        ],
    },
};
