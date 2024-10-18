import { Card, CardDescription, CardTitle } from "../ui/card"

type CardContainerProps = {
    title: string
    description: string
}

const CardContainer = ({title, description}:CardContainerProps) => {
    return (
        <Card className="p-5 shadow-md shadow-slate-200 rounded-xl">
            <CardTitle className="text-sm">{title}</CardTitle>
            <CardDescription className="text-black text-base">{description}</CardDescription>
        </Card>
    )
}
export default CardContainer