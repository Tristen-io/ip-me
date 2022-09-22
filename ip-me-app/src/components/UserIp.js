import React from 'react'


const UserIp = ({currentIp}) => {

    

    return (
        <div className="flex items-center justify-center">
            <h1>Your IP Address is: </h1>
            <h3>{currentIp}</h3>
        </div>
    )
}

export default UserIp