import React from "react";
import SearchAndSortCar from "../../car-rent/sortAndSearhCar";
import CarList from "../../car-rent/carList";
import { Container } from "react-bootstrap";
import axios from "axios";

export default function CarRentPage({setCarAdded,carAdded}) {
  const [searchCarByTitle, setSearchCarByTitle] = React.useState("");
  const [list,setList] = React.useState([])
  const [carLists, setCarList] = React.useState([]);
  const [dropdownValue, setDropdownValue] = React.useState('')
  React.useEffect(() => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=car",
      headers: {
        Authorization: "Bearer VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o",
      },
    };
    axios
      .request(config)
      .then((response) => {
        if (response.data.items !== undefined) {
          console.log(
            "data",
            response.data.items.map((item) => ({
              ...item.fields,
              lowerCasetitle: item.fields.title.toLowerCase(),
            }))
          );
    
          setCarList( response.data.items.map((item) => ({
            ...item.fields,
            lowerCasetitle: item.fields.title.toLowerCase(),
          })) );
          setList( response.data.items.map((item) => ({
            ...item.fields,
            lowerCasetitle: item.fields.title.toLowerCase(),
          })) )
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  React.useEffect(() => {
    if (carLists) {
   

        const result = list.filter(
          (item) => item.lowerCasetitle.includes(searchCarByTitle)
        );
        setCarList(result)
        console.log({
            'searchByTitle':result,
            'searchCarByTitle':searchCarByTitle
    })
 
    }
  }, [searchCarByTitle]);
  return (
  
      <div className="car-rent">
        <SearchAndSortCar setSearchCarByTitle={setSearchCarByTitle} list={list} carLists={carLists} setCarList={setCarList} setDropdownValue={setDropdownValue} />
        <CarList carAdded={carAdded} list={carLists} setCarAdded={setCarAdded} />
      </div>
  
  );
}
