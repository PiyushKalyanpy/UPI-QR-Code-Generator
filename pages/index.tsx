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
        <title>ShufflePay - Generate UPI QR code</title>
        <link rel="canonical" href="https://shufflepay.vercel.app/generator" />
        <meta name="description" content="This is a web application that allows users to generate UPI QR codes easily. . Users can enter their UPI ID, amount, and description, and the app will generate a QR code that can be scanned by any UPI-compliant mobile app to make a payment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brandhive.svg" />
        {/* add href land and content for serp  */}
        <link rel="canonical" href="https://shufflepay.vercel.app/" />
        <meta name="description" content="This is a web application that allows users to generate UPI QR codes easily. . Users can enter their UPI ID, amount, and description, and the app will generate a QR code that can be scanned by any UPI-compliant mobile app to make a payment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brandhive.svg" />
        <meta name="theme-color" content="#2D3748" />
        <meta property="og:url" content="https://shufflepay.vercel.app/" />
        <meta property="og:title" content="ShufflePay" />
        <meta property="og:description" content="This is a web application that allows users to generate UPI QR codes easily. . Users can enter their UPI ID, amount, and description, and the app will generate a QR code that can be scanned by any UPI-compliant mobile app to make a payment." />
        <meta property="og:image" content="https://shufflepay.vercel.app/shufflepay.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="ShufflePay" />
        <link rel="apple-touch-icon" sizes="120x120" href="/brandhive.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/brandhive.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/brandhive.svg" />
      </Head>
      <main className={styles.main}>
        <h1 className='text-4xl m-auto'>Welcome to BRANDHIVE</h1>
      </main>
    </>
  )
}
