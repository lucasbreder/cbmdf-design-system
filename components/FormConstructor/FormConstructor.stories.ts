
import { Meta, StoryObj } from "@storybook/react";
import FormConstructor from "./FormConstructor";
import { z } from "zod";
import { cpfMask } from "@/helpers/masks/cpfMask";
import { required, requiredSelect } from "@/helpers/parsers/parsers";
import { brlMask } from "@/helpers/masks/brlMask";

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
        buttonLabel: 'Salvar',
        submitHandler: (data) => {console.log(data)},
        fields: [
            {
                name: 'text',
                parser: required
                .max(50, {
                    message: 'Deve ter entre 2 e 50 caracteres'
                }),
                placeholder: '',
                label: 'Texto',
                defaultValue: '',
                description: 'Aqui temos um exemplo de input text',
                type: 'text',
                basis: 'basis-1/2'
            },
            {
                name: 'cpf',
                parser: required
                .max(50, {
                    message: 'Deve ter entre 2 e 50 caracteres'
                }),
                mask: (value) => {
                    return cpfMask(value)
                },
                placeholder: '',
                label: 'CPF',
                defaultValue: '',
                description: 'Exemplo de input com máscara',
                type: 'text',
                basis: 'basis-1/2'
            },
            {
                name: 'currency',
                parser: required
                .max(50, {
                    message: 'Deve ter entre 2 e 50 caracteres'
                }),
                mask: (value) => {
                    return brlMask(value)
                },
                placeholder: '',
                label: 'Valor',
                defaultValue: '',
                description: 'Exemplo de input com máscara de R$ ',
                type: 'text',
                basis: 'basis-1/3'
            },
            {
                name: 'number',
                parser: z.coerce.number({ invalid_type_error: "Deve ser um número" })
                .max(50, {message: 'No máximo 50'})
                .optional(),
                placeholder: '',
                label: 'Número',
                defaultValue: '',
                description: 'Aqui temos um exemplo de input number, opcional e maximo de 50',
                type: 'number',
                basis: 'basis-1/3'
            },
            {
                name: 'email',
                parser: z.string().email({message: 'Esse e-mail não é válido'}),
                placeholder: '',
                label: 'E-mail',
                defaultValue: '',
                description: 'Aqui temos um exemplo de input email',
                type: 'email',
                basis: 'basis-1/3'
            },
        {
            name: 'textarea',
            parser: z.optional(z.string()),
            placeholder: '',
            label: 'Área de Texto',
            defaultValue: '',
            description: 'Aqui temos um exemplo de textarea',
            type: 'textarea'
        },
        {
            name: 'checkbox',
            label: 'Checkbox',
            description: 'Aqui temos um exemplo de checkbox',
            type: 'checkbox',
            parser: z.array(z.string()).refine((value) => value.some((item) => item), {
                message: "Selecione pelo menos um item",
              }),
            basis: 'basis-1/3',
            itemsGroup: [
                {
                    value: 'teste',
                    label: 'Novo Teste',
                },
                {
                    value: 'teste2',
                    label: 'Novo Teste 2'
                }
            ],
        },
          {
            name: 'radio',
            parser: z.enum(["teste4", "teste5"], {
                required_error: "You need to select a notification type.",
              }),
            placeholder: '',
            label: 'Radio',
            defaultValue: '',
            description: 'Aqui temos um exemplo de radio',
            basis: 'basis-1/3',
            itemsGroup: [
                {
                    value: 'teste4',
                    label: 'Novo Teste'
                },
                {
                    value: 'teste5',
                    label: 'Novo Teste 2'
                }
            ],
            type: 'radio'
        },
        {
            name: 'select',
            parser: requiredSelect,
            placeholder: '',
            label: 'Select',
            defaultValue: '',
            description: 'Aqui temos um exemplo de select',
            basis: 'basis-1/3',
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
            name: 'date',
            parser: z.date({message: 'Preencha com uma data'}),
            placeholder: 'Selecione ou escreva uma data',
            label: 'Data',
            defaultValue: '',
            description: 'Aqui temos um exemplo de datepicker',
            type: 'date',
            basis: 'basis-1/3',
        },
        {
            name: 'autocomplete',
            parser: requiredSelect,
            placeholder: 'Opções',
            label: 'Autocomplete',
            defaultValue: '',
            description: 'Aqui temos um exemplo de autocomplete',
            type: 'autocomplete',
            basis: 'basis-2/3',
            itemsGroup: [
                {
                    value: 'novo-teste',
                    label: 'Novo Teste'
                },
                {
                    value: 'novo-teste2',
                    label: 'Novo Teste 2'
                }
            ],
        },
        {
            name: 'file',
            parser:  z.instanceof(Object, {
                message: "Each item must be a valid file",
              }),
            placeholder: '',
            label: 'Texto',
            defaultValue: '',
            description: 'Aqui temos um exemplo de input file',
            type: 'file',
            fileTypes: {
                mimeType: ['image/jpeg', 'image/jpg', 'image/png'],
                extensionsType: ['jpeg', 'jpg', 'png']
            },
        },
      ]
    }
};