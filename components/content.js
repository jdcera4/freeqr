import styles from '../styles/Home.module.css'
import { useState } from 'react'
import QRCode from 'qrcode.react';
import Image from 'next/image';
import img from '../public/images/files-white.89efadaf.png'

export default function Content(){
  const [file, setFile] = useState('hola')

  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <h1 className={styles.title}>1.Sube Tu Menú</h1>
            <div className="card indigo darken-2" id={styles.containerfile}>
              <div className="card-content white-text">
                <form action="#">
                  <div className="file-field input-field">
                  <div className="btn indigo darken-4" id={styles.input}>
                      <div className="o-pdf-icon" style={{marginTop: '20px'}}>
                        <Image src={img} alt="Files" width={50} height={50} />
                      </div>
                      <input type="file" multiple onChange={e => setFile(e.target.value)} />
                    </div>
                      <input   />
                  </div>
                </form>
              </div>
            </div>
      </div>
      <div className={styles.col}>
        <h1 className={styles.title}>2.Obtén Tu Código QR</h1>
        <div className="card-content white-text" style={{textAlign: 'center'}}>
          <QRCode id="qrCodeEl" value={file} title='hola' level='H' size={300} />
        </div>
          <input
            type="button"
            className="btn indigo darken-1"
            value="Download"
            onClick={downloadQRCode}
            id={styles.download}
          />
      </div>
    </div>
  )
}