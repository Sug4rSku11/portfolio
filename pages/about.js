import Head from 'next/head';
import Link from 'next/link';

export default function About(){
    return(
        <div>
            <Head>
                <title>About Me</title>
            </Head>
            <Link href='/'>Home</Link>
            About
        </div>
    )
}