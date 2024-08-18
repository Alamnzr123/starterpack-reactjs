// CODE-CARA GUNAKAN USEPARAM UNTUK DAPAT ID
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import style from './style.module.css'

const Detail = () => {
    let { id } = useParams();
    return (
        <>
            <h1 className={style.header}>Halaman Detail {id}</h1>

            <h2 className={style.menu}>Hello world</h2>

            <Link to="/">
                <button>Klik me</button>
            </Link>
        </>
    )

}

export default Detail;