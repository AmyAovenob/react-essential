import React, { Component } from "react";


class Mobile extends Component {

    phone = e => {

        let number = document.getElementById('number').value
        let get = parseInt(number.substring(2, 3))

        if (number.length == 11) {
            switch (get) {
                case 5: alert('Teletalk');
                break;
                case 6: alert('Airtel');
                break;
                case 7: alert('Graminphone');
                break;
                case 3: alert('Graminphone');
                break;
                case 8: alert('Robi');
                break;
                case 9: alert('Banglalink');
                break;
                default: alert('Invalid number: ' + number);
            }
        } else {
            alert('Wrong mobile number')
        }
    }


    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="input-group mb-3 d-flex m-auto" style={{
                            alignItems: 'center', 
                            height: '87vh', 
                            width: '50%'
                        }}>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="number" 
                                name="number" 
                                placeholder="Search Your Mobile Operator..." 
                            />
                            <div className="input-group-append">
                                <button className="btn btn-success" onClick={ this.phone } type="submit">Go</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mobile