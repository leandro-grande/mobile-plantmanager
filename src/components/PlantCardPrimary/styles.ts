import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";
import { SvgFromUri } from "react-native-svg";


export const Container = styled(RectButton)`
  height: 154px;
  width: 45%;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.shape};

  margin: 10px;
  align-items: center;
  justify-content: center;
`;

export const PlantSvg = styled(SvgFromUri)``;

export const PlantName = styled.Text`
  margin-top: 8px;
  font-size: 13px;

  ${({theme}) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.semibold};
  `}
`;