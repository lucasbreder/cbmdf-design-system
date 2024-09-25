import Moment from "react-moment"
import MaterialCheck, { MaterialCheckProps } from "../MaterialCheck/MaterialCheck"
import { useEffect, useState } from "react"
import { isDatesEqual } from "@/helpers/isDatesEqual"

type CalendarMaterialCheckProps = {
    date: Date
    materialsChecks?: MaterialCheckProps[]
}

const CalendarMaterialCheck = ({ date, materialsChecks = [] }: CalendarMaterialCheckProps) => {

    const today = new Date()


    return (
        <div className={`flex flex-col gap-4 justify-center items-center p-3 ${isDatesEqual(today, date) ? 'bg-slate-500' : 'bg-white'}`}>
            <div className={`text-2xl font-bold ${isDatesEqual(today, date) ? 'text-white' : 'text-primary'}`}><Moment format="DD/MM/YYYY">{date}</Moment></div>
            {materialsChecks.map((item, index) => (
                <MaterialCheck key={index} {...item} isEditable={false} />
            ))}
        </div>
    )
}
export default CalendarMaterialCheck