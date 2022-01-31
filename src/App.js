
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {v4 as uuidv4 } from "uuid";
import Table from './Components/Table';
import Pagination from './Components/Pagination';
import './App.css';
import { CLIENTS_PER_PAGE } from './utils/constants';

function App() {
  const [ clients, setClients ]= useState([]);
  const [ loading, setLoading ]= useState(false);
  const [ page, setPage ]= useState(1);
  const [ totalPages, setTotalPages ]=useState(0);
  
  console.log("totalPages",totalPages)

  
  useEffect(()=>{
    const fetchData=async()=>{
      

      try{
        setLoading(true);
        const res=await axios.get("data.json");
        const dataArr=res.data
        dataArr.map((obj)=>obj.id=uuidv4());
        setClients(dataArr);
        setLoading(false);
        setTotalPages(Math.ceil( dataArr.length/ CLIENTS_PER_PAGE));

      }catch(e){
        console.log(e);
      };

    }
    fetchData();
  },[])




  return (
    <div className="App">
        { loading ? <p>Loading</p> : <>
         <Table clients={clients} page={page}/>
         <Pagination totalPages={totalPages} page={page} setPage={setPage}/>
        
        </> }

     
    </div>
  );
}

export default App;
