import type { Metadata } from 'next'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'EBATEC | Parques infantiles, biosaludables y soluciones en madera',
  description: 'Soluciones integrales en parques infantiles, equipos biosaludables y estructuras en madera inmunizada. Diseño, fabricación e instalación en toda Colombia.',
  keywords: 'parques infantiles, equipos biosaludables, parques en madera, calistenia, mobiliario urbano',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-ebatec-dark text-white antialiased">
        {children}
      </body>
    </html>
  )
}