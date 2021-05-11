import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ photos }) {
  console.log(photos);
  const BASE_URL = 'http://localhost:1337/';
  const PHOTO_URL = 'photos/image/formats/large/url'
  return (
    <div>
      {photos.map((photo, index) => (
        <div key={photo.id}>
          <img src={`http://localhost:1337/${image.formats.medium.url}`}/>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/photos')
  const photos = await res.json();

  console.log(photos);
  return { props: { photos } }
}