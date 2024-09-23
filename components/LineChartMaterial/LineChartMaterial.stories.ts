import { Meta, StoryObj } from "@storybook/react";
import LineChartMaterial from "./LineChartMaterial";


const meta = {
    title: 'Line Chart',
    tags: ['autodocs'],
    component: LineChartMaterial
} satisfies Meta<typeof LineChartMaterial>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        chartConfig: {
            balance: {
              label: "Balanço",
              color: "#2563eb",
            },
            idealBalance: {
              label: "Balanço Ideal",
              color: "#60a5fa",
            },
          },
          chartData: [
            { month: "Janeiro", balance: 300, idealBalance: 200 },
            { month: "Fevereiro", balance: 260, idealBalance: 150 },
            { month: "Março", balance: 237, idealBalance: 100 },
            { month: "Abril", balance: 73, idealBalance: 50 },
            { month: "Maio", balance: 209, idealBalance: [300] },
            { month: "Junho", balance: 214, idealBalance: 250 },
            { month: "Julho", balance: 150, idealBalance: 200 },
            { month: "Agosto", balance: 120, idealBalance: 150 },
            { month: "Setembro", balance: 100, idealBalance: 100 },
            { month: "Outubro", balance: 200, idealBalance: 50 },
            { month: "Novembro", balance: 150, idealBalance: 300 },
            { month: "Dezembro", balance: 100, idealBalance: 250 },
          ]
    },
};
