
import { Meta, StoryObj } from "@storybook/react";
import FormConstructor from "./FormConstructor";
import { z } from "zod";

const meta = {
    title: 'Forms',
    tags: ['autodocs'],
    component: FormConstructor
} satisfies Meta<typeof FormConstructor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Exemplo de formulário',
        fields: [
            {
                name: 'text',
                parser: z.string().min(2, {message: 'Deve ter entre 2 e 50 caracteres'}).max(50, {message: 'Deve ter entre 2 e 50 caracteres'}),
                placeholder: '',
                label: 'Texto',
                defaultValue: '',
                description: 'Aqui temos um exemplo de input text',
                type: 'text',
                basisSize: 'basis-1/3'
            },
            {
                name: 'number',
                parser: z.string().min(2, {message: 'Deve ter entre 2 e 50 caracteres'}).max(50, {message: 'Deve ter entre 2 e 50 caracteres'}),
                placeholder: '',
                label: 'Número',
                defaultValue: '',
                description: 'Aqui temos um exemplo de input number',
                type: 'number',
                basisSize: 'basis-1/3'
            },
            {
                name: 'email',
                parser: z.string().email({message: 'Esse e-mail não é válido'}),
                placeholder: '',
                label: 'E-mail',
                defaultValue: '',
                description: 'Aqui temos um exemplo de input email',
                type: 'email',
                basisSize: 'basis-1/3'
            },
        {
            name: 'textarea',
            parser: z.string().min(2, {message: 'Deve ter entre 2 e 50 caracteres'}).max(50, {message: 'Deve ter entre 2 e 50 caracteres'}),
            placeholder: '',
            label: 'Área de Texto',
            defaultValue: '',
            description: 'Aqui temos um exemplo de textarea',
            type: 'textarea'
        },
        {
            name: 'checkbox',
            parser: z.string().min(2, {message: 'Deve ter entre 2 e 50 caracteres'}).max(50, {message: 'Deve ter entre 2 e 50 caracteres'}),
            label: 'Checkbox',
            description: 'Aqui temos um exemplo de checkbox',
            type: 'checkbox',
            basisSize: 'basis-1/3',
            itemsGroup: [
                {
                    value: 'teste',
                    label: 'Novo Teste'
                },
                {
                    value: 'teste2',
                    label: 'Novo Teste 2'
                }
            ],
        },
          {
            name: 'radio',
            parser: z.string().min(2, {message: 'Deve ter entre 2 e 50 caracteres'}).max(50, {message: 'Deve ter entre 2 e 50 caracteres'}),
            placeholder: '',
            label: 'Radio',
            defaultValue: '',
            description: 'Aqui temos um exemplo de radio',
            basisSize: 'basis-1/3',
            itemsGroup: [
                {
                    value: 'teste',
                    label: 'Novo Teste'
                },
                {
                    value: 'teste2',
                    label: 'Novo Teste 2'
                }
            ],
            type: 'radio'
        },
        {
            name: 'select',
            parser: z.string().min(2, {message: 'Deve ter entre 2 e 50 caracteres'}).max(50, {message: 'Deve ter entre 2 e 50 caracteres'}),
            placeholder: '',
            label: 'Select',
            defaultValue: '',
            description: 'Aqui temos um exemplo de select',
            basisSize: 'basis-1/3',
            itemsGroup: [
                {
                    value: 'teste',
                    label: 'Novo Teste'
                },
                {
                    value: 'teste2',
                    label: 'Novo Teste 2'
                }
            ],
            type: 'select'
        },
        {
            name: 'file',
            parser: z.string().min(2, {message: 'Deve ter entre 2 e 50 caracteres'}).max(50, {message: 'Deve ter entre 2 e 50 caracteres'}),
            placeholder: '',
            fileTypes: {
                mimeType: [],
                extensionsType: []
            },
            defaultValue: '',
            type: 'file',
        },
      ]
    }
};