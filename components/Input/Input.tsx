import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../Button/Button"

type InputProps = {
    placeholder?: string,
    disabled?: boolean,
    icon?: IconName,
    iconPosition?: 'before' | 'after',
} & (React.InputHTMLAttributes<HTMLInputElement>)

const Input = ({
    placeholder,
    disabled = false,
    icon,
    iconPosition
}: InputProps) => {

    return <div className={`flex justify-end items-center ${iconPosition === 'before' && `flex-row-reverse`}`}>
        <input
            className={`
            border-[0.5px]
            border-solid
            border-zinc-300
            rounded
            w-full
            py-2
            px-4
            text-primary
            easy-in-out
            focus:outline-none
            focus:ring
            focus:ring-zinc-100
            hover:outline
            hover:outline-zinc-100

            ${disabled && `bg-zinc-50 hover:outline-0 `}
            ${iconPosition === 'before' && `pl-12`}
            ${iconPosition === 'after' && `pr-12`}
        `}
            type="text"
            placeholder={placeholder}
            disabled={disabled}
        />
        <span className={`absolute  ${iconPosition === 'before' && `ml-1`}`}>
            <Button title="" variant="transparent" iconPosition="before" icon="search" size="icon"/>
        </span>
    </div>

}

export default Input