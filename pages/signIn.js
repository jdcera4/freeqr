import { useState } from 'react';
import Layout from '../components/appLayaout'
import styles from '../styles/Login.module.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  function credentials(email, password){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      router.push('/')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(error)
    });
  }

    return (
      <Layout>
        <div className="row" id={styles.container}>
          <form className="col s12" onSubmit={
            e => {e.preventDefault()
              credentials(email, password)
            }}>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" onChange={e => setEmail(e.target.value)} placeholder='Email'/>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" onChange={e => setPassword(e.target.value)} placeholder='Password'/> 
              </div>
            </div>  
            <div className="row">
              <div className="input-field col s12">
                <button className="btn" id={styles.button}>Submit</button>
                <div className='btn' id={styles.authbtn}>
                  <Link href='/auth' style={{width: '100%'}}>Login</Link>
                </div>    
              </div>
            </div>
          </form>
        </div>
      </Layout>
  )
}
