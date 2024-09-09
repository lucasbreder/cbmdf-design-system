import useTransferContext from "@/hook/useTransferContext"
import { useState } from "react"
import Place, { PlaceProps } from "../Place/Place"
import { deepCounter } from "@/helpers/deepCounter"
import ItemCard from "../ItemCard/ItemCard"
import useTransferData from "@/hook/useTransferData"



export type GroupProps = {
    onDrop?: () => any
    onDragStart?: () => any
} & PlaceProps

export type ItemProps = {
    title: string,
    quantity: number
    image?: string
    placeId?: number
    id: number
}

const Group = ({ id, items = [], title, groups, onDrop, onDragStart }: GroupProps) => {


    const [showListItems, setShowListItems] = useState(false)

    const transferContext = useTransferContext()
    const transfeData = useTransferData();

    let totalItems = deepCounter({ id, items, groups })




    return <div className={`${(!title || (showListItems && items.length > 0)) ? 'col-span-2' : 'col-span-1'} select-none transition-all duration-300`}>
        <div className={`flex items-center flex-col gap-2`}>
            <div className={`text-sm text-center transition-all duration-300 ${(showListItems && items.length > 0) && 'text-xl font-bold'}`}>{title}</div>
            <div
                draggable={items.length > 0 && true}
                onClick={() => {
                    setShowListItems(prev => !prev)
                }}
                onDragStart={e => {

                    transferContext.setTransferData({
                        transferedItems: items,
                        origin: id,
                    })
                    onDragStart && onDragStart()

                }}
                onDragOver={e => {
                    e.preventDefault()
                    e.currentTarget.classList.add("bg-highlight", "text-white")
                    e.currentTarget.classList.remove("bg-white")

                    transferContext?.setTransferData((prev) => {
                        return { ...prev, destiny: id }
                    })

                }}
                onDragLeave={e => {
                    e.preventDefault()
                    e.currentTarget.classList.remove("bg-highlight", "text-white")
                    e.currentTarget.classList.add(items.length > 0 ? 'bg-white' : 'bg-gray')

                    transferContext?.setTransferData((prev) => {
                        return { ...prev, destiny: 0 }
                    })
                }}
                onDragEnd={e => {
                    e.preventDefault()
                    transfeData.setTransferData({ transferData: [], direction: "origin" })

                }}
                onDrop={(e) => {
                    e.currentTarget.classList.remove("bg-highlight", "text-white")
                    e.currentTarget.classList.add("bg-white")
                    onDrop && onDrop()

                    transfeData.setTransferData({ transferData: transferContext.transferData.transferedItems, direction: "destiny" })
                }}
                className={`
                    border
                    text-center
                    ${items.length > 0 ? 'cursor-grab' : 'cursor-default'}
                    rounded-md
                    py-3
                    px-3
                    text-2xl    
                    font-bold
                    w-full
                    trasition
                    duration-300
                    hover:text-2xl
                    relative
                    ${showListItems && (items.length > 0 || groups) && 'border-b-8 border-primary'}
                    ${(items.length > 0 || groups) ? 'bg-white' : 'bg-gray'}
                    ${(items.length > 0 || groups) ? 'text-black' : 'text-gray-400'}
                    
            `}>{totalItems}</div>

            {(items.length > 0 || groups) && <div className={`grid ${showListItems ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} bg-zinc-100 rounded-md border-x-4 w-full transition-all duration-500`}>
                <div className="overflow-hidden">
                    <div className="mx-4 my-4">
                        {
                            items.map((item, index) => {
                                return <ItemCard id={item.id} key={index} placeId={id} title={item.title} quantity={item.quantity} image={item.image} />

                            })
                        }
                        {
                            groups && groups.map((place, index) => {
                                return <div key={index} className="mb-4">
                                    <Place id={place.id}
                                        items={place.items}
                                        groups={place.groups}
                                        title={place.title}
                                    />
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>}
        </div>
    </div >

}

export default Group

