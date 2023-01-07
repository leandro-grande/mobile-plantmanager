import { FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight() + 32}px;
  padding: 0 32px;
`

export const TextArea = styled.View`
  margin: 40px 0 24px;
`;

export const Title = styled.Text`
  font-size: 17px;
  line-height: 20px;

  ${({theme}) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.semibold};
  `}
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  

  ${({theme}) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.regular};
  `}
`;

export const EnvironmentList = styled.View``;

export const PlantList = styled.View`
  flex: 1;
  margin-top: 16px;
`;
