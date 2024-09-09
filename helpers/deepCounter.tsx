import { PlaceProps } from "@/components/Place/Place";
import { itemsCounter } from "./itemsCounter";



export const deepCounter = (place: PlaceProps) => {
    let totalItems = 0;

    if (place.items) {
        totalItems += itemsCounter(place.items)
    }
    if (place.groups) {
        place.groups.forEach((item) => {
            totalItems += deepCounter(item);
        });
    }

    return totalItems;

};
