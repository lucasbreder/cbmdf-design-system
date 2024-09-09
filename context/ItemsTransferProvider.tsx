import { ReactNode, useState } from "react"
import ItemsTransferContext from "./ItemsTransferContext"
import { ItemProps } from "@/components/Group/Group"
import { CollectionProps } from "@/components/Collection/Collection"

type ItemsTransferProvider = {
    children: ReactNode[] | ReactNode
}

export type ItemsTransferProviderProps = {
    origin?: number
    destiny?: number
    transferedItems: ItemProps[]
}




const ItemsTransferProvider = ({ children }: ItemsTransferProvider) => {

    const [transferData, setTransferData] = useState<ItemsTransferProviderProps>({
        transferedItems: []
    })

    const [currentData, setCurrentData] = useState<CollectionProps>({
        data: []
    })

    return <ItemsTransferContext.Provider value={{ transferData, setTransferData, currentData, setCurrentData }}>
        {children}
    </ItemsTransferContext.Provider>
}

export default ItemsTransferProvider