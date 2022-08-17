import styled from 'styled-components'

import AddressInput from './components/addressInput'
import BalanceCard from './components/balanceCard'
import HomeTable from './components/homeTable/index'

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`

const Table = () => {
  return (
    <Wrapper>
      <AddressInput />
      <BalanceCard />
      <HomeTable />
    </Wrapper>
  )
}

export default Table
