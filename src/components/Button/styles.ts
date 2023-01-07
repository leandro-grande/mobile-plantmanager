import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";


export const Container = styled(RectButton)<{ enabled?: boolean }>`
  width: 100%;
  height: 56px;
  background-color: ${({theme}) => theme.colors.green};
  border-radius: 16px;

  align-items: center;
  justify-content: center;
  opacity: ${({ enabled }) => enabled ? '1' : '0.5'}
`;

export const ButtonTitle = styled.Text`
  font-size: 16px;

  ${({theme}) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.semibold}
  `}

`;