import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: 0 32px;
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.View`
  margin-top: 32px;
`;

export const Title = styled.Text`
  margin: 24px 0 8px;
  font-size: 24px;

  ${({theme}) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.semibold};
  `}
`;