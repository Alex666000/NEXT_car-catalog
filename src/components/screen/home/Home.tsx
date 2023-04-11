import React, {FC} from "react";
import Layout from "@/components/layout/Layout";
// если локально размещен шрифт пишем local место с паблик..
// import { Titillium_Web } from 'next/font/local'
import {Titillium_Web} from "next/font/google";
import {IUserData} from "@/interfaces/car.interface";
import CarItem from "@/ui/CarItem";


const titillium = Titillium_Web({subsets: ["latin"], weight: "400"});

// эта страница ...разворачивается... из Layout
// тут данные не получаем с сервака а на уровне ниже то есть в index.tsx
const Home: FC<IUserData> = ({users}) => {
    return (
        <Layout
            title={"Home page"}
            description={"We love to sale"}>
            <h1 style={titillium.style}>Hello_fills</h1>

            {users.length
                ? users.map(user => <CarItem
                    key={user.id}
                    user={user}/>)
                : <div>Cars not found!</div>}
        </Layout>
    );
};

export default Home;