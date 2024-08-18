// CODE-MENAMPILKAN DATA, DAN LOGOUT DARI HALAMAN LOGIN
import React from 'react';
import Button from '../../Component/Button';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [data, setData] = React.useState("toni");
    const [url, setUrl] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("")
    const navigate = useNavigate();

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`)
            .then((response) => {
                console.log(response.data.Data);
                setUrl(response.data.Data);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                setErrorMessage("Data Error")
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);
    // // update tanpa depedensi
    // React.useEffect(() => {
    //   console.log("update, tanpa depedensi akan dipanggil setiap ada perubahan")
    // })

    // // update menggunakan depedensi
    // React.useEffect(() => {
    //   console.log("update menggunakan depedensi")
    //   setData("Hello")
    // }, [data])


    function logOut() {
        localStorage.clear();
        return navigate('/login');
    }

    return (
        // {
        //     url.map((item, index) => {        
        //     }) ? (
        //         <React.Fragment>
        //         <h1>
        //             hello
        //         </h1>

        //         <Button size={100} person={{
        //             name: 'Katsuko Saruhashi',
        //             imageId: 'YfeOqp2'
        //         }} />
        //     </React.Fragment>
        //     ) : null            
        // }
        <>
            {isLoading ? (
                <h1>Loading....</h1>
            ) : isError ? (
                <div>{errorMessage}</div>
            ) :
                url.map((item, index) => (
                    <React.Fragment>
                        <h1 key={index}>
                            hello
                            {item.username}
                        </h1>

                        <img src={`${item.image}`} alt="logo" />

                        <Button item={item} size={100} person={{
                            name: 'Katsuko Saruhashi',
                            imageId: 'YfeOqp2'
                        }} />


                    </React.Fragment>
                ))
            }
            <button onClick={() => logOut()}>
                Log out
            </button>
        </>
    )
}

export default Home;