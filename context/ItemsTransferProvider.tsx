import { ReactNode, useState } from "react"
import ItemsTransferContext from "./ItemsTransferContext"
import { ItemProps } from "@/components/ItemsCounter/ItemsCounter"
import { PlaceProps } from "@/components/Place/Place"
import { PlacesGroupProps } from "@/components/PlacesGroup/PlacesGroup"

type ItemsTransferProvider = {
    children: ReactNode[] | ReactNode
}

export type ItemsTransferProviderProps = {
    origin?: number
    destiny?: number
    place?: number
    transferedItems: ItemProps[]
}




const ItemsTransferProvider = ({ children }: ItemsTransferProvider) => {

    const [transferData, setTransferData] = useState<ItemsTransferProviderProps>({
        transferedItems: []
    })
    const [currentData, setCurrentData] = useState<PlacesGroupProps>({ data: [] })

    return <ItemsTransferContext.Provider value={{ transferData, setTransferData, currentData, setCurrentData }}>
        {children}
    </ItemsTransferContext.Provider>
}

export default ItemsTransferProvider