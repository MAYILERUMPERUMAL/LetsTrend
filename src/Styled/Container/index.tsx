import React from 'react'
import styled, {css} from 'styled-components/native';
import {View, ViewProps} from 'react-native'
import { color } from '../../Theme';
import { Variants ,ContainerProps} from './interface';
const containerStyle={
    divider: css`
    border-color: ${color.red};
    border-bottom-width: 1;
  `,
  'divider-v': css`
    border-color: ${color.yellow};
    border-left-width: 1;
    height: 20;
  `,
  card: css`
    background-color: ${color.red};
    padding-vertical: 30;
    padding-horizontal: 20;
    border-radius: 5;
  `,
}


const getContainerVariant = (variant: Variants) => containerStyle[variant];

const Container = styled(View) <
  ViewProps
>`
  ${props => props.variant && getContainerVariant(props.variant)}
 
`;

export {Container};