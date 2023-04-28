import PropTypes from 'prop-types';
import { FriendsList, FriendsItem, FriendsStatus, Wrapper, FriendsName } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendsItem key={friend.id}>
          <FriendsStatus isOnline={friend.isOnline}>
            {friend.isOnline}
          </FriendsStatus>
          <Wrapper>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
          </Wrapper>
          <FriendsName>{friend.name}</FriendsName>
        </FriendsItem>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
