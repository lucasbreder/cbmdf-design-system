import { IconName } from "@fortawesome/fontawesome-svg-core"


type InputProps = {
    
    placeholder?: string,
    disabled?: boolean,
    loading?: boolean,
    icon?: IconName,
    iconPosition?: 'before' | 'after',
    size?: 'base' | 'sm'
} & (React.InputHTMLAttributes<HTMLInputElement>)

const Input = ({
    placeholder,
    disabled,
    loading,
    icon,
    iconPosition,
    size
}: InputProps ) => {
    return <Input type="text" placeholder={placeholder} />
}

export default Input