import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const KeyboardAvoitViewContainer = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const Form = styled.View`
  width: 100%;
  padding: 0 32px;
  align-items: center;
`;


export const Emoji = styled.Text`
  font-size: 36px;
`;

export const Title = styled.Text`
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  line-height: 32px;

  ${({theme}) => css`
    color: ${({theme}) => theme.colors.heading};
    font-family: ${theme.fonts.semibold};
  `}
`;

type InputProps = {
  isFocused: boolean;
  isFilled: boolean;
}

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  margin: 40px 0;
  padding: 8px 16px;

  font-size: 18px;
  text-align: center;

  ${({theme, isFocused, isFilled}) => css`
    border-bottom-width: 1px;
    border-bottom-color: ${ (isFocused || isFilled) ? theme.colors.green : theme.colors.body_dark};
    color: ${theme.colors.body_dark};
    font-family: ${theme.fonts.regular};
  `}
`;

export const ButtonArea = styled.View`
  width: 70%;
`;