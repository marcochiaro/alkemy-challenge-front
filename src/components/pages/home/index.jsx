import styled from 'styled-components'

import BalanceCard from './components/balanceCard'
import HomeTable from './components/homeTable/index'

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`

const Home = () => {
  return (
    <Wrapper>
      <BalanceCard />
      <HomeTable />
    </Wrapper>
  )
}

export default Home
