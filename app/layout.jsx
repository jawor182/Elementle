export const metadata = {
  title: 'Elementle',
  description: 'Elementle',
}

export default function RootLayout({ children }) {
 return (
    <html lang="pl">
     <link rel="icon" href="favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  )
}
