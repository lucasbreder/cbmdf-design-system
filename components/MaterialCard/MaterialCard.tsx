import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { iconByKey } from "@/helpers/iconByKey"
import Link from "next/link"

type MaterialCardProps = {
    id: number
    name: string
    thumbnail?: string
    categories?: string[]
    quantity?: number
    patrimonyNumber?: number
    info?: any
    showCategories?: boolean
    url?: string
}


const MaterialCard = (({ id, name, thumbnail, categories, quantity, info = {}, showCategories, patrimonyNumber,url }: MaterialCardProps) => {

    info['patrimonio'] = patrimonyNumber
    info['quantidade'] = quantity

    return (
        <div className="flex gap-5 text-primary max-w-xl">
            {thumbnail && <div className="relative basis-2/3 rounded-xl overflow-hidden bg-white h-32">
                {url ? <Link href={url}><Image className="object-contain p-2" src={thumbnail} alt={name} fill /></Link> : 
                <Image className="object-contain p-2" src={thumbnail} alt={name} fill />}
            </div>}
            <div className="basis-1/3">
                <div className="text-xs mb-1">#{id}</div>
                <div className="text-xl font-bold leading-6">
                    {url ? <Link href={url}>{name}</Link> : name}
                </div>
                {showCategories && <div className="flex flex-wrap gap-2 my-2 items-start h-14 overflow-y-auto relative snap-end">
                    {categories && categories.map(category => {
                        return <Badge className="border-primary text-primary px-3 text-xs rounded-2xl" variant='outline'>{category}</Badge>
                    })}
                </div>}
                {Object.keys(info).length > 0 && <div className="mt-5 flex flex-col font-light gap-0">

                    {Object.keys(info).map((item: any) => {
                        if (info[item]) {
                            return <div className="flex gap-2 justify-between items-center">
                                <div className="flex items-center gap-1 text-sm">{iconByKey(item)} {item}</div>
                                <div className="text-base font-extrabold">{info[item]}</div>
                            </div>
                        }
                    })
                    }</div>}
            </div>
        </div>
    )
})

export default MaterialCard