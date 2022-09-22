import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const UserIp = () => {

    const [ip, setIP] = useState('');

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data)
        setIP(res.data.IPv4)
    }

    useEffect( () => {
        getData()
    }, [])

    return (
        <div>
            <h1>Your IP Address is: </h1>
            <h3>{ip}</h3>
        </div>
    )
}

export default UserIp