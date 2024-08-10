'use client'
//this is client component, because we need to use client-side feature


//Importing the function to delete posts.
import {deletePost} from "@/app/actions/posts";

// Define the props that the PostDelete compenent expects.
interface PostDeletePops {
    id: string,  //The ID of the post to delete.
}

export default function PostDelete({id}:PostDeletePops){

    const deleteAction = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();  // Prevent the form from being submitted in the traditional wayl.
        deletePost(id); // Delete the post with the given ID.
    }

    return <form>
        <button type="submit" className="text-sm opacity-30 text-red-500">Delete</button>
    </form>
}