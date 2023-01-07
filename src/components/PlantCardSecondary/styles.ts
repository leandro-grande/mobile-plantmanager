import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";
import { SvgFromUri } from "react-native-svg";
import { Animated } from "react-native";


export const Container = styled(RectButton)`
  width: 100%;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.shape};

  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  margin-top: 8px;
`;

export const PlantSvg = styled(SvgFromUri)``;

export const PlantName = styled.Text`
  flex: 1;
  font-size: 13px;
  margin-left: 10px;

  ${({theme}) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.semibold};
  `}
`;

export const Details = styled.View`
  align-items: flex-end;
`;

export const HourLabel = styled.Text`
  font-size: 13px;

  ${({theme}) => css`
    color: ${theme.colors.body_light};
    font-family: ${theme.fonts.regular};
  `}

`;

export const Hour = styled.Text`
  font-size: 13px;

  ${({theme}) => css`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.regular};
  `}
`;

export const AnimatedContainer = styled(Animated.View)``;

export const RemoveButton = styled(RectButton)`
  width: 100px;
  height: 75px;
  margin-top: 15px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.red};
  position: relative;
  right: 15px;
  padding-left: 15px;

  align-items: center;
  justify-content: center;
`;