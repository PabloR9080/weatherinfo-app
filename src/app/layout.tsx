import './globals.css';

export const metadata = {
  title: 'WeatherInfo App',
  description: 'Check the weather for your city',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className='grid grid-rows-[max-content,1fr] h-screen'>{children}</body>
    </html>
  )
}
