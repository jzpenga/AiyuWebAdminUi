import React from 'react'
import AllAssetCard from './components/AllAssetCard'
import IncrementCard from './components/IncrementCard'
import UserIncomePayCard from './components/UserIncomePayCard'
import ChargeCard from './components/ChargeCard'
import IncomeCancelCard from './components/IncomeCancelCard'

class Asset extends React.Component{

  render(){
    return <div>
      <AllAssetCard/>
      <IncrementCard/>
      <UserIncomePayCard/>
      <ChargeCard/>
      <IncomeCancelCard/>
    </div>;
  }
}

export default Asset;
