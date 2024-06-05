import { useState } from "react"

export const useInputChange = (initialFormData) => {

    const[formdata,setFormData]=useState(initialFormData);

    const handleInputChange=(e)=>{
        e.preventDefault();
        const{name,value}=e.target;
        setFormData({...formdata,[name]:value});
    }

  return {handleInputChange,formdata}
}

