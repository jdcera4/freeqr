import Content from '../components/content'
import NavBar from '../components/navbar'
import Loyaut from '../components/appLayaout'
import LateralMenu from '../components/lateralMenu'
import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'

export default function Home() {
  return (
    <Loyaut>
      <NavBar />
      <LateralMenu />
      <Content />
    </Loyaut>
  )
}

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})(() => {
  return{
    props: {}
  }
})
