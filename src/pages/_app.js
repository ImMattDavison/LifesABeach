import Head from 'next/head'
import '@/styles/globals.css'
import { Montserrat, Inter } from 'next/font/google'

const montserrat = Montserrat({
    weight: ['400', '500', '600', '700', '800', '900'],
    styles: ['normal', 'italic'],
    subsets: ['latin'],
})

const inter = Inter({
    weight: ['400', '500', '600', '700', '800', '900'],
    styles: ['normal', 'italic'],
    subsets: ['latin'],
})


export default function App({ Component, pageProps }) {
    return (
        <>
            <style jsx global>{`
                :root {
                    --lab-font-montserrat: ${montserrat.style.fontFamily};
                    --lab-font-inter: ${inter.style.fontFamily};
                }
            `}
            </style>
            <Component {...pageProps} />
        </>
    )
}
