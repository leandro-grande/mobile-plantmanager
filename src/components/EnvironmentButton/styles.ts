import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

type Props = {
  active: boolean;
}

export const Container = styled(RectButton)<Props>`
  height: 48px;
  padding: 12px 16px;
  margin-right: 5px;

  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${({theme, active}) => active ? theme.colors.green_light : theme.colors.shape};
`;

export const Title = styled.Text<Props>`
  font-size: 14px;

  ${({theme, active}) => css`
    color: ${active ? theme.colors.green_dark : theme.colors.heading};
    font-family: ${active ? theme.fonts.semibold : theme.fonts.regular}
  `}
`;

