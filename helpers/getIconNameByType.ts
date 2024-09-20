import { IconName } from "@fortawesome/fontawesome-svg-core"

type IconMapType = { 
    [key: string]: IconName 
}

const fileIconMap: IconMapType = {
    'application/pdf': 'file-pdf',
    'text/plain': 'file-alt',
    'application/msword': 'file-word',
    'application/vnd.ms-excel': 'file-excel',
    'application/vnd.ms-powerpoint': 'file-powerpoint',
    'application/zip': 'file-archive',
    'application/x-rar-compressed': 'file-archive',
}

const getIconNameByType = (mimeType: string) :IconName => {
    if(mimeType.startsWith('image/'))
        return 'file-image' as IconName

    return fileIconMap[mimeType] || 'file' as IconName
}

export default getIconNameByType