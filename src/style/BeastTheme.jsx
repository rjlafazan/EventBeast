import {
    orange500, orange600, orange700,
    orange900,
    grey100, grey300, grey400, grey500, grey600, grey800,
    white, darkBlack, fullBlack,
  } from 'material-ui/styles/colors'
  import {fade} from 'material-ui/utils/colorManipulator';
  import spacing from 'material-ui/styles/spacing';
  
  const BeastTheme = {
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
      primary1Color: orange600,
      primary2Color: orange700,
      primary3Color: grey300,
      accent1Color: orange500,
      accent2Color: grey100,
      accent3Color: grey500,
      textColor: darkBlack,
      alternateTextColor: white,
      canvasColor: grey800,
      borderColor: grey600,
      backgroundColor: grey800,
      disabledColor: fade(darkBlack, 0.3),
      pickerHeaderColor: orange500,
      clockCircleColor: fade(darkBlack, 0.07),
      shadowColor: fullBlack,
    },
  };
  export default BeastTheme;