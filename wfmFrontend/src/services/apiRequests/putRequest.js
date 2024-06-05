import { ToastMessage } from "../../utils/toastMessage";

export const putRequest = () => {
    const { showErrorMessage, showSuccessMessage } = ToastMessage();

    const PutApi = async (url, data = {}) => {
        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();

            if (response.ok) {
                showSuccessMessage(responseData.message);
                return responseData;
            } else {
                showErrorMessage(responseData.message);
            }
        } catch (error) {
            showErrorMessage(error.message);
        }
    }

    return { PutApi };
}
