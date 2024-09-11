import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const iconByKey = (key: string) => {

    let setIcon;

    switch (key) {
        case 'patrimonio':
            setIcon = 'house'
            break
        case 'quantidade':
            setIcon = 'box'
            break
        case 'cor':
            setIcon = 'tint'
            break
        case 'cautelados':
            setIcon = 'arrow-up'
            break
    }

    if (setIcon) {
        return <FontAwesomeIcon width={24} icon={['fas', setIcon as IconName]} />
    }
}