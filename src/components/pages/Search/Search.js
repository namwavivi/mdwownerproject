import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import contacts from './owner.json';
import { Button } from '../../Button';
import './Search.css'
import { FaTrash } from 'react-icons/fa'; 
import { BsPencilSquare } from 'react-icons/bs';
import SearchBox from "../SearchBox.js/SearchBox";

function Search({
}) 

{
  console.log('Search DOM')

  return (
    <>
      <SearchBox />
      <div className="row">
        <div className="col-4">
          <ReactBootstrap.Dropdown>
            <ReactBootstrap.Dropdown.Toggle variant="success" id="dropdown-basic">
              APP ID
            </ReactBootstrap.Dropdown.Toggle>
            <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()"></input>
            <ReactBootstrap.Dropdown.Menu>
              {contacts.map((el, index) => {
            return (
              <ReactBootstrap.Dropdown.Item href="#/action-1">{el.AppID}</ReactBootstrap.Dropdown.Item>
            );
              })}
            </ReactBootstrap.Dropdown.Menu>
          </ReactBootstrap.Dropdown>
        </div>
        <div className="col-8">
          {contacts.map((el, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-body">
                  <h1 className="card-title">{el.AppID}</h1>
                    <p className="card-text">App ID : {el.AppID}</p>
                    <p className="card-text">App Acronym : {el.AppAcronym}</p>
                    <p className="card-text">App Name : {el.AppName}</p>
                    <p className="card-text">Primary : {el.Primary}</p>
                    <p className="card-text">Second : {el.Second}</p>
                    <p className="card-text">Software : {el.Software}</p>
                    <p className="card-text">GO-Live Date : {el.GoLivedate}</p>
                    <p className="card-text">Tier : {el.Tier}</p>
                    <p className="card-text">Note : {el.Note}</p>
                    <Button buttonSize='btn--medium' buttonColor='green'>More infirmation</Button>
                    <Button buttonStyle='btn--outline'> <FaTrash /></Button>
                    <Button buttonStyle='btn--outline'><BsPencilSquare /></Button>
                </div>
              </div>
            );
          })}
      </div>
    </div>


      

      
    </>
  );
}



export default Search;