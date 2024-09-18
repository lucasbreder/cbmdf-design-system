import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Textarea } from "../ui/textarea"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Moment from "react-moment"

type MaterialCheckProps = {
    title: string
    image: string
    author?: string
    date?: Date
    isTested?: boolean
    isChecked?: boolean
    observation?: string
    isEditable?: boolean
}

type MaterialCheckDataState = {
    isTested?: boolean
    isChecked?: boolean
    observation?: string
}

const MaterialCheck = ({ title, image, author, date, isTested, isChecked, observation, isEditable = false }: MaterialCheckProps) => {

    const [showObs, setShowObs] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    const [dataState, setDataState] = useState<MaterialCheckDataState>({
        isChecked,
        isTested,
        observation
    })
    const [isCheckedState, setCheckedState] = useState(isChecked)
    const [isTestedState, setTestedState] = useState(isTested)
    const [observationState, setObservationState] = useState(observation)

    const checkboxes = [
        {
            title: 'Verificado',
            isState: isCheckedState,
            changeStateFuncion: setCheckedState
        },
        {
            title: 'Testado',
            isState: isTestedState,
            changeStateFuncion: setTestedState
        }
    ]

    return (
        <Card className="w-min">
            <CardContent className="px-4 py-4">
                <div className="flex gap-2 items-center flex-col">

                    <div className="flex gap-2 items-center">
                        <div className="rounded-full overflow-hidden min-w-12 h-12 relative"><Image src={image} alt="" fill /></div>
                        <div className="leading-5 font-bold min-w-28">{title}</div>
                        {
                            checkboxes.map((checkbox, index) => (
                                <div key={index} className="flex flex-col items-center">

                                    <label htmlFor="checked">{checkbox.title}</label>
                                    {!isEditable ?
                                        <FontAwesomeIcon size="xl" className={checkbox.isState ? 'text-accept' : 'text-warning'} icon={['fas', checkbox.isState ? 'check' : 'close']} /> :
                                        <Checkbox id="checked" checked={checkbox.isState}
                                            onCheckedChange={() => {
                                                checkbox.changeStateFuncion(prev => !prev)
                                            }} />}
                                </div>
                            ))
                        }

                    </div>
                    <div className="w-full">
                        {isEditable &&
                            <div className="flex gap-2 cursor-pointer my-2 justify-center items-center" onClick={() => {
                                setShowObs(prev => !prev)
                            }}>Adicionar Observação<FontAwesomeIcon className={`grid transition-all duration-500 ${showObs ? 'rotate-180' : 'rotate-0'}`} icon={['fas', 'arrow-down']} /></div>}

                        <div className={`grid transition-all duration-500 ${showObs || observationState ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className="overflow-hidden mt-2">
                                {(observationState && !isEditable) ? observationState : <Textarea onChange={(e) => {
                                    setObservationState(e.target.value)
                                }} value={observationState} />}
                            </div>
                        </div>

                        {author && <div className="mt-2 text-xs text-center w-full h-2 border-t py-1">
                            {author}
                            {date && <> - <Moment format="DD/MM/YYYY hh:mm">{date}</Moment></>}
                        </div>}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default MaterialCheck
