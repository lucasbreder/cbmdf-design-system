import { ReactNode } from "react"

type TitleProps = {
    title: string
    subtitle?: string
    subtitlePosition?: 'before' | 'after'
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title = ({title, subtitle, subtitlePosition, type}:TitleProps) => {

    const titleReturn = () => {
        switch (type) {
            case 'h1':
                return <h1 className="text-4xl font-bold leading-none">{title}</h1>
            case 'h3':
                return <h3 className="text-2xl font-bold leading-none">{title}</h3>

            case 'h4':
                return <h4 className="text-xl font-bold leading-none">{title}</h4>

            case 'h5':
                return <h5 className="text-lg font-bold leading-none">{title}</h5>

            case 'h6':
                return <h6 className="text-sm font-bold leading-none">{title}</h6>
        
            default:
                return <h2 className="text-3xl font-bold leading-none">{title}</h2>
        }
    }

    return (
        <div className={`flex flex-col ${subtitlePosition === 'before' && `flex-col-reverse`}`}>
            {titleReturn()}
            <p>{subtitle}</p>
        </div>
    )
}

export default Title