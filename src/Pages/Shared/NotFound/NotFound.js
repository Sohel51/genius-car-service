import React from "react";
import sleeping from '../../../images/sleep.jpg';

const NotFound = () => {
    return (
        <div>
            <h1 className="text-primary text-center p-3">Mechanic is sleeping</h1>
            <img className="w-100" src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;