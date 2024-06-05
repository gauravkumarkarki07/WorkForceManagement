import { toast } from 'react-toastify';

export const ToastMessage=()=>{
    
    const showSuccessMessage=(message)=>{
        toast.success(message);
    }
    const showErrorMessage=(message)=>{
        toast.error(message);
    }

    return{showErrorMessage,showSuccessMessage}
}