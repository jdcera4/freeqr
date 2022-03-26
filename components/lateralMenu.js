import styles from '../styles/lateral.module.css'
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
      </div>
    </div>

  )
}