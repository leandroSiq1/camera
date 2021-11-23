import { useState, useEffect, useRef } from 'react';

import { CameraContainer, Container, Results } from './styles';

export function Camera() {
  const [hasPhoto, setHasPhoto] = useState(false);

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  async function getVideo() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 500, height: 500 } 
      });

      let video = videoRef.current;
      video.srcObject = stream;
      video.play();
      
      console.log(stream);
    } catch (error) {
      console.log(error);
    }
  }

  function takePhoto() {
    const width = 300;
    const height = 300;

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);

    setHasPhoto(true);
  }

  function closePhoto() {
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');

    ctx.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);
  }

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <CameraContainer>
      <Container>
        <video ref={videoRef}></video>
        <button onClick={takePhoto}>SNAP!</button>
      </Container>
      <Results className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
        <canvas ref={photoRef}></canvas>
        <button onClick={closePhoto}>CLOSE!</button>
      </Results>
    </CameraContainer>
  );
}