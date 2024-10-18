import { deepCounter } from "@/helpers/deepCounter"
import Group, { GroupProps, ItemProps } from "../Group/Group"

export type PlaceProps = {
    id: number
    title?: string
    groups?: GroupProps[]
    items?: ItemProps[]
}


export const Place = ({ id, title, groups, items }: PlaceProps) => {

    let totalItems = deepCounter({ id, items, groups })


    return <div className="">
        <div className="flex items-center gap-2 justify-between mb-3 ">
            <div className="font-bold">{title}</div>
            <div className="text-2xl font-bold">{totalItems}</div>
        </div>
        <div className="grid grid-cols-subgrid gap-4 border-x-2 border-y-2 border-dashed rounded-md px-4 py-4">
            {items && <Group
                id={id}
                items={items}
            />}
            {groups && groups.map((item, index) => {
                return <Group
                    key={index}
                    {...item}
                />
            })}
        </div>
    </div>
}
export default Place