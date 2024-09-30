import { ReactNode } from "react"

type AsideProps = {
    children: ReactNode[] | ReactNode
}

const Aside = ({children}:AsideProps) => {
    return (
        <aside className="flex flex-col gap-7">
            {children}
        </aside>
    )
}

export default Aside