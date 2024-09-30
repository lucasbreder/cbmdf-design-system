import { ReactNode } from "react"

type FooterProps = {
    children: ReactNode[] | ReactNode
}

const Footer = ({children}:FooterProps) => {
    return (
        <footer className="text-sm flex gap-5 justify-between">
            {children}
        </footer>
    )
}

export default Footer