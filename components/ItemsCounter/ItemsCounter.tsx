import useTransferContext from "@/hook/useTransferContext"
import { useEffect, useState } from "react"
import { PlaceProps } from "../Place/Place"

export type ItemsCounterProps = {
    id: number
    items: ItemProps[]
    places?: PlaceProps[]
    title?: string
    onDrop?: () => any
    onDragStart?: () => any
}

export type ItemProps = {
    title: string
    quantity: number
    thumb?: string
}

const ItemsCounter = ({ id, items, title, places, onDrop, onDragStart }: ItemsCounterProps) => {

    const [totalItens, setTotalItens] = useState(0)
    const [itemsState, setItemsState] = useState(items)
    const [showLIstItems, setShowListItems] = useState(false)

    const transferContext = useTransferContext()

    useEffect(() => {
        let totalItems = 0
        places && places.forEach((item) => {
            item.items && item.items.forEach((itemGroup) => {
                totalItems += itemGroup.quantity
            })
        })
        itemsState.forEach((item) => {
            totalItems += item.quantity
        })
        setTotalItens(totalItems)
    }, [itemsState])

    return <div className={`${!title && 'col-span-2'} select-none`}>
        <div className={`flex items-center flex-col gap-2`}>

            {title && <div className={`text-sm`}>{title}</div>}
            <div
                draggable={itemsState.length > 0 && true}
                onDragStart={e => {
                    onDragStart && onDragStart()
                    transferContext && transferContext.setTransferData({
                        transferedItems: itemsState,
                        origin: id
                    })
                }}
                onDragOver={e => {
                    e.preventDefault()
                    e.currentTarget.classList.add("bg-highlight", "text-white")
                    e.currentTarget.classList.remove("bg-white")

                }}
                onDragLeave={e => {
                    e.preventDefault()
                    e.currentTarget.classList.remove("bg-highlight", "text-white")
                    e.currentTarget.classList.add(itemsState.length > 0 ? 'bg-white' : 'bg-gray')
                }}
                onDragEnd={e => {
                    e.preventDefault()
                    if (id === transferContext.transferData?.origin
                        && transferContext.transferData?.destiny
                        && transferContext.transferData?.destiny !== transferContext.transferData?.origin) {
                    }
                }}
                onDrop={e => {
                    e.currentTarget.classList.remove("bg-highlight", "text-white")
                    e.currentTarget.classList.add("bg-white")
                    onDrop && onDrop()

                    transferContext && transferContext.setTransferData(prev => {
                        return { ...prev, destiny: id }
                    })

                    if (id !== transferContext.transferData?.origin) {
                        transferContext && setItemsState([...itemsState, ...transferContext.transferData.transferedItems])
                    }

                }}
                onClick={() => {
                    setShowListItems(prev => !prev)
                }}
                className={`
                    border
                    text-center
                    ${itemsState.length > 0 ? 'cursor-grab' : 'cursor-default'}
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
                    ${itemsState.length > 0 ? 'bg-white' : 'bg-gray'}
                    ${itemsState.length > 0 ? 'text-black' : 'text-gray-400'}
                    
            `}>{totalItens}</div>
            {/* {
                places && places.map((place) => {
                    return <Place id={place.id} items={place.items} places={place.places} title={place.title} />
                })
            } */}
            {
                itemsState.map((item) => {
                    return <div>
                        <div className={`flex w-full overflow-hidden ${showLIstItems ? 'max-h-52' : 'max-h-0'}`}>
                            <div>{item.title} - </div>
                            <div> {item.quantity}</div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>

}

export default ItemsCounter

