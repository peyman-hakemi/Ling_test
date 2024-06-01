import {Dimensions, PixelRatio} from 'react-native';

interface IScreenDimensions {
  width: number;
  height: number;
}

const {width, height}: IScreenDimensions = Dimensions.get('window');

// design height = 640

// this method will return a responsive value base on our design
function makeValueResponsive(value: number) {
  const designWidth = 360;
  const screenWidth = width;

  return `${PixelRatio.roundToNearestPixel(
    (value * screenWidth) / designWidth,
  )}px`;
}

export {makeValueResponsive as mvp, width, height};
