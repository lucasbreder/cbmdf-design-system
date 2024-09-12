
import { Meta, StoryObj } from "@storybook/react";

import ImagesGallery from "./ImagesGallery";

const meta = {
    title: 'Images Gallery',
    tags: ['autodocs'],
    component: ImagesGallery,

} satisfies Meta<typeof ImagesGallery>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        hasFeaturedImage: false,
        images: [
            {
                title: '',
                src: "https://picsum.photos/200"
            },
            {
                title: '',
                src: "https://picsum.photos/200"
            },
            {
                title: '',
                src: "https://picsum.photos/200"
            },
            {
                title: '',
                src: "https://picsum.photos/200"
            },
            {
                title: '',
                src: "https://picsum.photos/200"
            },
            {
                title: '',
                src: "https://picsum.photos/200"
            },
            {
                title: '',
                src: "https://picsum.photos/200"
            }
        ]

    }
};

