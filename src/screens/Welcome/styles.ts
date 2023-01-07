import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  margin-top: ${getStatusBarHeight()}px;
  text-align: center;
  font-size: 32px;
  line-height: 38px;

  ${({theme}) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.semibold};
  `}
`;

export const WelcomeImage = styled.Image``;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  line-height: 25px;

  ${({theme}) => css`
    color: ${theme.colors.body_dark};
    font-family: ${theme.fonts.regular};
  `}
`;

export const Button = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: ${({theme}) => theme.colors.green};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;