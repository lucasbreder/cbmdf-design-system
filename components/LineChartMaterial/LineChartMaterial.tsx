
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Dot, Line, LineChart, XAxis, YAxis } from "recharts"


type LineChartMaterial = {
  chartConfig: ChartConfig
  chartData: any[]
  dataKey: string
}

const LineChartMaterial = ({chartConfig, chartData, dataKey}:LineChartMaterial) => {

    return (
        <div>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
              <LineChart accessibilityLayer data={chartData} >
                <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                <ChartLegend verticalAlign="top" radius={130} content={<ChartLegendContent />} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <YAxis
                      dataKey={dataKey}
                      tickLine={false}
                      axisLine={false}
                      tickMargin={20}
                      tickFormatter={(value) => {
                        return value
                      }}
                    />
                <XAxis
                      dataKey="month"         
                      tickLine={false}
                      axisLine={false}
                      tickMargin={20}
                      tickFormatter={(value) => {
                        return value
                      }}
                    />
                    <Line dataKey="balance" fill="var(--color-desktop)" stroke="rgb(var(--highlight))" strokeWidth={2} radius={4} 
                    dot={({ payload, ...props }) => {
                      return (
                        <Dot
                          key={payload.browser}
                          r={4}
                          cx={props.cx}
                          cy={props.cy}
                          fill='rgba(var(--highlight),0.8)'
                          stroke='rgba(var(--highlight))'
                        />
                      )
                    }} />
                    <Line dataKey="idealBalance" fill="var(--color-mobile)" stroke="rgb(var(--accept))" strokeWidth={2} radius={4}
                    dot={({ payload, ...props }) => {
                      return (
                        <Dot
                          key={payload.browser}
                          r={4}
                          cx={props.cx}
                          cy={props.cy}
                          fill='rgba(var(--accept),0.8)'
                          stroke='rgba(var(--accept))'
                        />
                      )
                    }}
                    />
              </LineChart>
            </ChartContainer>
        </div>
    )
}

export default LineChartMaterial
