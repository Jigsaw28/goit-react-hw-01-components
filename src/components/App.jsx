import user from './Profile/user.json';
import stats from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './Transactions/transactions.json'
import { Transactions } from './Transactions/Transactions.jsx';
import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
      </Container>
  );
};


export default App;
