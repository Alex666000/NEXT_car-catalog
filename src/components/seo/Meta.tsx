import React, {FC, PropsWithChildren} from "react";
import {IMeta} from "@/components/seo/meta.interface";
import Head from "next/head";
import {getTitle} from "@/utils/getTitle";

// как сделали далее везде используем как обертку
const Meta: FC<PropsWithChildren<IMeta>> = ({title, description, children}) => {
    return (
        <>
            {/*универсальный Head будет для всех*/}
            <Head>
                <title>{getTitle(title)}</title>
                {/*если description нет то страничка не будет индексироваться*/}
                {description
                    ? <>
                        <meta name={"description"} content={"description"}/>
                        {/*open graph - разметка для соц сетей*/}
                        <meta name={"og:title"} content={getTitle(title)}/>
                        <meta name={"og:description"} content={'description'}/>
                    </>
                    : <meta name={"robots"} content={"noindex, nofollow"}/>
                }
            </Head>
            {children}
        </>
    );
};

export default Meta;