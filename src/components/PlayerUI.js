import { React, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import SeekerCircle from './media/seeker-circle.png';

import './css/player-ui.css';
import PlayerSongInstace from './PlayerSongInstace';

function PlayerUI() {
  var [playButton, setPlayButton] = useState('play_circle');
  var [musicTime, setMusicTime] = useState(0);

  function calcMusicTime(curTime, totalTime) {
    setMusicTime((curTime * 100) / totalTime);
  }

  function sliderChange() {
    const sliderElement = document.getElementById("seeker-bar");
    var value = sliderElement.value;
    sliderElement.style.background = 'linear-gradient(to right, #1877F2 0%, #1877F2 ' + value + '%, #fff ' + value + '%, white 100%)'
  }

  function handleVolumeBarChange()
  {
    const volumeBar = document.getElementById('volumeBar');
    const volumeIcon = document.getElementById('musicVolumeIcon');
    var volumeVal = volumeBar.value;
    volumeBar.style.background = 'linear-gradient(to right, #1877F2 0%, #1877F2 ' + volumeVal + '%, #fff ' + volumeVal + '%, white 100%)'

    if (volumeVal > 50)
    {
      volumeIcon.innerHTML = "volume_up";
    }
    else if (volumeVal <= 50 && volumeVal > 0)
    {
      volumeIcon.innerHTML = "volume_down";
    }
    else
    {
      volumeIcon.innerHTML = "volume_off";
    }
  }

  function swapPlayButton() {
    setPlayButton(playButton === 'play_circle' ? 'pause_circle' : 'play_circle');
  }

  function handleFavButtonClick()
  {
    var favButton = document.getElementById('musicFavHeartIcon');
    favButton.classList.toggle('symbol-filled');
  }

  return (
    <Container fluid='true' className='player-container text-white ps-5 pe-5 pt-4 pb-4'>
      <Row>
        <div className='col-md-4'>
          <PlayerSongInstace playerSongImg={''} playerSongTitle={'Placeholder Title'} playerSongSubtitle={'By subtitle'} />
        </div>
        <div className='col-md-4 d-none d-md-block text-center music-control-container'>
          <div>
            <Button className='music-control-btn me-4'><span className='material-symbols-outlined symbol-filled d-flex align-self-center music-control-icon' id='prevMusicIcon'>skip_previous</span></Button>
            <Button className='music-control-btn me-4' onClick={() => swapPlayButton()}><span className='material-symbols-outlined symbol-filled d-flex align-self-center music-control-icon' id='playMusicIcon'>{playButton}</span></Button>
            <Button className='music-control-btn'><span className='material-symbols-outlined symbol-filled d-flex align-self-center music-control-icon' id='nextMusicIcon'>skip_next</span></Button>
          </div>
          <div className='mt-3 d-flex flex-row align-items-center gap-2'>
            <div className='float-start song-timer' id='songDurationCurrent'>0:00</div>
            <input type='range' onChange={sliderChange} id='seeker-bar' defaultValue={0}></input>
            <div className='float-end song-timer' id='songDurationTotal'>5:00</div>
            <div className='seeker-bar-container'>
            </div>
          </div>
        </div>
        <div className='col-md-4 d-none d-md-flex align-items-center justify-content-end text-center music-utility-container'>
          <Button className='music-favorite-button me-4' onClick={() => handleFavButtonClick()}><span className='material-symbols-outlined d-flex align-self-center music-utility-icon' id='musicFavHeartIcon'>favorite</span></Button>
          <span class="material-symbols-outlined symbol-filled me-2" id='musicVolumeIcon'>volume_up</span>
          <input type='range' id='volumeBar' onChange={() => handleVolumeBarChange()} defaultValue={75} min={0} max={100} />
        </div>
      </Row>
    </Container>
  )
}

export default PlayerUI