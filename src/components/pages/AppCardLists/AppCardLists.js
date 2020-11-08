import React from 'react';
import "./AppCardLists.css";
import { Button } from '../../Button';
import { FaTrash } from 'react-icons/fa'; 
import { BsPencilSquare } from 'react-icons/bs';

class AppCardLists extends React.Component {
    render() {
      const apps = this.props.apps;

      return (
        apps.map((app, index) =>
        <div className="card" key={index}>
          <div className="card-body">
            <h1 className="card-title">{app.AppID}</h1>
              <p className="card-text">App ID : {app.AppID}</p>
              <p className="card-text">App Acronym : {app.AppAcronym}</p>
              <p className="card-text">App Name : {app.AppName}</p>
              <p className="card-text">Primary : {app.Primary}</p>
              <p className="card-text">Second : {app.Second}</p>
              <p className="card-text">Software : {app.Software}</p>
              <p className="card-text">GO-Live Date : {app.GoLivedate}</p>
              <p className="card-text">Tier : {app.Tier}</p>
              <p className="card-text">Note : {app.Note}</p>
              <Button buttonSize='btn--medium' buttonColor='green'>More infirmation</Button>
              <Button buttonStyle='btn--outline'> <FaTrash /></Button>
              <Button buttonStyle='btn--outline'><BsPencilSquare /></Button>
          </div>
        </div>
      )
    );
  };
}

export default AppCardLists;