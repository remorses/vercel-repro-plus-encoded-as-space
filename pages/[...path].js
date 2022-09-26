import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ path }) {
    return <div className={styles.container}>{path}</div>
}

export function getServerSideProps({ params }) {
    return {
        props: {
            path: params.path,
        },
    }
}
