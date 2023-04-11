import React, {FC} from "react";
import {IUserDataSingleOne} from "@/interfaces/car.interface";
import Layout from "@/components/layout/Layout";
import CarItem from "@/ui/CarItem";

const CarDetail: FC<IUserDataSingleOne> = ({user}) => {
    return (
        <Layout title={user.name} description={"Good user"}>
            <CarItem user={user}/>
        </Layout>
    );
};

export default CarDetail;