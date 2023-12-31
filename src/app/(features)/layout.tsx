import '../_styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Zen_Kaku_Gothic_New, Noto_Sans_JP } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const zen_kaku_gothic = Zen_Kaku_Gothic_New({
    weight: ["400"],
    subsets: ['latin']
})

const noto_sans_jp = Noto_Sans_JP({
    weight: ["300"],
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html data-theme="light" lang="ja" className={zen_kaku_gothic.className}>
            {children}
        </html>
    )
}