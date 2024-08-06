const { authUserSession } = require("@/libs/auth-libs")
const { default: prisma } = require("@/libs/prisma")
import Header from '@/components/Dashboard/Header'
import Link from 'next/link'
import React from 'react'


const page = async () => {
    const user = await authUserSession()
    const comments = await prisma.comment.findMany({ where: {user_email: user.email} })

    return (
        <section className="mt-4 w-full">
            <Header title={`My Comments`}/>
            <div className='grid grid-cols-1 px-3 gap-4'>
                {comments.map(comment => {
                    return (
                        <div key={comment.id}className='bg-color-primary p-3 rounded'>
                            <Link href={`/anime/${comment.anime_mal_id}`} className='font-bold hover:text-xl transition-all'>{comment.anime_title}</Link>
                            <p className='italic'>{comment.comment}</p>
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}
export default page