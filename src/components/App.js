import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { Redirect, Route, Switch } from "react-router-dom";
import data from "../data";
import Movie from "./Movie";
import MovieCards from "./Movie Cards/MovieCards";
import Navbar from "./Navbar";
import "./App.css";

const getRange=(arr,start,end)=>{
  const newArr=[];
  for(let i=start;i<=end && i<arr.length;i++){
    newArr.push(arr[i]);
  }
  return newArr;
}

function App() {
  const [totalPosts, setTotalPosts] = useState(data.length);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [paginatedMovies,setPaginatedMovies]=useState([]);
  const [currentPage, setCurrentPage] = useState(0);


  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    setTotalPosts(filteredData.length);
    setMovies(filteredData);

  }, [search]);

  useEffect(() => {
    
    setCurrentPage(0);
    setPaginatedMovies(getRange(movies,0,6));

  }, [movies])

  useEffect(() => {
    const arr=getRange(movies,currentPage,currentPage+5);
    setPaginatedMovies(arr);
  }, [currentPage]);

  // const handleDiscription=(id)=>{

  // }

  return (
    <>
    <Navbar onSearch={setSearch} />
    <div className="column relative">

      <Switch>
        <Route path="/movies" component={() => <MovieCards movies={paginatedMovies} />} />
        {/* <Route path="/:id" component={Movie} /> */}
        <Redirect to="/movies" />
      </Switch>

    </div>
    <div className="paginator">
        <Pagination
          activePage={currentPage + 1}
          itemsCountPerPage={6}
          totalItemsCount={totalPosts}
          pageRangeDisplayed={5}
          onChange={(pageNumber) => {
            setCurrentPage(pageNumber - 1);
          }}
          itemClass="page-item"
          linkClass="page-link"
        />
    </div>
    </>
  );
}


export default React.memo(App);