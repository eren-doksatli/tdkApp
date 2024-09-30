import styled from 'styled-components/native';
import {
  compose,
  color,
  layout,
  flexbox,
  space,
  borderRadius,
  border,
} from 'styled-system';

const Box = styled.View(
  compose(color, layout, flexbox, space, borderRadius, border),
);

export default Box;
