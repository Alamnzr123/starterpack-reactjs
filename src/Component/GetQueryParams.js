// QUERY PARAMS
import React from 'react';
import { useSearchParams } from 'react-router-dom'

const GetQueryParams = () => {
    const [queryParams] = useSearchParams();
    const search = queryParams.get('search');
    const sort = queryParams.get('sort');
    const type = queryParams.get('type');
    return (
        <>
            <h1>Ini Query Param {search} {type} {sort}</h1>
        </>
    )
}

export default GetQueryParams;
