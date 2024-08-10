// Importing the function to fetch posts from the database.
import {fetchPosts} from "@/db/queries/posts";
import Link from "next/link";
//Importing  a component that handles post deletion.
import PostDelete from "@/components/post-delete";

export default async function Home() {

 const posts = await fetchPosts() //fetching the posts from the database.

 // interface for date options

 const dateOptions: Intl.DateTimeFormatOptions = {
  //options for formating date
  year: 'numeric',
  month: 'long',
  day: 'numeric'
 };


  return (
  <main className = "flex min-h-screen flex-col items-start p-24">
    <div className="mb-4">
      <Link href="/posts/create" className="bg-white px-4 py-2 rounded text-blue-800 ">Create Post</Link>  
      {/* // Link to create a new post. */}
    </div>

    <div className="mb-32  grid gap-x08 gap-y-4 text-center lg:max-w-5xl lg:full lg:mb-0 lg:grid-cols-4 l:text-left">

      {/* Mapping over the post and redering each one. */}

      {posts.map(post => {
        return <div key={post.id}>
          <div className="mb-4">
            <Link 
             key={post.id}
             href={`/posts/${post.id}/edit`}
             className = ""
             >
              <div className={`mb-3 text-2xl font-semi-blod`}>
                {post.title}
              </div>
             </Link>
             <p className= {`m-0 mx-w-[30ch] text-sm opacity-60`}>
              {post.content}
             </p>
          </div>

          <div className="text-sm opacity-30">{'Updated at ' + post.updatedAt.toLocaleDateString("en-US", dateOptions)}</div>
          <PostDelete id={post.id} />
        </div>
      })}
    </div>
  </main>
  );
}
