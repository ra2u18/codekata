'use client';

import { useUserStore } from "@/store/user-store";
import { CreateUser } from "./create-user";
import { RenderUserDetails } from './render-user-details';

export const Dashboard = () => {
  const { name, surname, topic, imageUrl } = useUserStore(); 
  const renderUserCard = name && surname && topic && imageUrl;

  return renderUserCard ? (
    <RenderUserDetails name={name} surname={surname} topic={topic} imageUrl={imageUrl} />
  ) : (
    <CreateUser />
  );
}
