import React, { ReactNode } from "react";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import CarRentPage from "./car-rent";
interface Props {
  children?: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div>
      <LayoutHeader />

      <CarRentPage />

      <LayoutFooter />
    </div>
  );
}
