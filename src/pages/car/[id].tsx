import React from "react";
import {NextPage} from "next";
import {useRouter} from "next/router";

const CarPage: NextPage = () => {
    // const {asPath, pathname} = useRouter();
    // console.log(asPath, pathname);

    // внутри квери сидит id по номеру...
   /* const {query} = useRouter();
    console.log(query.id);*/

    /* push replace (тоже самое что и push - только енльзя перемещаться по истории назад к примеру..) удет заменять наш url */
    const {push,replace} = useRouter();


    return (
        <div>
            <button onClick={ () => push('/') }>Go home</button>

            {/*нажимаем назад перейдем на главную Некста страницу и при нажатии на стрелку назад обратно не вернемся*/}
            <button onClick={ () => replace('/') }>Go home</button>
        </div>
    );
};

export default CarPage;