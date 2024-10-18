
import { InputSchema } from "@/components/Form/FormConstructor/FormConstructor"
import { required } from "@/helpers/parsers/parsers"
import { CatalogItem } from "@/models/catalogItem"
import { z } from "zod"

export const novoItemCatalogoForm:InputSchema<CatalogItem>[] = [
    {
        name: 'name',
        parser: required
        .max(50, {
            message: 'Deve ter até 50 caracteres'
        }),
        placeholder: 'Nome',
        type: 'text'
    },
    {
        name: 'lifeCicle',
        parser: z.coerce.number().min(1,{
            message: 'Deve ser maior que 1'
        }),
        placeholder: 'Vida útil média',

        type: 'number',
        basis: 'basis-1/2'
    },
    {
        name: 'nicknames',
        parser: z.array(z.string()).refine((value) => value.some((item) => item), {
            message: "Selecione pelo menos um item",
          }),
        placeholder: 'Apelidos',
        additionalFeatures: ['allow-many', 'allow-new'],

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
        name: 'sigmanetCode',
        parser: z.coerce.number().min(1,{
            message: 'Deve tser maior que 1'
        }),
        placeholder: 'Código SIGMANET',

        type: 'number',
        basis: 'basis-1/3'
    },
    {
        name: 'barCode',
        parser: required
        .max(50, {
            message: 'Deve ter até 50 caracteres'
        }),
        placeholder: 'Código de Barras',

        type: 'text',
        basis: 'basis-1/3'
    },
    {
        name: 'owner',
        parser: required
        .max(50, {
            message: 'Deve ter até 50 caracteres'
        }),
        placeholder: 'Setorial Responsável',

        type: 'text',
        basis: 'basis-1/2'
    },
    {
        name: 'categories',
        parser: z.array(z.string()).refine((value) => value.some((item) => item), {
            message: "Selecione pelo menos um item",
          }),
        placeholder: 'Categorias',

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
        name: 'obs',
        parser: required
        .max(50, {
            message: 'Deve ter até 50 caracteres'
        }),
        placeholder: 'Observações',

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
        name: 'features',
        basis: 'basis-1/2',
        parser: z.array(z.string()).refine((value) => value.some((item) => item), {
            message: "Selecione pelo menos um item",
          }),

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
        name: 'featureUnique',
        basis: 'basis-1/2',
        parser: z.enum(["material-permanente", "material-consumo"], {
            required_error: "You need to select a notification type.",
          }),

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
        label: "Variações",
        type: "section"
    },
    {
        name: 'variants',
        parser: z.enum(["material-permanente", "material-consumo"], {
            required_error: "You need to select a notification type.",
          }),

        type: 'repeater',
        repeaterGroup: [
            {
                name: 'variant',
                parser: z.array(z.string()).refine((value) => value.some((item) => item), {
                    message: "Selecione pelo menos um item",
                  }),
                placeholder: 'Variações',
                type: 'autocomplete',
                basis: 'basis-1/2',
                itemsGroup: [
                    {
                        label: 'Cor',
                        value: 'cor'
                    },
                    {
                        label: 'Tamanho',
                        value: 'tamanho'
                    }
                ]
            },
            {
                name: 'value',
                parser: required
                .max(50, {
                    message: 'Deve ter até 50 caracteres'
                }),
                placeholder: 'Nome',
                type: 'text',
                basis: 'basis-1/2',
            },
        ]
    },
    {
        name: "",
        label: "Informações de estoque",
        type: "section"
    },
    {
        name: 'maxStock',
        parser: z.coerce.number().min(1,{
            message: 'Deve tser maior que 1'
        }),
        placeholder: 'Estoque Máximo',

        type: 'number',
        basis: 'basis-1/6'
    },
    {
        name: 'minStock',
        parser: z.coerce.number().min(1,{
            message: 'Deve tser maior que 1'
        }),
        placeholder: 'Estoque Mínimo',

        type: 'number',
        basis: 'basis-1/6'
    },
    {
        name: 'orderTime',
        parser: z.coerce.number().min(1,{
            message: 'Deve tser maior que 1'
        }),
        placeholder: 'Tempo de Pedido',

        type: 'number',
        basis: 'basis-1/6'
    },
    {
        name: 'gallery',
        parser: z.instanceof(Object, {
            message: "Each item must be a valid file",
          }),
        placeholder: 'Imagens',

        type: 'file',
        fileTypes: {
            mimeType: ['image/jpeg', 'image/jpg', 'image/png'],
            extensionsType: ['jpeg', 'jpg', 'png']
        },
    },
    {
        name: 'documents',
        parser: z.instanceof(Object, {
            message: "Each item must be a valid file",
          }),
        placeholder: 'Manuais',

        type: 'file',
        fileTypes: {
            mimeType: ['application/pdf'],
            extensionsType: ['pdf']
        },
    },
]