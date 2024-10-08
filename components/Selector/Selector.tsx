"use client";
import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);


type SelectorItem = {
    icon: IconName
    onClick: () => void

}

type SelectorProps = {
    iconsOptions: SelectorItem[]

}

const Selector = ({ iconsOptions }: SelectorProps) => {

    const [activedIconIndex, setActivedIconIndex] = useState(0)

    return (
        <div className={`
            rounded-md
            bg-gray 
         
            min-w-20
            max-h-10
            overflow-hidden
            flex
            justify-between
            relative
        `}>
            <div className="bg-primary absolute transition-all duration-300 ease-in-out z-10" style={{
                width: `calc(100%/${iconsOptions.length})`,
                left: `calc(100%/${iconsOptions.length}*${activedIconIndex})`,
                height: `100%`
            }}></div>
            {iconsOptions.map((item, index) => {
                return <FontAwesomeIcon key={index} className={
                    `
                    z-20
                    transition
                    duration-300
                    cursor-pointer
                    px-2 py-3`

                } icon={['fas', item.icon]} color="#fff" width={24} onClick={() => {
                    setActivedIconIndex(index)
                    item.onClick()
                }} />
            })}

        </div>
    )
}

export default Selector