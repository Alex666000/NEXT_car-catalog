import React, {FC} from "react";
import Link from "next/link";
import styles from "src/components/header/Header.module.scss";
import {useRouter} from "next/router";

const Header: FC = () => {
    const {pathname} = useRouter();
    console.log(pathname);

    return (
        <div className={styles.header}>
            <Link href={"/"} className={pathname === '/' ? styles.active : '' }> Home </Link>
            <Link href={"/about"} className={pathname === '/about' ? styles.active : '' }> About page </Link>
        </div>
    );
};

export default Header;