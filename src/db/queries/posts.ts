// Importing the Post type from the Prisma client library.
import type {Post} from '@prisma/client'

import {db}  from '@/db'
import {notFound} from 'next/navigation'  // Importing the notFound function from Next.js for handling 404 errors.


export async function fetchPosts(): Promise<Post[]> {
    // Function to fetch all posts from the database.
      return await db.post.findMany({
        orderBy: [
            {
                updatedAt: 'desc',
            }
        ],
    })
}

export async function fetchPostsById(id: string): Promise<Post | null>{
     // Function to fetch a single post by its ID.
     const post = await db.post.findFirst({
        where: {
            id
        }
     })

     if(!post){
        notFound() // if the post is not found , a 404 error is thrown.
     }

     return post
}