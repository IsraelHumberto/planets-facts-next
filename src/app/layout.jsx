import '@/styles/globals.scss'
import '@/styles/mixins.scss'
import '@/styles/variables.scss'

import { Antonio, League_Spartan } from 'next/font/google'
import { Header } from '@/components';
import { PlanetsContextProvider } from '@/context/contextPlanets';

const antonio = Antonio({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-antonio'
})

const spartan = League_Spartan({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const metadata = {
    title: 'Planets Fatcs - FrontEnd Mentor',
    description: 'Study project created by Israel Humberto from frontend mentor',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${spartan.className} ${antonio.variable}`}>
                <PlanetsContextProvider>
                    {children}
                </PlanetsContextProvider>
            </body>
        </html>
    )
}
