import '../styles/globals.css'
import initAuth from '../initAuth'
import { ContextAuthProvider } from "../context/AuthContext";
import { Fragment } from 'react';

initAuth()

function MyApp({ Component, pageProps }) {
  return (
    <ContextAuthProvider>
      <Component {...pageProps} />
    </ContextAuthProvider>
  )
}

export default MyApp
