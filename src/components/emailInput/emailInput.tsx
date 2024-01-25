type Props = {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    isValid: boolean
}
export const EmailInput = ({value, onChange, isValid}: Props) => {
    return (
        <div className={`group w-full px-3 py-2 bg-slate-100 rounded-lg justify-start items-center gap-2 inline-flex
        ${!isValid && 'border-red-600 border-2 bg-transparent'} md:max-w-96 group-focus:border-black group-focus:border-2`}>
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                <label htmlFor="#email" className="self-stretch text-blue-600 text-xs font-semibold font-['Fixel Text']
                leading-none">Email</label>
                <input
                    id="email"
                    name="email"
                    value={value}
                    onChange={onChange}
                    className="self-stretch autofill:bg-transparent outline-none
                    bg-transparent rounded-lg text-black text-lg font-medium font-['Inter']
                    leading-normal"
                />
            </div>
        </div>
    )
}