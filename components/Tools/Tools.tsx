import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { ReactNode } from "react"

type Tools = {
    items?: ToolItem[]
    hasBackButton?: boolean
    children?: ReactNode | ReactNode[]
}

type ToolItem = {
    url: string
    icon: string
    color?: string
}

const Tools = ({items, hasBackButton, children}:Tools) => {
    return (
        <div className="flex gap-4 justify-between">
            <div className="flex gap-4">
                {hasBackButton && <Link href="/">
                                <FontAwesomeIcon size="lg" icon={['fas', 'arrow-left']} />
                            </Link>}
                {children && <div>{children}</div>}
            </div>
            <div className="flex gap-4">
            {items && items.map((item,index) => {
                return (
                    <div key={index} className={item.color}>
                        <Link href={item.url}>
                            <FontAwesomeIcon size="lg" icon={['fas', item.icon as IconName]} />
                        </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Tools