
import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { use, useState } from "react"

type SelectorProps = {
    iconsOptions: string[]
    className: string
}

const Selector = ({ iconsOptions, className }: SelectorProps) => {

    const [activedIconIndex, setActivedIconIndex] = useState(0)

    return (
        <div className={`
            rounded-md
            bg-gray 
            w-min
            overflow-hidden
            flex
            justify-between
        `}>
            {iconsOptions.map((icon, index) => {
                return <FontAwesomeIcon key={index} className={`${className} transition duration-300 cursor-pointer px-3 py-3 ${index === activedIconIndex && 'bg-primary'}`} icon={['fas', icon as IconName]} color="#fff" onClick={() => {
                    setActivedIconIndex(index)
                }} />
            })}

        </div>
    )
}

export default Selector