import React, {FC, useEffect, useState} from "react";
import {IUserDataSingleOne} from "@/interfaces/car.interface";
import Link from "next/link";
import styles from "./CarItem.module.scss";

const CarItem: FC<IUserDataSingleOne> = ({user}) => {
    // useState()
    // useEffect()

    return (
        <div className={styles.item}>
            <Image src={user.image} alt={user.name} width={300} height={200}/>
            <h2>{user.name}</h2>
            <small>{user.address}</small>

            <Link href={`/user/${user.id}`}> прочитать больше...</Link>
        </div>
    );
};

export default CarItem;