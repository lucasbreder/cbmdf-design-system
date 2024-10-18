import ItemsTransferProvider from "@/context/ItemsTransferProvider"
import Place, { PlaceProps } from "../Place/Place"
import useTransferContext from "@/hooks/useTransferContext"
import { useEffect } from "react"

export type CollectionProps = {
    data: PlaceProps[]
}

const Collection = ({ data }: CollectionProps) => {
    return (
        <ItemsTransferProvider>
            <CollectionInner data={data} />
        </ItemsTransferProvider>
    )
}


const CollectionInner = ({ data }: CollectionProps) => {

    const transferContext = useTransferContext()

    useEffect(() => {

        transferContext.setCurrentData({ data })

    }, [])

    return <div className="grid grid-cols-2 gap-4">
        {transferContext.currentData.data.map((place, index) => {
            return <Place key={index} {...place} />
        })}
    </div>
}

export default Collection