import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { DragEvent, useRef, useState } from "react";
import { Progress } from "../ui/progress";
import { Button } from "@/components/ui/button"
import { formatBytes } from "@/helpers/formatBytes";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "../ui/toaster";
import getIconNameByType from "@/helpers/getIconNameByType";


type FileDropProps = {
    fileTypes: FileTypes
    maxFileSize?: number, // @valores em bytes
    progressUpload?: Array<{
        name: string,
        progress: number
    }>,
    function?: () => void
}

export type FileTypes = {
    mimeType: Array<string>
    extensionsType: Array<string>,
}


const FileDrop = ({ fileTypes, maxFileSize, progressUpload }: FileDropProps) => {

    const { toast } = useToast()

    const isTypeSuported = (type: string) => {
        return fileTypes.mimeType.includes(type);
    }

    const dropHandler = (e: DragEvent) => {
        e.preventDefault();
        setInfoDropZone('Arraste ou clique para adicionar um arquivo')
        setAnimateIcon(false);
        processFiles(e.dataTransfer.items)
    }

    const handleInputClick = () => {
        inputRef.current?.click();
    }

    const dragLeaveHandler = (e: DragEvent) => {
        e.preventDefault()
        setInfoDropZone('Arraste ou clique para adicionar um arquivo')
        setAnimateIcon(false)
    }

    const dragOverHandler = (e: DragEvent) => {
        e.preventDefault()
        setInfoDropZone('Solte aqui para adicionar o(s) arquivo(s)')
        setAnimateIcon(true)
    }

    const processFiles = (files: FileList | DataTransferItemList) => {
        let items: File[] = []

        Object.values(files).map((item: File | DataTransferItem, index) => {
            let file: File | null = null
            if (item instanceof DataTransferItem) {
                if (item.kind !== 'file') {
                    toast({
                        description: 'Formato do arquivo não é aceito',
                        duration: 3000,
                        variant: "destructive"
                    })
                }
                file = item.getAsFile()
            } else {
                file = item
            }

            if (!file || !isTypeSuported(file.type)) {
                toast({
                    description: 'Formato do arquivo ' + file?.name + ' não é aceito',
                    duration: 3000,
                    variant: "destructive"
                })
                return
            }
            if (maxFileSize && file.size > maxFileSize) {
                toast({
                    description: 'O arquivo ' + file.name + ' excede o tamanho máximo',
                    duration: 3000,
                    variant: "destructive"
                })
                return
            }

            items.push(file)

            setFiles(prev => {
                const existingFiles = prev?.map(file => file.name);
                const newFiles = items.filter(item => !existingFiles?.includes(item.name));
                return [...(prev || []), ...newFiles];
            });

        })
    }

    const handleInputUpload = () => {
        if (inputRef.current?.files) processFiles(inputRef.current.files)
    }

    const removeFile = (key: Number) => {
        const newFiles = files?.filter((file, index) => index !== key);
        setFiles(newFiles)
    }


    const [infoDropZone, setInfoDropZone] = useState('Arraste ou clique para adicionar um arquivo')
    const [animateIcon, setAnimateIcon] = useState(false);
    const [files, setFiles] = useState<Array<File>>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <Toaster />
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
                <div className="w-full flex flex-col items-center gap-y-3 cursor-pointer text-center" onClick={handleInputClick}>
                    <FontAwesomeIcon icon={['fas', 'cloud-arrow-up']} size="2xl" className={`text-highlight ${animateIcon && 'animate-bounce'}`} />
                    <h2 className={`text-2xl font-bold text-center`}>{infoDropZone}</h2>
                    <h2 className={`text-sm`}>
                        Formatos aceitos: {fileTypes.extensionsType.toString().replaceAll('.', ' .')}
                        {maxFileSize && <><br /><span className={`text-`}>Máximo de {formatBytes(maxFileSize)}</span></>}
                    </h2>

                    <input accept={fileTypes.extensionsType.toString()} onInput={handleInputUpload} ref={inputRef} type="file" className={`hidden`} multiple />
                </div>

                {files && <div className={`mt-3 px-7 w-full text-sm`}>
                    <table className={` w-full border-collapse duration-200 ${animateIcon && ` text-primary/50` || `text-primary`}`}>
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
                            {files.map((item, index) => {
                                return (
                                    <tr key={index} className={``}>
                                        <td className={`border-b px-2 py-0 border-slate-300 text-center`}><FontAwesomeIcon icon={['fas', getIconNameByType(item.type)]} size="sm" /></td>
                                        <td className={`border-b px-2 py-0 border-slate-300`}>{item.name}</td>
                                        <td className={`border-b px-2 py-0 border-slate-300`}>{formatBytes(item.size)}</td>
                                        <td className={`border-b px-2 py-0 border-slate-300`}>
                                            <Progress
                                                // classBar={`duration-200 ${animateIcon && ` bg-primary/40` || `bg-primary/80`}`}
                                                className={`duration-200 h-2 w-24 rounded-none border ${animateIcon && ` border-primary/40` || `border-primary/80`}`}
                                                value={(progressUpload.find(element => element.name === item.name))?.progress}
                                            />
                                        </td>
                                        <td className={`border-b px-2 py-0 border-slate-300 text-center`}>
                                            <Button onClick={() => removeFile(index)} className={`h-6 w-1`} variant="ghost">
                                                <FontAwesomeIcon icon={['fas', 'trash']} />
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>}
            </div>
        </>
    )
}



export default FileDrop;