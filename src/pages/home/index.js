import React from 'react';
import AssetCard from './components/AssetCard';
import UserCard from './components/UserCard';
import UserRankingCard from './components/UserRankingCard';



class Home extends React.Component {
  render() {
    return <div>
      <AssetCard/>
      <UserCard/>
      <UserRankingCard/>

    </div>;
  }
}

export default Home;
