import React, {FC, PropsWithChildren} from "react";
import Header from "@/components/header/Header";
import Meta from "@/components/seo/Meta";
import {IMeta} from "@/components/seo/meta.interface";


// макет нашего Арр - структура чтобы не было дублирования блоков в каждой К-те...
// все компоненты Арр -- оборачиваем в лайаут
let Layout: React.FC<PropsWithChildren<IMeta>> = ({children, title, description = ''}) => {
    return (
        <Meta title={title} description={description as string} /* или рест оператом {...restProps} */>
            <Header/>
            <main>
                {children}
            </main>
        </Meta>
    );
};

export default Layout;