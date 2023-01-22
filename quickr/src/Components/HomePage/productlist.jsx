import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/category/action";
// import { Productcard } from "./Productcard";
import styled from "styled-components";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { Image } from "@chakra-ui/react";
export const Booklist = () => {
    const {param}=useParams()
    console.log(param)
  const books = useSelector((store) => store.category.Products);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log("location", location);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    //if i dont have any books in redux,then make the api call
    if (location || books.length === 0) {
      const sortBy = searchParams.get("sort");
      const getBookParms = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy && "release_year",
          _order: sortBy,
        },
      };
      dispatch(getProducts(getBookParms,param));
    }
  }, [books.length, dispatch, location.search]);
  return (
    <>
      {books.length > 0 &&
        books.map((singlebook, i) => {
          return (
            <Bookcardwrapper key={singlebook.id}>
                <Image src={singlebook.image}/>
              {/* <Productcard bookdata={singlebook} /> */}
            </Bookcardwrapper>
          );
        })}
    </>
  );
};

const Bookcardwrapper = styled.div`
  width: 200px;
`;