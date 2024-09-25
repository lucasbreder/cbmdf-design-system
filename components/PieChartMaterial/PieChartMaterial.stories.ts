import { Meta, StoryObj } from "@storybook/react";
import PieChartMaterial from "./PieChartMaterial";


const meta = {
    title: 'Pie Chart',
    tags: ['autodocs'],
    component: PieChartMaterial
} satisfies Meta<typeof PieChartMaterial>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      totalLabel: 'Itens',
      dataKey: 'itens',
      nameKey: 'place',
        chartConfig: {
          Locais: {
            label: "Locais",
          },
          deposito: {
            label: "Depósito",
            color: "hsl(var(--chart-1))",
          },
          sala: {
            label: "Sala",
            color: "hsl(var(--chart-2))",
          },
          abt: {
            label: "ABT",
            color: "hsl(var(--chart-3))",
          },
          ase360: {
            label: "ASE",
            color: "hsl(var(--chart-4))",
          },
          armario: {
            label: "Armário",
            color: "hsl(var(--chart-5))",
          },
        },
          chartData: [
            { place: "deposito", itens: 275, fill: "var(--color-deposito)" },
            { place: "abt", itens: 200, fill: "var(--color-abt)" },
            { place: "sala", itens: 287, fill: "var(--color-sala)" },
            { place: "ase360", itens: 173, fill: "var(--color-ase360)" },
            { place: "armario", itens: 190, fill: "var(--color-armario)" },
          ]
    },
};
