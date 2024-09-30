import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Input } from "../ui/input"

type SearchFormProps = {
    placeholder?: string
    onChange?: (arg:string) => any
}

const SearchForm = ({placeholder, onChange}:SearchFormProps) => {
    return (
       <div className="text-gray-500">
            <FontAwesomeIcon className="absolute left-6 top-[22px]" icon={['fas', 'search']} />
            <Input className="pl-10" placeholder={placeholder} onChange={(e) => {
                onChange && onChange(e.target.value)
            }} />
       </div>
    )
}

export default SearchForm