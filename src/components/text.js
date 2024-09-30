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
} from 'styled-system';

const Text = styled.Text(
  compose(typography, color, layout, flexbox, space, borderRadius, size),
);

export default Text;
