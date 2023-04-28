import PropTypes from 'prop-types';
import { Statistic, StatisticTitle, StatisticList, StatisticListItem, StatisticLabel, StatisticPercentage } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Statistic>
          {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticList>
        {stats.map(stat => (
          <StatisticListItem key={stat.id} label={stat.label} >
            <StatisticLabel>{stat.label}</StatisticLabel>
            <StatisticPercentage>{stat.percentage}%</StatisticPercentage>
          </StatisticListItem>
        ))}
      </StatisticList>
    </Statistic>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}