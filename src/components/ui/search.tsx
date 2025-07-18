import clsx from "clsx";
import SearchIcon from '../../assets/icons/search-icon.svg?react';

interface SearchBarProps {
    onChange?: (value: string | undefined | null) => void;
    iconClass?: string,
    boxClass?: string,
    inputClass?: string,
    placeholder: string,
    placeholderClass?: string,
    size?: string,
    resetKey?: string,
}

const SearchBar = ({
    iconClass,
    inputClass,
    resetKey = "",
    boxClass,
    placeholder,
    placeholderClass,
    size = "1rem",
    onChange
}: SearchBarProps) => {
    return (
        <div className="flex items-center justify-center border border-gray-100 rounded-sm">
            <input
                onChange={(e: any) => onChange(e.target.value)}
                key={resetKey}
                type="text"
                className={clsx("outline-0 h-8 px-3 w-full", inputClass, placeholderClass)}
                placeholder={placeholder}
            />
            <span className="pe-2">
                <SearchIcon className={clsx("ms-2", iconClass)} style={{ width: size, height: size }} />
            </span>
        </div>
    )
}

export default SearchBar;
