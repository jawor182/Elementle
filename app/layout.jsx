export const metadata = {
  title: 'Elementle',
  description: 'Elementle',
}

export default function RootLayout({ children }) {
 return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
