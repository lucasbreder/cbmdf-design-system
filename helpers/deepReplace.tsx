import { ItemProps } from "@/components/Group/Group";
import { PlaceProps } from "@/components/Place/Place";

export const deepReplace = (place: PlaceProps, targetId: number, value: ItemProps[]) => {

    if (place.groups) {
        place.groups.map((group) => {
            deepReplace(group, targetId, value)
        })
    };

    if (place.id === targetId && place.items) {
        if (value.length > 0) {
            place.items = [...place.items, ...value];
            place.items.forEach((item) => {
                item.placeId === targetId
            })
        } else {
            place.items = [];
        }

        return place
    };
    return place
};