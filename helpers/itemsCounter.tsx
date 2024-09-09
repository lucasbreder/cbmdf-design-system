import { ItemProps } from "@/components/Group/Group";




export const itemsCounter = (items: ItemProps[]) => {
    let totalItems = 0;

    items.forEach((item) => {
        totalItems += item.quantity;
    });

    return totalItems;

};
