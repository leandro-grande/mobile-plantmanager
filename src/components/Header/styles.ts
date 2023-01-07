import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Greeting = styled.View``;

export const Welcome = styled.Text`
  font-size: 32px;

  ${({theme}) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.light}
  `}
`;

export const Name = styled.Text`
  margin-top: -8px;
  font-size: 32px;

  ${({theme}) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.semibold}
  `}
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

