import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {
  compose,
  color,
  layout,
  flexbox,
  space,
  typography,
  borderRadius,
  size,
  shadow,
} from 'styled-system';
import theme from '../utils/theme';

const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor],
}))(
  compose(
    typography,
    color,
    layout,
    flexbox,
    space,
    borderRadius,
    size,
    shadow,
  ),
);

export default Input;
