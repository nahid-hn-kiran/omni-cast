export const cloudinary_upload_preset = import.meta.env
  .VITE_PODCAST_UPLOAD_PRESET;
export const cloudnary_cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
export const cloudinary_url = `https://api.cloudinary.com/v1_1/${cloudnary_cloud_name}/upload`;
