import { Label, Pie, PieChart } from "recharts"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { useMemo } from "react"


type PieChartMaterialProps = {
    chartConfig: ChartConfig
    chartData: any[]
    totalLabel?: string
    dataKey: string
    nameKey: string
  }

const PieChartMaterial = ({chartConfig, chartData, totalLabel, dataKey, nameKey}:PieChartMaterialProps) => {

    const total = useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr[dataKey], 0)
      }, [])

    return (
        <div>
            
            <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
           
          <PieChart>
          <ChartLegend content={<ChartLegendContent />} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey={dataKey}
              nameKey={nameKey}
              innerRadius={60}
              strokeWidth={5}
            >
              {totalLabel && <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {totalLabel}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />}
            </Pie>
          </PieChart>
        </ChartContainer>
        </div>
    )
}

export default PieChartMaterial