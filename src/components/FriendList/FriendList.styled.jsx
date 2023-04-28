import styled from 'styled-components';

export const FriendsList = styled.ul``;

export const FriendsItem = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding-left: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  box-shadow: 2px 5px 5px silver;
`;

export const FriendsStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Wrapper = styled.div`
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
`
export const FriendsName = styled.p`
    padding-left: 10px;
    font-size: 20px;
    font-weight: 500;
`

