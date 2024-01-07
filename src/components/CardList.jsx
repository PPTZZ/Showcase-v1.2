import { Grid } from "@mui/material";
import { DisplayCard } from "./DisplayCard";
import { usePostsContext } from "../hooks/usePostsContext";

export const CardList = ()=>{
    
    const { posts } = usePostsContext();

    return(
        <Grid 
        container
        gap={3}
        >
        {posts && posts.map((post)=>(
            <DisplayCard key={post._id} post={post}/>
        ))}
        </Grid>

    )
}