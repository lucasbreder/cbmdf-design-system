import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ItemsTransferProviderProps } from "./ItemsTransferProvider";
import { CollectionProps } from "@/components/Collection/Collection";

type ItemsTransferContextProps = {
    transferData: ItemsTransferProviderProps
    setTransferData: Dispatch<SetStateAction<ItemsTransferProviderProps>>
    currentData: CollectionProps
    setCurrentData: Dispatch<SetStateAction<CollectionProps>>
}


const ItemsTransferContext = createContext<ItemsTransferContextProps>({
    transferData: { transferedItems: [] },
    setTransferData: () => { },
    currentData: { data: [] },
    setCurrentData: () => { },
})

export default ItemsTransferContext