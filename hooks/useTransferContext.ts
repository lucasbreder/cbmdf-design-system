import ItemsTransferContext from "@/context/ItemsTransferContext"
import { useContext } from "react"

const useTransferContext = () => {

    const transferContext = useContext(ItemsTransferContext)

    return transferContext
}

export default useTransferContext