import { ItemProps } from "@/components/Group/Group";
import { PlaceProps } from "@/components/Place/Place";

export const deepRemoveItem = (place: PlaceProps, targetId: number, item: ItemProps) => {

    if (place.groups) {
        place.groups.map((group) => {
            deepRemoveItem(group, targetId, item)
        })
    };

    if (place.id === targetId && place.items) {
        const index = place.items.findIndex(findItem => item.id === findItem.id)
        if (index != -1) {
            place.items.splice(index, 1)
        }
        console.log(place)

        return place
    };
    return place
};