

interface PropsType {
    onChange?: (value: string | undefined | null) => void;
    icon?: string,
    iconClass?: string,
    boxClass?: string,
    inputClass?: string,
    placeholder: string,
    placeholderClass?: string,
    size?: string,
    resetKey?:string,
}
const SearchBar: React.FC<PropsType> = ({ icon, iconClass, inputClass,resetKey="", boxClass, placeholder, placeholderClass, size = "1.3rem", onChange }) => {

    return (
        <>
            {/* @ts-ignore */}
            <input onChange={(e: any) => onChange(e.target.value)} key={resetKey} type="text" className={clsx("border-0 h-12 focus:outline-none px-3 w-full", inputClass, placeholderClass)} placeholder={placeholder} />
            {/* @ts-ignore */}
            <span><Icon name="search" fill="#000" className={clsx("ms-2", iconClass)} size={size} /></span>
        </>
    )
}

export default SearchBar
