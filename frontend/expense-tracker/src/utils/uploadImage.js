import { API_PATHS } from "./apiPaths";
import axiosInstence from "./axiosInstance";

const uploadImage = async (imageFile) => {
  const formData = new FormData();

  //Append Image file to form Data
  formData.append("image", imageFile);
  try {
    const response = await axiosInstence.post(
      API_PATHS.IMAGE.UPLOAD_IMAGE,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", //set header for file upload
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading image: ", error);
    throw error;
  }
};

export default uploadImage;
