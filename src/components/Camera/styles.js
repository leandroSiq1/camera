import styled from 'styled-components';

export const CameraContainer = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Container = styled.div`
  width: 300px;
  height: 300px;

  margin: 50px auto;
  border-radius: 50%;
  border: 2px solid rgb(2, 200,100);
  overflow: hidden;

  > video {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  button {
    position: absolute;
    bottom: 20px;
    left: 20px;

    appearance: none;
    outline: none;
    padding: 8px 16px;
    
    border: 0;
    background-image: linear-gradient(to right, #8484ff 50%, #FF4F84 50%);
    background-position: 0%;
    background-size: 200%;

    font-size: 24px;
    font-weight: 700;
    color: #FFFFFF;

    transition: ease 0.4s;

    &:hover {
      background-position: 100%;
    }
  }
`;

export const Results = styled.div`
  width: 300px;
  height: 300px;

  margin: 50px auto;
  border-radius: 50%;
  border: 2px solid #FF4F84;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  .results {
    width: 100%;
    max-width: 100%;
    height: auto;
    
    
    transition: ease-out 0.4s;
  }

  button {
    position: absolute;
    bottom: 20px;
    right: 20px;

    appearance: none;
    outline: none;
    padding: 8px 16px;
    
    border: 0;
    background-image: linear-gradient(to right, #8484ff 50%, #FF4F84 50%);
    background-position: 0%;
    background-size: 200%;

    font-size: 24px;
    font-weight: 700;
    color: #FFFFFF;

    transition: ease 0.4s;

    &:hover {
      background-position: 100%;
    }
  }
`;