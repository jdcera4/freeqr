import Layout from '../../components/appLayaout'
import Link from 'next/link'

export default function qr() {
  return (
    <Layout>
    <div className="container">
      <div>
        <h1 style={{textAlign: 'center', fontSize: '80px'}}>FreeQr</h1>
      </div>
      <div>
        <p style={{textAlign: 'center', fontSize: '40px'}}>Sube tu menú y genera tu codigo qr</p>
      </div>
      <div className='btn indigo darken-4' style={{width: '100%'}}>
        <Link href="/">Generar QR</Link>
      </div>
    </div>
    </Layout>
  )
}