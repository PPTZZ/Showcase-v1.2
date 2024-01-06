import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = ()=> {
    const [error, setError]= useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } =useAuthContext();

    const register = async (email, password) =>{
        setIsLoading(true)
        setError(null)

        const response = await fetch("//http:localhost:4000/register", {
            method:'POST',
            headers:{'Contetnt-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){

            localStorage.setItem('user',JSON.stringify(json));

            dispatch({type:'LOGIN', paylaod: json});

            setIsLoading(false)
        }
    }
    return {register, isLoading, error}
}