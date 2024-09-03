
import { Meta, StoryObj } from "@storybook/react";
import PlacesGroup from "./PlacesGroup";




const meta = {
    title: 'Places Group',
    tags: ['autodocs'],
    component: PlacesGroup,

} satisfies Meta<typeof PlacesGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: [
            {
                id: 111,
                title: 'Depósito',
                items: [
                    { title: 'Material 1', quantity: 3 },
                    { title: 'Material 1', quantity: 5 },
                ],
                places: [
                    {
                        id: 1,
                        title: 'Prateleira 1',
                        places: [
                            {
                                id: 2222,
                                items: [
                                    { title: 'Material 1', quantity: 3 },
                                    { title: 'Material 1', quantity: 2 },
                                    { title: 'Material 1', quantity: 5 },
                                ],
                                title: 'Prateleira 1a',
                            },
                        ],
                        items: [
                            { title: 'Material 1', quantity: 3 },
                            { title: 'Material 1', quantity: 2 },
                            { title: 'Material 1', quantity: 5 },
                        ],

                    },
                    {
                        id: 2,
                        items: [
                            { title: 'Material 1', quantity: 3 },
                            { title: 'Material 1', quantity: 2 },
                            { title: 'Material 1', quantity: 5 },
                        ],
                        title: 'Prateleira 2',
                    },
                    {
                        id: 3,
                        items: [
                            { title: 'Material 1', quantity: 3 },
                            { title: 'Material 1', quantity: 2 },
                            { title: 'Material 1', quantity: 5 },
                            { title: 'Material 1', quantity: 5 },
                        ],
                        title: 'Prateleira 3',
                    },
                    {
                        id: 4,
                        items: [],
                        title: 'Prateleira 4',
                    },

                ]
            },
            {
                id: 111,
                title: 'Depósito',
                items: [
                    { title: 'Material 1', quantity: 3 },
                    { title: 'Material 1', quantity: 5 },
                ],
                places: [
                    {
                        id: 1,
                        title: 'Prateleira 1',
                        places: [
                            {
                                id: 2222,
                                items: [
                                    { title: 'Material 1', quantity: 3 },
                                    { title: 'Material 1', quantity: 2 },
                                    { title: 'Material 1', quantity: 5 },
                                ],
                                title: 'Prateleira 1a',
                            },
                        ],
                        items: [
                            { title: 'Material 1', quantity: 3 },
                            { title: 'Material 1', quantity: 2 },
                            { title: 'Material 1', quantity: 5 },
                        ],

                    },
                    {
                        id: 2,
                        items: [
                            { title: 'Material 1', quantity: 3 },
                            { title: 'Material 1', quantity: 2 },
                            { title: 'Material 1', quantity: 5 },
                        ],
                        title: 'Prateleira 2',
                    },
                    {
                        id: 3,
                        items: [
                            { title: 'Material 1', quantity: 3 },
                            { title: 'Material 1', quantity: 2 },
                            { title: 'Material 1', quantity: 5 },
                            { title: 'Material 1', quantity: 5 },
                        ],
                        title: 'Prateleira 3',
                    },
                    {
                        id: 4,
                        items: [],
                        title: 'Prateleira 4',
                    },

                ]
            }
        ]
    },
};
