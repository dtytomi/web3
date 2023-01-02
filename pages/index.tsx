import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

const App = dynamic (
  () => {
    return import("./_app")
  },
  { ssr: false }
)

const Home: NextPage = () => {
  return <App />;
}

export default Home
