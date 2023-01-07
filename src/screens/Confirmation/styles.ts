import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;

  background-color: ${({theme}) => theme.colors.background};
`;

export const Emoji = styled.Text`
  font-size: 80px;
`;

export const Title = styled.Text`
  margin-top: 64px;
  font-size: 24px;
  text-align: center;

  ${({theme}) => css`
    color: ${({theme}) => theme.colors.heading};
    font-family: ${theme.fonts.semibold};
  `}
`;

export const Subtitle = styled.Text`
  margin-top: 16px;
  text-align: center;
  font-size: 16px;
  line-height: 25px;

  ${({theme}) => css`
    color: ${theme.colors.body_dark};
    font-family: ${theme.fonts.regular};
  `}
`;

export const ButtonArea = styled.View`
  width: 70%;
  margin-top: 40px; 
`;