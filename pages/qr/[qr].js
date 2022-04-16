import { useEffect, useState } from 'react';
import Layout from '../../components/appLayaout'
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { useRouter } from 'next/router'

export default function Qr(){
  const [urls, setUrl] = useState([])
  const router = useRouter()
  const { qr } = router.query

  useEffect(() => {
    if (qr && !urls.length){
      const storage = getStorage();
      const listRef = ref(storage, qr);
      listAll(listRef)
        .then((res) => {
          let urls_ = []
          res.items.forEach((itemRef) => {
            urls_.push(getDownloadURL(itemRef))
              
          });
          Promise.all(urls_)
            .then((url) => {
              console.log(url)
              setUrl(url)
            })
        }).catch((error) => {
          // Uh-oh, an error occurred!
        });
    }
  },[qr])
  return (
    <Layout>
      <div style={{width: '95%', margin: 'auto'}}>
        <h1>id: {qr}</h1>
        {urls.map(item => <embed style={{width: '100%', height: '60%'}} key={item} src={item} />)}
      </div>
    </Layout>
  )
}