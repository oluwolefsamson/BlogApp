import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { ThemeContextProvider } from '@/Context/ThemeContext'
import ThemeProvider from '@/Provider/ThemeProvider'
import AuthProvider from '@/Provider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <AuthProvider>
        <ThemeContextProvider>
          <ThemeProvider>
          <div className='container'>
          <div className='wrapper'>
            < Navbar />
            {children}
            < Footer />
            </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
        </AuthProvider>
        </body>
    </html>
  )
}
