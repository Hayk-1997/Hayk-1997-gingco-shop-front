export const wrapFormData = (files: FileList): FormData => {
  const formData = new FormData();

  Array.from(files).forEach((file) => formData.set('file', file));

  return formData;
};
