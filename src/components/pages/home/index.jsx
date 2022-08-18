import styled from 'styled-components'

import useOperations from '../../../hook/useOperations'
import BalanceCard from './components/balanceCard'
import HomeTable from './components/homeTable/index'

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`

const Home = () => {
  const { operations, isLoading, getAllOperations, deleteOperationById } =
    useOperations()
  return (
    <Wrapper>
      <BalanceCard />
      <HomeTable
        operations={operations}
        isLoading={isLoading}
        getAllOperations={getAllOperations}
        deleteOperationById={deleteOperationById}
      />
    </Wrapper>
  )
}

export default Home
