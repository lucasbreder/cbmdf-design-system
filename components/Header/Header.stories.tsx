import Aside from "./Header";
import { Meta, StoryObj } from "@storybook/react";
import Nav from "../Nav/Nav";
import Header from "./Header";
import FormConstructor from "../FormConstructor/FormConstructor";
import { z } from "zod";
import Button from "../Button/Button";
import Selector from "../Selector/Selector";
import { Input } from "../ui/input";

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
            <div>Title</div>,
            <Input placeholder="Faça uma busca"/>,
            <Selector iconsOptions={[
                {
                    icon: 'list',
                    onClick: () => {alert('click')}
                },
                {
                    icon: 'calendar',
                    onClick: () => {alert('click')}
                },
            ]} />,
            <Button title="Novo" onClick={() => {alert('click')}} />
               
        ],
    },
};
