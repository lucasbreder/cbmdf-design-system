import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type InfoNumberProps = {
    number: number
    title: string
    icon: IconName
    variant?: "sm" | "base"
    orientation?: "vertical" | "horizontal"
}


const InfoNumber = ({ number, title, icon, variant = "base", orientation }: InfoNumberProps) => {

    const orientationDef = () => {
        switch (orientation) {
            case 'vertical':
                return 'flex-col items-start max-w-40'
            case 'horizontal':
                return 'flex-row items-center max-w-64'
            default:
                return ''
        }
    }


    const variantIconDef = () => {
        switch (variant) {
            case 'sm':
                return 'sm'
            case 'base':
                return 'xl'
        }
    }

    const variantTitleDef = () => {
        switch (variant) {
            case 'sm':
                return 'text-sm leading-4'
            case 'base':
                return 'text-base leading-5'
        }
    }

    const variantnumberDef = () => {
        switch (variant) {
            case 'sm':
                return 'text-xl'
            case 'base':
                return 'text-3xl'
        }
    }

    const numberFormated = new Intl.NumberFormat().format(number)


    return <div className={`flex text-primary gap-2 items-start ${orientationDef()}`}>
        <div className="flex gap-2 items-center justify-items-stretch">
            <FontAwesomeIcon icon={['fas', icon]} size={variantIconDef()} />
            <div className={`${variantTitleDef()} font-light`}>{title}</div>
        </div>
        <div className={`${variantnumberDef()} text- font-extrabold animate-fade-left-enter`}>{numberFormated}</div>
    </div>
}
export default InfoNumber