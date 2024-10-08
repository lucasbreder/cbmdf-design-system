import { InputSchema } from "@/components/FormConstructor/FormConstructor"
import { required } from "@/helpers/parsers/parsers"
import { z } from "zod"

export const novoItemCatalogoForm:InputSchema[] = [
    {
        name: 'nome',
        parser: required
        .max(50, {
            message: 'Deve ter até 50 caracteres'
        }),
        placeholder: 'Nome',
        type: 'text'
    },
    {
        name: 'marca',
        parser: required
        .max(50, {
            message: 'Deve ter até 50 caracteres'
        }),
        placeholder: 'Marca',
        defaultValue: '',
        type: 'text',
        basis: 'basis-1/4'
    },
    {
        name: 'modelo',
        parser: required
        .max(50, {
            message: 'Deve ter até 50 caracteres'
        }),
        placeholder: 'Modelo',
        defaultValue: '',
        type: 'text',
        basis: 'basis-1/4'
    },
    {
        name: 'vida-util',
        parser: z.coerce.number().min(1,{
            message: 'Deve ser maior que 1'
        }),
        placeholder: 'Vida útil média',
        defaultValue: '',
        type: 'number',
        basis: 'basis-1/2'
    },
    {
        name: 'apelidos',
        parser: required
        .max(50, {
            message: 'Deve ter até 50 caracteres'
        }),
        placeholder: 'Apelidos',
        additionalFeatures: ['allow-many', 'allow-new'],
        defaultValue: '',
        type: 'autocomplete',
        basis: 'basis-1/3',
        itemsGroup: [
            {
                label: 'Capa',
                value: 'capa'
            },
            {
                label: 'EPI',
                value: 'epi'
            },
            {
                label: 'Aproximação',
                value: 'aproximacao'
            }
        ]
    },
    {
        name: 'cod-sigmanet',
        parser: z.coerce.number().min(1,{
            message: 'Deve tser maior que 1'
        }),
        placeholder: 'Código SIGMANET',
        defaultValue: '',
        type: 'number',
        basis: 'basis-1/3'
    },
    {
        name: 'codigo-barras',
        parser: required
        .max(50, {
            message: 'Deve ter até 50 caracteres'
        }),
        placeholder: 'Código de Barras',
        defaultValue: '',
        type: 'text',
        basis: 'basis-1/3'
    },
    {
        name: 'setorial',
        parser: required
        .max(50, {
            message: 'Deve ter até 50 caracteres'
        }),
        placeholder: 'Setorial Responsável',
        defaultValue: '',
        type: 'text',
        basis: 'basis-1/2'
    },
    {
        name: 'categorias',
        parser: required
        .max(50, {
            message: 'Deve ter até 50 caracteres'
        }),
        placeholder: 'Categorias',
        defaultValue: '',
        type: 'autocomplete',
        basis: 'basis-1/2',
        itemsGroup: [
            {
                label: 'Capa',
                value: 'capa'
            }
        ]
    },
    {
        name: 'observacoes',
        parser: required
        .max(50, {
            message: 'Deve ter até 50 caracteres'
        }),
        placeholder: 'Observações',
        defaultValue: '',
        type: 'textarea',
        itemsGroup: [
            {
                label: 'Capa',
                value: 'capa'
            }
        ]
    },
    {
        name: "",
        label: "Caracteristicas",
        type: "section"
    },
    {
        name: 'caracteristicas',
        basis: 'basis-1/2',
        parser: z.array(z.string()).refine((value) => value.some((item) => item), {
            message: "Selecione pelo menos um item",
          }),
        placeholder: 'Observações',
        defaultValue: '',
        type: 'checkbox',
        itemsGroup: [
            {
                label: 'Transferência Facilitada',
                value: 'transferencia-facilitada'
            },
            {
                label: 'Fracionável',
                value: 'fracionavel'
            }
        ]
    },
    {
        name: 'variacoes',
        basis: 'basis-1/2',
        parser: z.enum(["material-permanente", "material-consumo"], {
            required_error: "You need to select a notification type.",
          }),
        placeholder: 'Observações',
        defaultValue: '',
        type: 'radio',
        itemsGroup: [
            {
                label: 'Material Permanente',
                value: 'material-permanente'
            },
            {
                label: 'Material de Consumo',
                value: 'material-consumo'
            }
        ]
    },
    {
        name: "",
        label: "Informações de estoque",
        type: "section"
    },
    {
        name: 'estoque-max',
        parser: z.coerce.number().min(1,{
            message: 'Deve tser maior que 1'
        }),
        placeholder: 'Estoque Máximo',
        defaultValue: '',
        type: 'number',
        basis: 'basis-1/6'
    },
    {
        name: 'estoque-min',
        parser: z.coerce.number().min(1,{
            message: 'Deve tser maior que 1'
        }),
        placeholder: 'Estoque Mínimo',
        defaultValue: '',
        type: 'number',
        basis: 'basis-1/6'
    },
    {
        name: 'tempo-pedido',
        parser: z.coerce.number().min(1,{
            message: 'Deve tser maior que 1'
        }),
        placeholder: 'Tempo de Pedido',
        defaultValue: '',
        type: 'number',
        basis: 'basis-1/6'
    },
    {
        name: 'images',
        parser: z.instanceof(Object, {
            message: "Each item must be a valid file",
          }),
        placeholder: 'Imagens',
        defaultValue: '',
        type: 'file',
        fileTypes: {
            mimeType: ['image/jpeg', 'image/jpg', 'image/png'],
            extensionsType: ['jpeg', 'jpg', 'png']
        },
    },
    {
        name: 'manual',
        parser: z.instanceof(Object, {
            message: "Each item must be a valid file",
          }),
        placeholder: 'Manuais',
        defaultValue: '',
        type: 'file',
        fileTypes: {
            mimeType: ['application/pdf'],
            extensionsType: ['pdf']
        },
    },
]