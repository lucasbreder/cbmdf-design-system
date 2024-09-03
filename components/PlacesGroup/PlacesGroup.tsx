
import ItemsTransferProvider from "@/context/ItemsTransferProvider"
import Place, { PlaceProps } from "../Place/Place"
import useTransferContext from "@/hook/useTransferContext"
import { useEffect } from "react"

export type PlacesGroupProps = {
    data: PlaceProps[]
}

const PlacesGroup = ({ data }: PlacesGroupProps) => {
    return <ItemsTransferProvider>
        <PlacesGroupInner data={data} />
    </ItemsTransferProvider>
}

const PlacesGroupInner = ({ data }: PlacesGroupProps) => {

    const transferContext = useTransferContext()

    useEffect(() => {
        transferContext.setCurrentData({ data })
    }, [])

    return (

        <div className="grid grid-cols-2 gap-2">
            {transferContext.currentData.data.map((place) => {
                return <Place
                    id={place.id}
                    items={place.items}
                    places={place.places}
                    title={place.title}
                />
            })}
        </div>
    )
}

export default PlacesGroup