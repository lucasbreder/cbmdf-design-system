import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { DragEvent, useRef, useState } from "react";
import Button from "../Button/Button";


const FileDrop = () => {

    const supportedTypes = {
        mimeType: [
            "application/pdf",
            "image/jpeg",
            "image/jpg",
            "image/png"
        ],
        extnsionsType: [
            ".pdf", ".jpg", ".jpeg", ".png"
        ]
    }

    const isTypeSuported = (type: string) => {
        return supportedTypes.mimeType.includes(type);
    }

    const dropHandler = (ev: DragEvent) => {
        ev.preventDefault();
        setInfoDropZone('Arraste ou clique para adicionar um arquivo')
        setAnimateIcon(false);

        if (ev.dataTransfer.items) {
            let items = []
            for (let i = 0; i < ev.dataTransfer.items.length; i++) {
                const item: DataTransferItem = ev.dataTransfer.items[i]
                if (item.kind !== "file") continue
                const file = item.getAsFile()
                if (!file || !isTypeSuported(item.type)) continue

                items.push(file)
            }
            setFiles(prev => {
                const existingFiles = prev.map(file => file.name)
                const newFiles = items.filter(item => !existingFiles.includes(item?.name))
                return [...prev, ...newFiles]
            })
        }
    }

    const dragLeaveHandler = (ev: DragEvent) => {
        ev.preventDefault()
        setInfoDropZone('Arraste ou clique para adicionar um arquivo')
        setAnimateIcon(false)
    }

    const dragOverHandler = (ev: DragEvent) => {
        ev.preventDefault()
        setInfoDropZone('Solte aqui para adicionar o(s) arquivo(s)')
        setAnimateIcon(true)
    }

    const handleInputClick = () => {
        inputRef.current?.click();
    }

    const handleInputUpload = () => {
        if (inputRef.current?.files) {
            let items = []
            for (let i = 0; i < inputRef.current?.files.length; i++) {
                const item = inputRef.current?.files[i];
                if (!isTypeSuported(item.type)) continue
                items.push(item)
            }
            setFiles(prev => {
                const existingFiles = prev.map(file => file.name)
                const newFiles = items.filter(item => !existingFiles.includes(item?.name))
                return [...prev, ...newFiles]
            })
        }
    }

    const removeFile = (key: Number) => {
        const newFiles = files.filter((file, index) => index !== key);
        setFiles(newFiles)
    }

    const [infoDropZone, setInfoDropZone] = useState('Arraste ou clique para adicionar um arquivo')
    const [animateIcon, setAnimateIcon] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <div className={`
            w-full
            h-full
            border-2
            border-dashed
            border-highlight
            rounded-md
            flex
            items-center
            flex-col
            gap-y-3
            px-5
            py-8
            duration-200
            ${animateIcon && ` text-blue-300` || ` text-highlight`}
            `}
                onDrop={dropHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
            >
                <div className="w-full flex flex-col items-center gap-y-3 cursor-pointer" onClick={handleInputClick}>
                    <FontAwesomeIcon icon={['fas', 'cloud-arrow-up']} size="2xl" className={`text-highlight ${animateIcon && 'animate-bounce'}`} />
                    <h2 className={`text-2xl font-bold text-center`}>{infoDropZone}</h2>
                    <h2 className={``}>Formatos aceitos: pdf, jpg e png</h2>
                    <input accept={supportedTypes.extnsionsType.toString()} onInput={handleInputUpload} ref={inputRef} type="file" className={`hidden`} multiple />
                </div>

                <div className={`mt-3 px-7 w-full text-sm`}>
                    <table className={` w-full border-collapse`}>
                        <thead className={`hidden`}>
                            <tr className={``}>
                                <th>Icon</th>
                                <th>Nome</th>
                                <th>Tamanho</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {files && files.map((item, index) => {
                                const file: File | null = item
                                let iconName: IconName;
                                switch (item.type) {
                                    case 'application/pdf':
                                        iconName = 'file-pdf'
                                        break;
                                    default:
                                        iconName = 'image'
                                        break;
                                }

                                return (
                                    <tr key={index} className={``}>
                                        <td className={`border-b px-2 py-0 border-slate-300 text-center`}><FontAwesomeIcon icon={['fas', iconName]} size="sm" /></td>
                                        <td className={`border-b px-2 py-0 border-slate-300`}>{file?.name}</td>
                                        <td className={`border-b px-2 py-0 border-slate-300`}>{(file?.size as number / 1024).toFixed(2)} Kb</td>
                                        <td className={`border-b px-2 py-0 border-slate-300`}>
                                            <div className={`w-24 h-2 border ${animateIcon && ` border-blue-300` || `border-highlight`}`}>
                                                <div className={`w-[37%] h-full ${animateIcon && ` bg-blue-300` || `bg-highlight`}`}></div>
                                            </div>
                                        </td>
                                        <td className={`border-b px-2 py-0 border-slate-300 text-center`}>
                                            <Button
                                                color="highlight"
                                                icon="trash"
                                                iconPosition="after"
                                                loadingTitle="Carregando..."
                                                size="sm"
                                                title=""
                                                variant="transparent"
                                                onClick={() => removeFile(index)}
                                            />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default FileDrop;