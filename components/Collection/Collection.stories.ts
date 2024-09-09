
import { Meta, StoryObj } from "@storybook/react";

import Collection from "./Collection";

const meta = {
    title: 'Collection Places',
    tags: ['autodocs'],
    component: Collection,

} satisfies Meta<typeof Collection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: [
            {
                "id": 101,
                "title": "Armazém de Equipamentos de Bombeiro",
                "items": [
                    { "title": "Mangueira de Incêndio 3 polegadas", "quantity": 7, "image": "https://picsum.photos/200", "placeId": 101, id: 1011 },
                    { "title": "Esguicho Regulável", "quantity": 4, "image": "https://picsum.photos/200", "placeId": 101, id: 1012 }
                ],
                "groups": [
                    {
                        "id": 102,
                        "title": "Armário de EPIs",
                        "items": [
                            { "title": "Capacete de Bombeiro", "quantity": 2, "image": "https://picsum.photos/200", "placeId": 102, id: 1021 },
                            { "title": "Luvas de Proteção", "quantity": 3, "image": "https://picsum.photos/200", "placeId": 102, id: 1022 },
                        ],
                        "groups": [
                            {
                                "id": 103,
                                "title": "Compartimento de Botas",
                                "items": [
                                    { "title": "Botas de Combate a Incêndio", "quantity": 5, "image": "https://picsum.photos/200", "placeId": 103, id: 1031 },
                                    { "title": "Botas de Resgate", "quantity": 3, "image": "https://picsum.photos/200", "placeId": 103, id: 1032 },
                                ],
                                "groups": [
                                    {
                                        "id": 104,
                                        "title": "Caixa de Palmilhas",
                                        "items": [
                                            { "title": "Palmilhas para Botas", "quantity": 6, "image": "https://picsum.photos/200", "placeId": 104, id: 1041 },
                                        ]
                                    },
                                    {
                                        "id": 105,
                                        "title": "Organizador de Cadarços",
                                        "items": [
                                            { "title": "Cadarços Extras", "quantity": 8, "image": "https://picsum.photos/200", "placeId": 105, id: 1051 },
                                        ],
                                        "groups": [
                                            {
                                                "id": 106,
                                                "title": "Saco para Cadarços Usados",
                                                "items": [
                                                    { "title": "Cadarços Usados", "quantity": 3, "image": "https://picsum.photos/200", "placeId": 106, id: 1061 },
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 107,
                        "title": "Suporte de Extintores",
                        "items": [
                            { "title": "Extintor de Pó Químico 10kg", "quantity": 6, "image": "https://picsum.photos/200", "placeId": 107, id: 1071 },
                            { "title": "Extintor de CO2 5kg", "quantity": 4, "image": "https://picsum.photos/200", "placeId": 107, id: 1072 },
                            { "title": "Extintor de Água 10L", "quantity": 2, "image": "https://picsum.photos/200", "placeId": 107, id: 1073 },
                        ]
                    },
                    {
                        "id": 108,
                        "title": "Kit de Ferramentas de Arrombamento",
                        "items": [
                            { "title": "Machado de Bombeiro", "quantity": 4, "image": "https://picsum.photos/200", "placeId": 108, id: 1081 },
                            { "title": "Pé de Cabra", "quantity": 3, "image": "https://picsum.photos/200", "placeId": 108, id: 1082 },
                            { "title": "Motosserra", "quantity": 2, "image": "https://picsum.photos/200", "placeId": 108, id: 1083 },
                            { "title": "Alavanca", "quantity": 3, "image": "https://picsum.photos/200", "placeId": 108, id: 1084 },
                        ]
                    },
                    {
                        "id": 109,
                        "title": "Espaço Reservado para Novos Equipamentos",
                        "items": []
                    }
                ]
            },
            {
                "id": 201,
                "title": "Armazém de Equipamentos de Bombeiro",
                "items": [
                    { "title": "Mangueira de Incêndio 3 polegadas", "quantity": 7, "image": "https://picsum.photos/200", "placeId": 201, id: 2011 },
                    { "title": "Esguicho Regulável", "quantity": 4, "image": "https://picsum.photos/200", "placeId": 201, id: 2012 },
                ],
                "groups": [
                    {
                        "id": 202,
                        "title": "Armário de EPIs",
                        "items": [
                            { "title": "Capacete de Bombeiro", "quantity": 2, "image": "https://picsum.photos/200", "placeId": 202, id: 2021 },
                            { "title": "Luvas de Proteção", "quantity": 3, "image": "https://picsum.photos/200", "placeId": 202, id: 2022 },
                        ],
                        "groups": [
                            {
                                "id": 203,
                                "title": "Compartimento de Botas",
                                "items": [
                                    { "title": "Botas de Combate a Incêndio", "quantity": 5, "image": "https://picsum.photos/200", "placeId": 203, id: 2031 },
                                    { "title": "Botas de Resgate", "quantity": 3, "image": "https://picsum.photos/200", "placeId": 203, id: 2032 },
                                ],
                                "groups": [
                                    {
                                        "id": 204,
                                        "title": "Caixa de Palmilhas",
                                        "items": [
                                            { "title": "Palmilhas para Botas", "quantity": 6, "image": "https://picsum.photos/200", "placeId": 204, id: 2041 },
                                        ]
                                    },
                                    {
                                        "id": 205,
                                        "title": "Organizador de Cadarços",
                                        "items": [
                                            { "title": "Cadarços Extras", "quantity": 8, "image": "https://picsum.photos/200", "placeId": 204, id: 2041 },
                                        ],
                                        "groups": [
                                            {
                                                "id": 206,
                                                "title": "Saco para Cadarços Usados",
                                                "items": [
                                                    { "title": "Cadarços Usados", "quantity": 3, "image": "https://picsum.photos/200", "placeId": 206, id: 2061 },
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 207,
                        "title": "Suporte de Extintores",
                        "items": [
                            { "title": "Extintor de Pó Químico 10kg", "quantity": 6, "image": "https://picsum.photos/200", "placeId": 207, id: 2071 },
                            { "title": "Extintor de CO2 5kg", "quantity": 4, "image": "https://picsum.photos/200", "placeId": 207, id: 2072 },
                            { "title": "Extintor de Água 10L", "quantity": 2, "image": "https://picsum.photos/200", "placeId": 207, id: 2073 },
                        ]
                    },
                    {
                        "id": 208,
                        "title": "Kit de Ferramentas de Arrombamento",
                        "items": [
                            { "title": "Machado de Bombeiro", "quantity": 4, "image": "https://picsum.photos/200", "placeId": 208, id: 2081 },
                            { "title": "Pé de Cabra", "quantity": 3, "image": "https://picsum.photos/200", "placeId": 208, id: 2082 },
                            { "title": "Motosserra", "quantity": 2, "image": "https://picsum.photos/200", "placeId": 208, id: 2083 },
                            { "title": "Alavanca", "quantity": 3, "image": "https://picsum.photos/200", "placeId": 208, id: 2084 },
                        ]
                    },
                    {
                        "id": 209,
                        "title": "Espaço Reservado para Novos Equipamentos",
                        "items": []
                    }
                ]
            }
        ]

    }
};

