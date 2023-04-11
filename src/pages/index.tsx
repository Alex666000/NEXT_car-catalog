import Home from "@/components/screen/home/Home";
import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import {IUserData} from "@/interfaces/car.interface";
import {UserService} from "@/components/services/user.service";

// это главная страница которая открывается по пути http://localhost:3000
// тут переадресовываем передаем данные в Home
let HomePage: NextPage<IUserData> = ({users}) => {

    return <Home users={users}/>;
};
export default HomePage;


// SSG + ISR сделали та как добавили revalidate:
export let getStaticProps: GetStaticProps<IUserData> = async () => {
    // все что тут пишем будет происходить на сервере
    const users = await UserService.getAll();
    return {
        props: {users},
        /*каждые 60 сек будет ревалидировать*/
        revalidate: 60,
    };
};

// SSR сделали:
// getServerSideProps
export let getServerSideProps: GetServerSideProps<IUserData> = async () => {
    // все что тут пишем будет происходить на сервере
    const users = await UserService.getAll();
    return {
        props: {users}
    };
};

/*
на этапе разработки getServerSideProps ничем не отличается от getStaticProps - разница в режиме продакшена
 */
