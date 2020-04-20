import React from 'react';
import moment from 'moment'


const Session = ({sessionLengthSec,decrementSessionLength,incrementSessionLength}) => {
   
    const sessionLengthMin =  moment.duration(sessionLengthSec,'s').minutes();

    return(
        <div>
            <h2>Session Length</h2>
        <div className="input-group center">
          <span className="input-group-btn">
              <button type="button" className="btn btn-danger btn-number"  data-type="minus" onClick={decrementSessionLength}>
                <span className="glyphicon glyphicon-minus"></span>
              </button>
          </span>
          <input type="text" name="break" className="form-control input-number" value={sessionLengthMin} min="0" max="60" readOnly/>
          <span className="input-group-btn">
              <button type="button" className="btn btn-success btn-number" data-type="plus" onClick={incrementSessionLength} >
                  <span className="glyphicon glyphicon-plus"></span>
              </button>
          </span>
      </div>
      </div>
    )

}

export default Session;