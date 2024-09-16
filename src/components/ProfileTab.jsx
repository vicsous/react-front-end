export default function ProfileTab ({ name }) {
    return(
        <div className="lg:px-36 xl:px-52 bg-gray-800 text-gray-50">
            <div className="container flex flex-col mx-auto ">
                <div className="flex flex-col rounded-md shadow-sm bg-gray-900 pt-6 px-6">
                    <div className="bg-gray-900 p-6 w-full rounded-lg mb-6">
                        {name}
                        <p className="text-3xl">O negócio é o seguinte... Só tenho a dizer que dezenove não é vinte! O negócio é o seguinte... Só tenho a dizer que dezenove não é vinte!O negócio é o seguinte... Só tenho a dizer que dezenove não é vinte!</p>
                        <p className="text-xs py-2">Postado há 2 anos por @admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}