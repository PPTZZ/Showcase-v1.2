import { PostsContext } from "../Context/PostsContext";
import { useContext } from "react";

export const usePostsContext = () =>{
    const context = useContext(PostsContext)

    if(!context){
        throw Error('usedPostContext must be used inside PostsContextProvider')
    }

    return context
}