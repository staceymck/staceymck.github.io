import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import blobs from '../../assets/blobs-lottie.json';
import './BlobAnimation.scss';

const Blobs = () => {

  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("blobs"),
      animationData: blobs
    })
  }, [])

  return (
      <div id="blobs"/>
  )
}

export default Blobs