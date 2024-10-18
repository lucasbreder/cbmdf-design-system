import useTransferContext from "./useTransferContext";
import { deepReplace } from "@/helpers/deepReplace";
import { ItemProps } from "@/components/Group/Group";
import { deepRemoveItem } from "@/helpers/deepRemoveItem";

type useTransferData = {
    transferData: ItemProps[] | ItemProps
    direction: 'origin' | 'destiny'
}

const useTransferData = () => {

    const transferContext = useTransferContext()

    const setTransferData = ({ transferData, direction }: useTransferData) => {
        if (
            transferData &&
            (transferContext.transferData.origin && transferContext.transferData.destiny)
            && (transferContext.transferData.destiny !== transferContext.transferData.origin)) {

            const newData = transferContext.currentData.data

            if (Array.isArray(transferData)) {
                newData.forEach((item) => {
                    deepReplace(item, transferContext.transferData[direction]!, [...transferData])
                })
            } else {
                newData.forEach((item) => {
                    deepRemoveItem(item, transferContext.transferData.origin!, transferData)
                })
            }

            transferContext.setCurrentData({ data: newData })
        }
    }

    return { setTransferData }

}

export default useTransferData