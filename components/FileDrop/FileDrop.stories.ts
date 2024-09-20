import { Meta, StoryObj } from "@storybook/react";

import FileDrop from "./FileDrop";

const meta = {
    title: 'File Drop',
    tags: ['autodocs'],
    component: FileDrop,

} satisfies Meta<typeof FileDrop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        fileTypes: {
            mimeType: [
                "application/pdf",
                "image/jpeg",
                "image/jpg",
                "image/png",
                "text/plain"
            ],
            extensionsType: [
                ".pdf", ".jpg", ".jpeg", ".png", ".txt"
            ]
        },
        maxFileSize: 1024 ** 2.8,
        progressUpload: [
            {
                name: 'img20240722_15052253.png',
                progress: 27
            }
        ]
    }
}

