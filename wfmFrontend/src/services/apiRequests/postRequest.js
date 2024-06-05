import { ToastMessage } from "../../utils/toastMessage";

export const postRequest=()=>{

    const{showErrorMessage,showSuccessMessage}=ToastMessage();

    const PostApi=async(url,data)=>{

        try {
            const response=await fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
            const responseData=await response.json();
            if(response.ok){
                showSuccessMessage(responseData.message);
                return responseData;
            }
            showErrorMessage(responseData.message);
        } catch (error) {
            showErrorMessage(error.message);
        }
    }

  return {PostApi}
}
