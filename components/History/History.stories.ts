
import { Meta, StoryObj } from "@storybook/react";

import ImagesGallery from "./History";

const meta = {
    title: 'History',
    tags: ['autodocs'],
    component: ImagesGallery,

} satisfies Meta<typeof ImagesGallery>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Título',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum hendrerit mollis. In ac sem eros. Nulla dictum pretium magna, nec bibendum massa sollicitudin sed. Mauris eu est mi.',
        author: 'Sgt Cautela',
        date: new Date('2024-10-1')
    }
};

