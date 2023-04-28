import styled from 'styled-components';

const selectColor = props => {
    switch (props.label) {
        case '.docx':
            return 'aqua';
        case '.pdf':
            return '#aa59aa';
        case '.mp3':
            return '#ff5050';
        case '.psd':
            return 'skyblue';
        default:
            return 'orange';
    }
}

export const Statistic = styled.section`
  display: block;
  width: 300px;
  border: 1px solid silver;
  text-align: center;
  padding-top: 20px;
  border-radius: 10px;
  background-color: #fff;
`;
export const StatisticTitle = styled.h2`
  text-transform: uppercase;
  padding-bottom: 20px;
  color: lightgrey;
`;
export const StatisticList = styled.ul`
  display: flex;
`;
export const StatisticListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  background-color: ${selectColor};
  color: white;
`;
export const StatisticLabel = styled.span`
  font-weight: 500;
  font-size: 17px;
  padding-bottom: 10px;
  padding-top: 10px;
`;
export const StatisticPercentage = styled.span`
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: 900;
`
