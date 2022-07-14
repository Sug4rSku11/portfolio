import Head from 'next/head';
import Link from 'next/link';

export default function Contact(){
    return(
        <div>
            <Head>
                <title>Contact Me</title>
            </Head>
            <Link href='/'>Home</Link>
        </div>
    )
}