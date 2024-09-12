import useTransferContext from "@/hook/useTransferContext"
import useTransferData from "@/hook/useTransferData"
import Image from "next/image"

type ItemCardProps = {
    id: number
    placeId: number
    title: string
    image?: string
    quantity: number
}


const ItemCard = (item: ItemCardProps) => {

    const transferContext = useTransferContext()
    const transfeData = useTransferData();

    return (

        <div draggable
            onDragStart={e => {

                transferContext.setTransferData({
                    transferedItems: [item],
                    origin: item.placeId,
                })

            }}
            onDragEnd={e => {
                e.preventDefault()
                transfeData.setTransferData({ transferData: item, direction: "origin" })
            }}
            className="flex flex-wrap items-center w-full rounded-md shadow-sm py-4 px-6 my-2 bg-white justify-end">
            <div className="flex gap-x-4 gap-y-2 items-center basis-10/12 ">
                <div className="w-16 h-16 relative rounded-full overflow-hidden ">{
                    item.image && <Image className="object-cover object-center basis-1/3 " src={item.image} alt={item.title} fill />}
                </div>
                <div className="text-sm basis-2/3">{item.title}</div>
            </div>
            <div className="text-2xl font-bold text-right basis-2/12 ">{item.quantity}</div>
        </div>
    )
}

export default ItemCard