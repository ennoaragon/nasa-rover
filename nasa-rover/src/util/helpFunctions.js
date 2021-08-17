export const selectedCameraArray = (arr, camera) => {
  console.log(camera)
  const newArray = arr.filter((obj) => camera === obj.camera.name);
  return newArray;
};