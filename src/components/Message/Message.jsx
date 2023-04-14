import PropTypes from 'prop-types';
import { Wrapper, Text } from './Message.styled';

export const Message = ({ text }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
};