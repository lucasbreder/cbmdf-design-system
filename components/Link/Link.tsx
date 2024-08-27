"use client"
import { useState } from "react"

type LinkProps = {
    title: string
    href: string
} & React.LinkHTMLAttributes<HTMLLinkElement>


const Link = ({ title, href }: LinkProps) => {

    const [state1, setState1] = useState("teste")

    return <>
        <div onClick={() => { setState1("novo estado") }}>Mudar</div>
        <div>{state1}</div>
        {/* <a className={`
        font-bold
        text-blue-300
        `} href={href}>{state1}</a> */}
    </>
}

export default Link