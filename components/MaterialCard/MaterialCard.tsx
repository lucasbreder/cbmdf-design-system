import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { iconByKey } from "@/helpers/iconByKey"

type MaterialCardProps = {
    id: number
    title: string
    image?: string
    categories?: ItemCategory[]
    quantity?: number
    patrimonyNumber?: number
    info?: any
    showCategories?: boolean
}

type ItemCategory = {
    title: string
}


const MaterialCard = (({ id, title, image, categories, quantity, info = {}, showCategories, patrimonyNumber }: MaterialCardProps) => {

    info['patrimonio'] = patrimonyNumber
    info['quantidade'] = quantity

    return (
        <div className="flex gap-5 text-primary max-w-xl">
            {image && <div className="relative basis-2/3 rounded-xl overflow-hidden bg-white h-32">
                <Image className="object-contain p-2" src={image} alt={title} fill />
            </div>}
            <div className="basis-1/3">
                <div className="text-xs mb-1">#{id}</div>
                <div className="text-xl font-bold leading-6">{title}</div>
                {showCategories && <div className="flex flex-wrap gap-2 my-2 items-start h-14 overflow-y-auto relative snap-end">
                    {categories && categories.map(category => {
                        return <Badge className="border-primary text-primary px-3 text-xs rounded-2xl" variant='outline'>{category.title}</Badge>
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