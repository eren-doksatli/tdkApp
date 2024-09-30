import styled from 'styled-components/native';
import {
  compose,
  color,
  layout,
  flexbox,
  space,
  borderRadius,
  position,
} from 'styled-system';

const Button = styled.TouchableOpacity(
  compose(color, layout, flexbox, space, borderRadius, position),
);

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
