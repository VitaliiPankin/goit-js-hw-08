import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const stopTime = localStorage.getItem(STORAGE_KEY);
if (stopTime) {
  player.setCurrentTime(stopTime);
}

player.on(
  'timeupdate',
  throttle(elem => {
    localStorage.setItem(STORAGE_KEY, elem.seconds);
  }, 1000),
);
