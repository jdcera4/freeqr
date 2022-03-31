import styles from '../styles/lateral.module.css'
import Link from 'next/link'

export default function LateralMenu(){


  return (
    <div>
      <div className={styles.sideBar}>
        <button className={styles.btnicon}>
          <i className="material-icons">qr_code</i>
        </button> 
      </div>
      <div className={styles.menus}>
        <h2 className={styles.title}>Menús</h2>
        <button className='btn indigo darken-4' style={{position:'absolute', bottom: '20px', width: '180px', marginLeft: '80px'}} >
          <Link  href='/auth'>Logout</Link>
        </button>
      </div>
    </div>

  )
}