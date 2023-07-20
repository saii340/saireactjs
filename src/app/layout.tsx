'use client'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import { Engine } from '@/styletron'

import '../reset.css'

export const metadata = {
  title: 'AURO PRO'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <StyletronProvider value={Engine}>
          <BaseProvider theme={LightTheme}>
            {children}
          </BaseProvider>
        </StyletronProvider>
      </body>
    </html>
  )
}
