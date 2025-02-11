import React from 'react';
import { FaStore, FaUsers, FaShoppingBag, FaWallet } from 'react-icons/fa';

import { useGetProductsQuery } from '../../slices/productsApiSlice';
import { useGetUsersQuery } from '../../slices/usersApiSlice';
import { useGetOrdersQuery } from '../../slices/ordersApiSlice';

import { addCurrency } from '../../utils/addCurrency';

import Loader from '../../components/Loader';
import Meta from '../../components/Meta';

const DashboardCard = ({ title, icon, value, bgColor }) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg text-white flex flex-col items-center justify-center ${bgColor}`}>
      <div className="text-4xl">{icon}</div>
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

const Dashboard = () => {
  const { data, isLoading } = useGetProductsQuery({});
  const { data: users, isLoading: isUsersLoading } = useGetUsersQuery({});
  const { data: orders, isLoading: isOrdersLoading } = useGetOrdersQuery({});

  return (
    <>
      <Meta title="Admin Dashboard" />
      {isLoading || isUsersLoading || isOrdersLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <DashboardCard
            title="Products"
            icon={<FaStore />}
            value={data?.total}
            bgColor="bg-blue-500"
          />
          <DashboardCard
            title="Users"
            icon={<FaUsers />}
            value={users?.length}
            bgColor="bg-red-500"
          />
          <DashboardCard
            title="Orders"
            icon={<FaShoppingBag />}
            value={orders?.length}
            bgColor="bg-yellow-500"
          />
          <DashboardCard
            title="Revenue"
            icon={<FaWallet />}
            value={addCurrency(orders?.reduce((acc, item) => acc + item.totalPrice, 0))}
            bgColor="bg-green-500"
          />
        </div>
      )}
    </>
  );
};

export default Dashboard;
