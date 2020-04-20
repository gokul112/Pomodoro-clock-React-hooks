import React from 'react';
import moment from 'moment'


const Break = ({breakLengthSec,incrementLength,decrementLength}) => {

    const breakLengthMin =  moment.duration(breakLengthSec,'s').minutes();
    return(
        <div>
            <h2>Break Length</h2>
            <div className="input-group center">
                <span className="input-group-btn">
                    <button type="button" className="btn btn-danger btn-number"  data-type="minus" onClick={decrementLength}>
                        <span className="glyphicon glyphicon-minus"></span>
                    </button>
                </span>
                <input type="text" name="break" className="form-control input-number" value={breakLengthMin} min="0" max="60" readOnly/>
                <span className="input-group-btn">
                    <button type="button" className="btn btn-success btn-number" data-type="plus" onClick={incrementLength} >
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </span>
            </div>
         </div>

    )

}

export default Break;