import React from "react";
import errorImage from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";

const ErrorPage = () => {
    return (
        <Layout>
            {/*внутрь Head пишем и увидем title поменяется сайта*/}
            <Head>
                <title>Not found</title>
            </Head>
            {/*<img src={'404.jpg'}/>*/}
            {/*размеры обязательно*/}
            <div style={{textAlign: "center"}}>
                <Image priority={true} src={"/404.jpg"} alt={""} width={450}
                       height={433}/>
                {/* на деплое такой путь работать не будет надо будет указать путь подробный например: http://localhost:3000/404.jpg*/}
            </div>
        </Layout>
    );
};

export default ErrorPage;