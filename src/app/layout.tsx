import "styles/globals.css"
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'], weight: ['400','500'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        <main className={jost.className}>
          {children}
        </main>
      </body>
    </html>
  )
}
