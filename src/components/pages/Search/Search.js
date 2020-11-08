import React from "react";
import contacts from './owner.json';
import * as ReactBootstrap from "react-bootstrap";
import './Search.css'
import SearchBox from "../SearchBox.js/SearchBox";
import AppCardLists from "../AppCardLists/AppCardLists";

// const AppCardLists = ({ apps }) => {
//   return apps.map((app, index) =>
//     <div className="card" key={index}>
//       <div className="card-body">
//         <h1 className="card-title">{app.AppID}</h1>
//           <p className="card-text">App ID : {app.AppID}</p>
//           <p className="card-text">App Acronym : {app.AppAcronym}</p>
//           <p className="card-text">App Name : {app.AppName}</p>
//           <p className="card-text">Primary : {app.Primary}</p>
//           <p className="card-text">Second : {app.Second}</p>
//           <p className="card-text">Software : {app.Software}</p>
//           <p className="card-text">GO-Live Date : {app.GoLivedate}</p>
//           <p className="card-text">Tier : {app.Tier}</p>
//           <p className="card-text">Note : {app.Note}</p>
//           <Button buttonSize='btn--medium' buttonColor='green'>More infirmation</Button>
//           <Button buttonStyle='btn--outline'> <FaTrash /></Button>
//           <Button buttonStyle='btn--outline'><BsPencilSquare /></Button>
//       </div>
//     </div>
//   );
// };

class Search extends React.Component {
  constructor (props) {
    super();
    this.state = {
      filteredApps: [],
      apps: { contacts },
      searchKeyword: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.testFilter = this.testFilter.bind(this);
  }

  //Print app lists
  componentDidMount() {
    console.log(this.state.apps);
  }
  
  //Function Arrows
  testFilter = () => {
    const { apps, searchKeyword } = this.state;
    // const appFiltered = contacts.filter( app => app.AppName.includes("ORPG"));
    const appFiltered = contacts.filter( app => app.AppID == searchKeyword);
    console.log(appFiltered.length);

    if(appFiltered.length == 0) {
      console.log("Get into filter function !!");
      this.setState({ filteredApps: [] });
    }

    console.log(appFiltered);
    console.log("This is my keyword" - searchKeyword);
    this.setState({ filteredApps: appFiltered});
  }

  handleChange (event) {
    this.setState({
      searchKeyword: event.target.value
    });
  }

  //Render Data from json files
  render() {
    const { apps, filteredApps, searchKeyword } = this.state;

    return (
      <>
        <SearchBox />
        <div className="row">
          <div className="col-4">
            <ReactBootstrap.Dropdown>
              {/* Toggle Dropdown */}
              <ReactBootstrap.Dropdown.Toggle variant="success" id="dropdown-basic">
                APP ID
              </ReactBootstrap.Dropdown.Toggle>
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
            <button onClick={() => this.testFilter()}>Test Filters</button>
            <form>
              <label>
                Name:
                <input type="text" name="name" onChange={ this.handleChange }/>
              </label>
            </form>
            
            {/* Show App Content by Default */}
            {/* <AppCardLists apps={filteredApps.length > 0 ? filteredApps: apps.contacts } /> */}

            {/* Hide App infomation */}
            <AppCardLists apps={filteredApps} />

            {/* {contacts.map((el, index) => {
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
            })} */}


        </div>
      </div>
      </>
    );
  }

}



export default Search;