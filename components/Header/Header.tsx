import { ReactNode } from "react"

type HeaderProps = {
    children: ReactNode[] | ReactNode
}

const Header = ({children}:HeaderProps) => {
    return (
        <header className="flex gap-5 justify-between items-center w-full">
            {children}
        </header>
    )
}

export default Header