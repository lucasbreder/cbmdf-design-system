import { useEffect, useState } from "react"
import ItemsCounter, { ItemProps, ItemsCounterProps } from "../ItemsCounter/ItemsCounter"
import ItemsTransferProvider from "@/context/ItemsTransferProvider"
import useTransferContext from "@/hook/useTransferContext"


export type PlaceProps = {
    id: number
    title: string
    places?: ItemsCounterProps[]
    items?: ItemProps[]
}

const Place = ({ id, title, places, items }: PlaceProps) => {

    const [totalItemsSet, setTotalItemsSet] = useState(0)

    useEffect(() => {

        let totalItems = 0

        places && places.forEach((item) => {
            item.items.forEach((itemGroup) => {
                totalItems += itemGroup.quantity
            })
        })
        items && items.forEach((item) => {
            totalItems += item.quantity
        })


        setTotalItemsSet(totalItems)
    }, [places])

    return <div className="w-full">
        <div className="flex items-center gap-2 justify-between mb-3">
            <div className="font-bold">{title}</div>
            <div className="text-2xl font-bold">{totalItemsSet}</div>
        </div>
        <div className="grid grid-cols-2 gap-4 border-x-2 border-y-2 border-dashed rounded-md px-4 py-4">
            {items && <ItemsCounter
                id={id}
                items={items}
            />}
            {places && places.map((item, index) => {
                return <ItemsCounter
                    key={index}
                    id={item.id}
                    title={item.title}
                    items={item.items}
                    onDragStart={item.onDragStart}
                    onDrop={item.onDrop}
                    places={item.places}
                />
            })}
        </div>
    </div>

}
export default Place