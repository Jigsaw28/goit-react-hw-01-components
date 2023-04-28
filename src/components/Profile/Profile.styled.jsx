import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 30px;
`

export const Image = styled.img`
  display: block;
  height: auto;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
  overflow: hidden;
  border-radius: 50%;
  background-color: aliceblue;
`;

export const ProfileCard = styled.div`
  width: 300px;
  border: 1px solid silver;
  border-radius: 10px;
`;
export const DescriptionCard = styled.div`
padding-bottom: 40px;
  background-color: #fff;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;
export const CardName = styled.p`
  font-size: 25px;
  font-weight: 800;
  padding-top: 20px;
`;
export const CardTag = styled.p`
  font-size: 20px;
  color: lightgrey;
  padding-top: 20px;
`;
export const CardLocation = styled.p`
  font-size: 20px;
  color: lightgrey;
  padding-top: 20px;
`;
export const Stats = styled.ul`
  display: flex;
  border-top: 1px solid silver;
  background-color: #ededed;
  list-style: none;
  padding-left: 0;
  justify-content: center;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);
  padding: 20px 0;
    
    &:not(:last-child) {
        border-right: 1px solid silver ;
    }
`;

export const StatsLabel = styled.span`
    padding-bottom: 10px;
    font-size: 17px;
    color: lightgrey;
`
export const StatsQuantity = styled.span`
    font-size: 17px;
    font-weight: 900;
`