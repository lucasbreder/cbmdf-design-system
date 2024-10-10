"use client"
import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type InfoNumberProps = {
    number: number
    title: string
    icon: IconName
    variant?: "sm" | "base"
    orientation?: "vertical" | "horizontal"
    position?: "default" | "reverse"
    prefix?: string
    sufix?:string
}


const InfoNumber = ({ number, title, icon, variant = "base", orientation, position, prefix, sufix }: InfoNumberProps) => {

    const orientationDef = () => {
        switch (orientation) {
            case 'vertical':
                return `flex-col items-start max-w-40 items-start ${position === "reverse" && "flex-col-reverse gap-1"}`
            case 'horizontal':
                return `flex-row items-center max-w-64 items-center ${position === "reverse" && "flex-row-reverse"}`
            default:
                return 'gap-2'
        }
    }


    const variantIconDef = () => {
        switch (variant) {
            case 'sm':
                return 'sm'
            case 'base':
                return 'lg'
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
                return 'text-lg'
            case 'base':
                return 'text-3xl'
        }
    }

    const numberFormated = new Intl.NumberFormat().format(number)


    return <div className={`flex ${orientationDef()}`}>
        <div className="flex gap-2 items-center">
            {position !== "reverse" && <FontAwesomeIcon icon={['fas', icon]} width={20} size={variantIconDef()} />}
            <div className={`${variantTitleDef()} font-light`}>{title}</div>
        </div>
        <div className={`${variantnumberDef()} font-bold flex items-center justify-start gap-2`}>
            {position === "reverse" && <FontAwesomeIcon icon={['fas', icon]} width={20} size={variantIconDef()} />}
            {prefix} {numberFormated} {sufix}
        </div>
    </div>
}
export default InfoNumber