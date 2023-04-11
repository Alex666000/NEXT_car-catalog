import Home from "@/components/screen/home/Home";
import {
    GetServerSideProps,
    GetStaticPaths,
    GetStaticPathsContext,
    GetStaticProps,
    NextPage
} from "next";
import {IUserData, IUserDataSingleOne} from "@/interfaces/car.interface";
import {UserService} from "@/components/services/user.service";
import CarDetail from "@/components/screen/car-detail/Car-detail";
import {ParsedUrlQuery} from "querystring";

let CarDetailPage: NextPage<IUserDataSingleOne> = ({user}) => {

    return <CarDetail user={user}/>;
};
export default CarDetailPage;

// getStaticPath
interface Params extends ParsedUrlQuery {
    id: string;
}

export let getStaticPath: GetStaticPaths<Params> = async () => {
    // берем все машины
    const users = await UserService.getAll();

    return {
        // берем все пути которые будут существовать
        paths: users.map(user => (
            // возвращаем объект
            {
                params: {
                    id: user.id.toString()
                }
            })),
        // если стр не существует  сделать запрос на сервак...
        fallback: "blocking", // can also be true or 'blocking'
    };

};

// в params будет id после слеша в url...
// будет ошибка - так как если  мы грузим динамичные значения то надо дать понять Нексту какие данные ему подготовить для этого какие id у нас будут существовать
export let getStaticProps: GetStaticProps<IUserDataSingleOne> = async ({params = ""}) => {
    // все что тут пишем будет происходить на сервере
    // возвращаем одного пользователя
    const user = await UserService.getById(String(params?.id));
    return {
        props: {user},
        /*каждые 60 сек будет ревалидировать*/
        revalidate: 60,
    };
};


