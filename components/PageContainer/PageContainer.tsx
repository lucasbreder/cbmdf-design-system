import { ReactNode } from "react"

type PageContainerProps = {
    children: ReactNode[] | ReactNode
}

const PageContainer = ({children}:PageContainerProps) => {
    return (
        <section className="flex flex-wrap bg-slate-100 rounded-md py-8 px-12 gap-8">
            {children}
        </section>
    )
}

export default PageContainer