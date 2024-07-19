"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"

const InputSearch = () => {
    return (
        <div className="relative">
        <input 
            placeholder="cari anime..."
            className="w-full p-2 rounded"
        />
        <button className="absolute top-2 end-2">
            <MagnifyingGlass size={24} />
        </button>
        </div>
    )
}

export default InputSearch