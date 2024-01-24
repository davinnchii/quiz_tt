export const Header = () => {
    return (
        <header className="w-full h-10 px-4 pt-1 justify-between items-center inline-flex">
            <div className="p-2 bg-black bg-opacity-0 rounded-lg">
                <img src="/shape.svg"/>
            </div>
            <div className="text-center text-gray-800 text-lg font-bold font-Lora leading-tight">App</div>
            <div className="p-2 bg-black bg-opacity-0 rounded-lg">
                <img src="/menu.svg"/>
            </div>
        </header>
    );
}