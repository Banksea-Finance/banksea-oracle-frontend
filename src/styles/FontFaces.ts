import { css } from 'styled-components'

export const FontFaces = css`
  @font-face {
    font-weight: 100;
    font-family: 'MontserratAlternates';
    src: local('MontserratAlternates'), url(${require('../assets/fonts/Montserrat_Alternates/MontserratAlternates-Thin.ttf')}) format('truetype');
  }
  @font-face {
    font-weight: 200;
    font-family: 'MontserratAlternates';
    src: local('MontserratAlternates'), url(${require('../assets/fonts/Montserrat_Alternates/MontserratAlternates-ExtraLight.ttf')}) format('truetype');
  }
  @font-face {
    font-weight: 300;
    font-family: 'MontserratAlternates';
    src: local('MontserratAlternates'), url(${require('../assets/fonts/Montserrat_Alternates/MontserratAlternates-Light.ttf')}) format('truetype');
  }
  @font-face {
    font-weight: 400;
    font-family: 'MontserratAlternates';
    src: local('MontserratAlternates'), url(${require('../assets/fonts/Montserrat_Alternates/MontserratAlternates-Regular.ttf')}) format('truetype');
  }
  @font-face {
    font-weight: 500;
    font-family: 'MontserratAlternates';
    src: local('MontserratAlternates'), url(${require('../assets/fonts/Montserrat_Alternates/MontserratAlternates-Medium.ttf')}) format('truetype');
  }
  @font-face {
    font-family: 'MontserratAlternates';
    font-weight: 600;
    src: local('MontserratAlternates'), url(${require('../assets/fonts/Montserrat_Alternates/MontserratAlternates-SemiBold.ttf')}) format('truetype');
  }
  @font-face {
    font-family: 'MontserratAlternates';
    font-weight: 700;
    src: local('MontserratAlternates'), url(${require('../assets/fonts/Montserrat_Alternates/MontserratAlternates-Bold.ttf')}) format('truetype');
  }
  @font-face {
    font-family: 'MontserratAlternates';
    font-weight: 800;
    src: local('MontserratAlternates'), url(${require('../assets/fonts/Montserrat_Alternates/MontserratAlternates-ExtraBold.ttf')}) format('truetype');
  }
  // @font-face {
  //   font-family: 'MontserratAlternates';
  //   font-weight: 900;
  //   src: local('MontserratAlternates'), url(${require('../assets/fonts/Montserrat_Alternates/MontserratAlternates-Black.ttf')}) format('truetype');
  // }

  /** orbitron */
  @font-face {
    font-family: 'orbitron';
    font-weight: 400;
    src: local('orbitron'), url(${require('../assets/fonts/orbitron/Orbitron-Regular.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'orbitron';
    font-weight: 500;
    src: local('orbitron'), url(${require('../assets/fonts/orbitron/Orbitron-Medium.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'orbitron';
    font-weight: 600;
    src: local('orbitron'), url(${require('../assets/fonts/orbitron/Orbitron-Black.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'orbitron';
    font-weight: 700;
    src: local('orbitron'), url(${require('../assets/fonts/orbitron/Orbitron-Bold.ttf')}) format('truetype');
  }
`
