import React, { Component } from 'react';
import "./search.css";
// import API from "../utils/API";
// import SearchBtn from "../Search/SearchBtn";


class Search extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch('/api/parameters', {
          method: 'POST',
          body: data,
        });
    
      }

      
    render() {
        return (
            <div className="container">

                <div id="user-input">

                    <form onSubmit={this.handleSubmit}>
                        <h4>Search for a flight</h4>
                        <div className="form-group">
                            <label htmlFor="selectAirline">Select Airline</label>
                            <select className="form-control" id="select-airline">
                                <option value="AAL">American Airlines - AA</option>
                                <option value="BAW">British Airways - BA</option>
                                <option value="CAP">Cathay Pacific - CX</option>
                                <option value="ETD">Etihad Airways - EY</option>
                                <option value="HAL">Hawaiian Airlines - HA</option>
                                <option value="QFA">Qantas - QF</option>
                                <option value="QTR">Qatar Airways - QR</option>
                                <option value="UAL">United Airlines - UA</option>
                                <option value="VIR">Virgin Atlantic Airways - VS</option>
                                <option value="VOZ">Virgin Australia - VA</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="flightNumber">Flight Number</label>
                            <input type="text" className="form-control" id="flight-number" name="flightNumber" placeholder="----------------" />
                        </div>

                        <button className="btn btn-secondary" href="/Results" type="submit">Submit</button>
                        

                    </form>

                </div>
                console.log(event.target.flightNumber.value);

            </div>
        );

    }

}

export default Search;