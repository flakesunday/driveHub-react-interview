import React, { ReactNode } from "react";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import CarRentPage from "./car-rent";
import CartModal from "../cart-modal";

export default function DriveHubPage() {
  const [carAdded, setCarAdded] = React.useState([])
  const [showModal, setShowModal] = React.useState(false)
  return (
    <div>
      <LayoutHeader setShowModal={setShowModal} />

      <CarRentPage />

      <LayoutFooter />
     <CartModal showModal={showModal} setShowModal={setShowModal}/>
    </div>
  );
}
