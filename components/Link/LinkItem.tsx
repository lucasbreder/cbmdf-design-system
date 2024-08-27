import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

type LinkProps = {
    title: string
    href: string
    icon?: IconName
    iconPosition?: 'before' | 'after'
} & React.LinkHTMLAttributes<HTMLLinkElement>


const LinkItem = ({ title, href, icon, iconPosition = 'after' }: LinkProps) => {
    return <Link className={`
    flex
    gap-2
    items-center
    w-min
    text-primary
    font-bold
    ${iconPosition === 'before' && `flex-row-reverse`}`
    } href={href}>
        {title}
        {icon && <FontAwesomeIcon className="text-primary" icon={["fas", icon]} />}
    </Link>
}

export default LinkItem