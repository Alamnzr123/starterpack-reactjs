import React from 'react';
import style from '../Login/style.module.css';
import axios from "axios";
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom';
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "../../Component/Common";
import { Marginer } from "../../Marginer/index";
import { AccountContext } from "../../Component/AccountContext";


const Login = (props) => {

    // const { id } = useParams();
    // const navigate = useNavigate();
    // console.log(id);
    // const [data, setData] = React.useState({
    //     username: "",
    //     password: ""
    // });

    // const [isError, setIsError] = React.useState(false);
    // const [errorMessage, setErrorMessage] = React.useState("");

    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     setData({
    //         ...data,
    //         [e.target.name]: value
    //     });
    // };

    // function handleUpdate() {
    //     const userData = {
    //         username: data.username
    //     };

    //     axios.put(`${process.env.REACT_APP_BACKEND_URL}/update/${id}`, userData)
    //         .then((response) => {
    //             console.log(response);
    //             window.location.reload();
    //         })
    //         .catch((err) => {
    //             console.log(err.errorMessage);
    //             setIsError(true);
    //             setErrorMessage("Data Error")
    //         })
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     const userData = {
    //         username: data.username,
    //         password: data.password
    //     };

    //     axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, userData)
    //         .then((response) => {
    //             console.log(response);
    //             localStorage.setItem("token", JSON.stringify(response.data.generateToken));
    //             return navigate('/')
    //         })
    //         .catch((err) => {
    //             console.log(err.errorMessage);
    //             setIsError(true);
    //             setErrorMessage("Data Error")
    //         })
    // }

    // const { switchToSignup } = React.useContext(AccountContext);

    return (
        <>
            {/* {isError ? (
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
            )} */}

            <BoxContainer>
                <FormContainer>
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                </FormContainer>
                <Marginer direction="vertical" margin={10} />
                <MutedLink href="#">Forget your password?</MutedLink>
                <Marginer direction="vertical" margin="1.6em" />
                <SubmitButton type="submit">Signin</SubmitButton>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href="#">
                    Don't have an accoun?{" "}
                    <BoldLink href="#">
                        Signup
                    </BoldLink>
                </MutedLink>
            </BoxContainer>
        </>
    )
}

export default Login;