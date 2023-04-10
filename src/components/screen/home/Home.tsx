import React, {FC} from "react";
import Layout from "@/components/layout/Layout";
// если локально размещен шрифт пишем local место с паблик..
// import { Titillium_Web } from 'next/font/local'
import {Titillium_Web} from "next/font/google";


const titillium = Titillium_Web({subsets: ["latin"], weight: "400"});

// эта страница ...разворачивается... из Layout
const Home: FC = () => {
    return (
        <Layout title={"Home page"} description={'We love to sale'}>
            <h1 style={titillium.style}>Hello_fills</h1>
        </Layout>
    );
};

export default Home;