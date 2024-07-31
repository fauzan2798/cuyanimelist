import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Dashboard/Header"

const Page = () => {
    return (
        <section className="mt-4 w-full">
            <Header title={"My Collections"}/>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute items-center justify-center flex w-full bottom-0 bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul</h5>
                    </div>
                </Link>    
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute items-center justify-center flex w-full bottom-0 bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul</h5>
                    </div>
                </Link>    
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute items-center justify-center flex w-full bottom-0 bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul</h5>
                    </div>
                </Link>    
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute items-center justify-center flex w-full bottom-0 bg-color-accent h-16">
                        <h5 className="text-xl text-center">Judul</h5>
                    </div>
                </Link>    
            </div>
        </section>
    )
}

export default Page