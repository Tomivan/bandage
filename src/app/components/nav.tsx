import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/images/navbar-brand.svg';
import navStyles from '../styles/nav.module.css';

const Nav = () => {
    <div>
        <Image src={Logo} alt="a text that reads the precious eniayekan" width={70} height={70} />
        <ul className={navStyles.ul}>
            <li className={navStyles.li}>
                <Link href="/">Home</Link>
            </li>
            <li className={navStyles.li}>
                <Link href="/revney">Shop</Link>
            </li>
            <li className={navStyles.li}>
                <Link href="/#">About</Link>
            </li>
            <li className={navStyles.li}>
                <Link href="/#">Blog</Link>
            </li>
            <li className={navStyles.li}>
                <Link href="/#">Contact</Link>
            </li>
            <li className={navStyles.li}>
                <Link href="/#">Pages</Link>
            </li>
        </ul>
    </div>
}

export default Nav