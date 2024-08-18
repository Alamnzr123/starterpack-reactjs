//CODE-LOGIN USER, DAN MENAMPIKAN GAMBAR VIA COMPONENT
import React from 'react';
import style from '../Login/style.module.css';
import axios from 'axios';
import { ReactSVG } from 'react-svg'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Gambar1 from '../../assets/logo512.png';
import Gambar2 from '../../assets/logo.svg';

const Login = () => {
    // const [queryParams] = useSearchParams();
    // const search = queryParams.get('search');

    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id);
    const [data, setData] = React.useState({
        username: "",
        password: ""
    });

    const [isError, setIsError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    function handleUpdate() {
        const userData = {
            username: data.username
        };

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/update/${id}`, userData)
            .then((response) => {
                console.log(response);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err.errorMessage);
                setIsError(true);
                setErrorMessage("Data Error")
            })
    }

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            username: data.username,
            password: data.password
        };

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, userData)
            .then((response) => {
                console.log(response);
                localStorage.setItem("token", JSON.stringify(response.data.generateToken));
                return navigate('/')
            })
            .catch((err) => {
                console.log(err.errorMessage);
                setIsError(true);
                setErrorMessage("Data Error")
            })
    }

    return (
        <>
            {/* <div className={style.container}>
                <h1 className={style.text}>Login</h1>
            </div>

            <div style={{ backgroundColor: 'blue' }}>
                <h1 style={{
                    marginLeft: '300px',
                    color: 'azure',
                    fontSize: '20pt'
                }}>Login</h1>
            </div> */}

            {isError ? (
                <h1>
                    {errorMessage}
                </h1>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Email :
                        <input type="text" name="username" value={data.username} onChange={handleChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" value={data.password} onChange={handleChange} />
                    </label>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            )}

            <img src={require('../../assets/logo512.png')} alt="contoh logo" />
            {/* <img src={require('../../assets/logo.svg')} width={300} height={300} alt="logo" /> */}
            <ReactSVG src={Gambar2} />
        </>
    )
}

export default Login;