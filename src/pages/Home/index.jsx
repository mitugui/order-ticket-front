import HomeContent from '../../components/HomeContent'
import SideBar from '../../components/SideBar'
import { Body } from './styles.js'

function Home() {
  return (
    <Body>
      <SideBar />
      <HomeContent />
    </Body>
  )
}

export default Home