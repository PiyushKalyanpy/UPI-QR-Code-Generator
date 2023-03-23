import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/generator')
  }, [])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="This is a web application that allows users to generate UPI QR codes easily. . Users can enter their UPI ID, amount, and description, and the app will generate a QR code that can be scanned by any UPI-compliant mobile app to make a payment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brandhive.svg" />
      </Head>
      <main className={styles.main}>
        <h1 className='text-4xl m-auto'>Welcome to BRANDHIVE</h1>
      </main>
    </>
  )
}
