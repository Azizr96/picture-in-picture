const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play

async function selectMediaStream(){
  try{
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error){
    // Catch Error Here
  }
}

buttonElement.addEventListener('click', async () => {
  // disable button
  button.disabled = true;
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
})
// on load

selectMediaStream();