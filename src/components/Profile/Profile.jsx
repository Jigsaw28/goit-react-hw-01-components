import { ProfileCard, Image, DescriptionCard, CardName, CardTag, CardLocation, Stats, StatsItem } from "./Profile.styled"

export const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <ProfileCard>
      <DescriptionCard>
        <Image
          src={avatar}
          alt="user avatar"
          className="avatar"
        />
        <CardName>{username}</CardName>
        <CardTag>@{tag}</CardTag>
        <CardLocation>{location}</CardLocation>
      </DescriptionCard>

      <Stats>
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};
