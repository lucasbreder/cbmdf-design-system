import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);



type ButtonProps = {
    title: string
    disable?: boolean
    loading?: boolean
    loadingTitle?: string
    icon?: IconName
    iconPosition?: 'before' | 'after'
} & (React.ButtonHTMLAttributes<HTMLButtonElement>)


const Button = ({
    title,
    disable = false,
    loading = false,
    icon,
    loadingTitle = `Carregando...`,
    iconPosition = 'after'
}: ButtonProps) => {


    return <button disabled={disable} className={`
        bg-highlight
        text-primary
        font-bold
        px-6
        py-2
        rounded-md
        border-none
        hover:bg-hover
        active:shadow-inner
        transition
        duration-300
        ease-in-out
        flex
        items-center
        gap-2
        max-w-80
        ${disable && `disabled:bg-disabled`}
        ${loading && `opacity-60`}
        ${iconPosition === 'before' && `flex-row-reverse`}
    `
    }>{loading ? loadingTitle : title}
        {icon && <FontAwesomeIcon icon={['fas', icon]} />}
    </button>
}
export default Button