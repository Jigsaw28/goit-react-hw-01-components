import PropTypes from 'prop-types';
import {
  ProfileCard,
  Image,
  DescriptionCard,
  CardName,
  CardTag,
  CardLocation,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
  Wrapper,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <DescriptionCard>
        <Wrapper>
          <Image src={avatar} alt="user avatar" className="avatar" />
        </Wrapper>
        <CardName>{username}</CardName>
        <CardTag>@{tag}</CardTag>
        <CardLocation>{location}</CardLocation>
      </DescriptionCard>

      <Stats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};
