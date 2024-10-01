import { ReactNode } from "react"

type FooterProps = {
    children: ReactNode[] | ReactNode
}

const Footer = ({children}:FooterProps) => {
    return (
        <footer className="text-sm flex gap-5 justify-between py-6">
            {children}
        </footer>
    )
}

export default Footer