import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ItemsTransferProviderProps } from "./ItemsTransferProvider";
import { PlacesGroupProps } from "@/components/PlacesGroup/PlacesGroup";

type ItemsTransferContextProps = {
    transferData: ItemsTransferProviderProps
    setTransferData: Dispatch<SetStateAction<ItemsTransferProviderProps>>
    currentData: PlacesGroupProps
    setCurrentData: Dispatch<SetStateAction<PlacesGroupProps>>
}


const ItemsTransferContext = createContext<ItemsTransferContextProps>({
    transferData: { transferedItems: [] },
    setTransferData: () => { },
    currentData: { data: [] },
    setCurrentData: () => { }
})

export default ItemsTransferContext