// PARAMS
import React from 'react';
import { Link, useParams } from 'react-router-dom'

const GetParams = () => {
    const { id } = useParams();
    return (
        <>
            <h1>Ini Params {id}</h1>
            <Link className="btn btn-primary" to='/params'>KLIK ME</Link>
        </>
    )
}

export default GetParams;