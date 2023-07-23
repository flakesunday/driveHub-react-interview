import React from "react";
import { Container, Form } from "react-bootstrap";

export default function SearchAndSortCar({
  setSearchCarByTitle,
  setCarList,
  carLists,
  list,
  setDropdownValue,
}) {
  const convertLetterToLowerCase = (e) => {
    setSearchCarByTitle(e.toLowerCase());
  };
  React.useEffect(() => {
    console.log("carLists", carLists);
  }, [carLists]);
  const sortByTitleOrPrice = (e) => {
    console.log(e);
    switch (e) {
      case "none":
        console.log("name");

        setCarList([...list]);
        break;
      case "maxToMin":
        console.log("name");

        setCarList([...list].sort((a, b) => b.price - a.price));
        break;
      case "minToMax":
        console.log("price");
        setCarList([...list].sort((a, b) => a.price - b.price));
        break;
      case "AToZ":
        setCarList([...list].sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case "ZToA":
        setCarList([...list].sort((a, b) => b.title.localeCompare(a.title)));
        break;
      default:
      // code block
    }
  };
  return (
    <div className="search-section my-3">
      <Container className="wrap-search-section">
        <div className="search-section-title">
          <h2>Car Available</h2>
        </div>
        <div className=" search-section-input">
          <Form className="me-sm-3 search-by-title">
            <Form.Control
              placeholder="ค้นหารถ"
              onChange={(e) => {
                convertLetterToLowerCase(e.target.value);
              }}
           
            />
          </Form>

            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setDropdownValue(e.target.value);
                sortByTitleOrPrice(e.target.value);
              }}
            >
              <option selected hidden>
                Sort By ...
              </option>
              <option value="none">none</option>
              <option value="minToMax">Sort By Price: Low-high</option>
              <option value="maxToMin">Sort By Price: high-low</option>

              <option value="AToZ">Sort By Title A-Z</option>
              <option value="ZToA">Sort By Title Z-A</option>
            </Form.Select>
         
        </div>
      </Container>
    </div>
  );
}
