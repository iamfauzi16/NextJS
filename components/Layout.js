
import Head from 'next/head'

import Navbar from './Navbar'

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="https://parsinta.com/images/logo/parsinta-logo-mark.svg" />
            </Head>

            <Navbar/>

            <div className="mt-8">
                {props.children}
            </div>
        </div>
    )
}
