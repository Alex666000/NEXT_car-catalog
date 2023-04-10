import React, {FC} from "react";
import Header from "@/components/header/Header";

interface PropsWithChildren {

}

// макет нашего Арр - структура чтобы не было дублирования блоков в каждой К-те...
// все компоненты Арр -- оборачиваем в лайаут
let Layout: React.FC<PropsWithChildren>;
Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;