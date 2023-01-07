import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${({theme}) => theme.colors.blue_light};
  padding: 16px;
  border-radius: 24px;
`;

export const WaterdropImg = styled.Image`
  margin-right: 16px;
`;

export const Description = styled.Text`
  flex: 1;
  font-size: 15px;
  line-height: 20px;


  ${({theme}) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.blue};
  `}
`;