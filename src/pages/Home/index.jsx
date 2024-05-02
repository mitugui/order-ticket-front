import CardsContainer from '../../components/CardsContainer'
import Search from '../../components/Search'
import SideBar from '../../components/SideBar'
import { Body, Content } from './styles.js'

function Home() {
  return (
    <Body>
      <SideBar />
      <Content>
        <Search />
        <CardsContainer />
      </Content>
    </Body>
  )
}

export default Home