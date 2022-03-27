import Content from '../components/content'
import NavBar from '../components/navbar'
import Loyaut from '../components/appLayaout'
import LateralMenu from '../components/lateralMenu'

export default function Home() {
  return (
    <Loyaut>
      <NavBar />
      <LateralMenu />
      <Content />
    </Loyaut>
  )
}
