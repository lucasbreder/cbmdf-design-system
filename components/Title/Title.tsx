import { ReactNode } from "react"

type TitleProps = {
    title: string
    subtitle?: string
    subtitlePosition?: 'before' | 'after'
}

const Title = ({title, subtitle, subtitlePosition}:TitleProps) => {
    return (
        <div className={`flex flex-col ${subtitlePosition === 'before' && `flex-col-reverse`}`}>
            <h2 className="text-3xl font-bold leading-none">{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}

export default Title