import type { Metadata } from 'next'
import './styles/globals.scss'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export const metadata: Metadata = {
    title: 'Akiri',
    description: 'Anti Money Laundering'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className=''>
                <Header />
                <div className='container mx-auto flex flex-row gap-[30px] py-[30px] px-4 lg:px-0 items-start'>
                    <div className='w-[23%] bg-theme-gradient-2 relative flex flex-col items-stretch justify-start rounded-lg text-white p-9 min-h-screen sidebar overflow-hidden'>
                        <Sidebar />
                    </div>
                    <div className='w-[77%]'>{children}</div>
                </div>
            </body>
        </html>
    )
}
