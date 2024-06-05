import { ToastMessage } from "../../utils/toastMessage";

export const getRequest=()=>{

    const{showErrorMessage,showSuccessMessage}=ToastMessage();

    const GetApi=async(url)=>{

        try {
            const response=await fetch(url,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
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

  return {GetApi}
}
