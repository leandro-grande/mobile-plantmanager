import { BorderlessButton } from "react-native-gesture-handler";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { SvgUri } from "react-native-svg"
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const Header = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight() + 24}px;
  align-items: center;
  padding: 0 24px;
`;

export const BackButton = styled(BorderlessButton)`
  height: 36px;
  width: 36px;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 24px;
`;

export const PlantSvg = styled(SvgUri)`
  margin-top: 16px;
`;

export const PlantTitle = styled.Text`
  margin-top: 24px;
  font-size: 24px;

  ${({theme}) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.semibold};
  `}
`;

export const PlantAbout = styled.Text`
  margin-top: 16px;
  font-size: 16px;
  line-height: 25px;
  text-align: center;

  ${({theme}) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.regular};
  `}
`;

export const Controller = styled.View`
  padding: 0 32px;
  padding-bottom: ${getBottomSpace() + 32}px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const PlantInstructionArea = styled.View`
  bottom: 50px;
`;

export const NotificationTitle = styled.Text`
  text-align: center;
  font-size: 13px;

  ${({theme}) => css`
    color: ${theme.colors.body_dark};
    font-family: ${theme.fonts.regular};
  `}
`;

export const DateTimePickerChangeButton = styled.TouchableOpacity`
  margin: 24px;
  align-self: center;
`;

export const DateTimePickerText = styled.Text`

  font-size: 20px;

  ${({theme}) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.regular};
  `}
`;