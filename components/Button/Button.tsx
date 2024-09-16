import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);



type ButtonProps = {
    title?: string
    disable?: boolean
    loading?: boolean
    loadingTitle?: string
    icon?: IconName
    iconPosition?: 'before' | 'after'
    variant?: 'default' | 'outline' | 'transparent'
    color?: 'highlight' | 'warning' | 'attention' | 'accept'
    size?: 'base' | 'sm'
} & (React.ButtonHTMLAttributes<HTMLButtonElement>)


const Button = ({
    title,
    disable = false,
    loading = false,
    icon,
    loadingTitle = `Carregando...`,
    iconPosition = 'after',
    variant,
    color = 'highlight',
    size = 'base',
    ...rest
}: ButtonProps) => {

    const variantDef = () => {
        switch (variant) {
            case 'outline':
                return `bg-transparent text-${color} border-${color} border-y-2 border-x-2`
            case 'transparent':
                return `bg-transparent text-${color}`
            default:
                return `bg-${color} text-secondary border-none hover:bg-hover`
        }
    }

    const sizeDef = () => {
        switch (size) {
            case 'sm':
                return `px-4 py-2 text-sm`
            default:
                return `px-6 py-2`
        }
    }

    return <button {...rest} disabled={disable} className={`
        font-bold
        ${sizeDef()}
        rounded-md
        active:shadow-inner
        transition
        duration-300
        ease-in-out
        flex
        items-center
        gap-2
        max-w-80

        ${variantDef()}
        ${disable && `disabled:bg-disabled`}
        ${loading && `opacity-60`}
        ${iconPosition === 'before' && `flex-row-reverse`}
    `
    }>{title && <span className='min-w-0 break-words'>{loading ? loadingTitle : title}</span>}
        {icon && !loading &&
            <FontAwesomeIcon icon={['fas', icon]} />}
        {loading &&
            <FontAwesomeIcon className='animate-spin' icon={['fas', 'spinner']} />}
    </button>
}
export default Button