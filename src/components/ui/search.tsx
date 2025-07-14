import clsx from "clsx";
import SearchIcon from '../../assets/icons/search-icon.svg?react';

interface PropsType {
    onChange?: (value: string | undefined | null) => void;
    iconClass?: string,
    boxClass?: string,
    inputClass?: string,
    placeholder: string,
    placeholderClass?: string,
    size?: string,
    resetKey?: string,
}
const SearchBar: React.FC<PropsType> = ({
    iconClass, inputClass, resetKey = "", boxClass, placeholder, placeholderClass, size = "1.3rem", onChange
}) => {
    return (
        <div className="flex items-center">
            <span>
                <SearchIcon className={clsx("ms-2", iconClass)} style={{ width: size, height: size }} />
            </span>
            <input
                onChange={(e: any) => onChange(e.target.value)}
                key={resetKey}
                type="text"
                className={clsx("border-0 h-12 focus:outline-none px-3 w-full", inputClass, placeholderClass)}
                placeholder={placeholder}
            />

        </div>
    )
}

export default SearchBar;
