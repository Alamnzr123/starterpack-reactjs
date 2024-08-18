// // CODE-MENAMPILKAN DATA, DAN LOGOUT DARI HALAMAN LOGIN
// import React from 'react';
// import Button from '../../Component/Button';
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Home = () => {

//     const [data, setData] = React.useState("toni");
//     const [url, setUrl] = React.useState([]);
//     const [isLoading, setIsLoading] = React.useState(true);
//     const [isError, setError] = React.useState(false);
//     const [errorMessage, setErrorMessage] = React.useState("")
//     const navigate = useNavigate();

//     React.useEffect(() => {
//         axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`)
//             .then((response) => {
//                 console.log(response.data.Data);
//                 setUrl(response.data.Data);
//             })
//             .catch((err) => {
//                 console.log(err);
//                 setError(true);
//                 setErrorMessage("Data Error")
//             })
//             .finally(() => {
//                 setIsLoading(false);
//             })
//     }, []);
//     // // update tanpa depedensi
//     // React.useEffect(() => {
//     //   console.log("update, tanpa depedensi akan dipanggil setiap ada perubahan")
//     // })

//     // // update menggunakan depedensi
//     // React.useEffect(() => {
//     //   console.log("update menggunakan depedensi")
//     //   setData("Hello")
//     // }, [data])


//     function logOut() {
//         localStorage.clear();
//         return navigate('/login');
//     }

//     return (
//         // {
//         //     url.map((item, index) => {        
//         //     }) ? (
//         //         <React.Fragment>
//         //         <h1>
//         //             hello
//         //         </h1>

//         //         <Button size={100} person={{
//         //             name: 'Katsuko Saruhashi',
//         //             imageId: 'YfeOqp2'
//         //         }} />
//         //     </React.Fragment>
//         //     ) : null            
//         // }
//         <>
//             {isLoading ? (
//                 <h1>Loading....</h1>
//             ) : isError ? (
//                 <div>{errorMessage}</div>
//             ) :
//                 url.map((item, index) => (
//                     <React.Fragment>
//                         <h1 key={index}>
//                             hello
//                             {item.username}
//                         </h1>

//                         <img src={`${item.image}`} alt="logo" />

//                         <Button item={item} size={100} person={{
//                             name: 'Katsuko Saruhashi',
//                             imageId: 'YfeOqp2'
//                         }} />


//                     </React.Fragment>
//                 ))
//             }
//             <button onClick={() => logOut()}>
//                 Log out
//             </button>
//         </>
//     )
// }

// export default Home;



import React, { useState } from "react";
import styled from "styled-components";
import Login from "../Login/index";
import { motion } from "framer-motion";
import { AccountContext } from "../../Component/AccountContext";
import { SignupForm } from "../Register/index";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)",
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)",
    },
};

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};

export function AccountBox(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    };

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
    };

    const contextValue = { switchToSignup, switchToSignin };

    return (
        <AccountContext.Provider value={contextValue}>
            <BoxContainer>
                <TopContainer>
                    <BackDrop
                        initial={false}
                        animate={isExpanded ? "expanded" : "collapsed"}
                        variants={backdropVariants}
                        transition={expandingTransition}
                    />
                    {active === "signin" && (
                        <HeaderContainer>
                            <HeaderText>Welcome</HeaderText>
                            <HeaderText>Back</HeaderText>
                            <SmallText>Please sign-in to continue!</SmallText>
                        </HeaderContainer>
                    )}
                    {active === "signup" && (
                        <HeaderContainer>
                            <HeaderText>Create</HeaderText>
                            <HeaderText>Account</HeaderText>
                            <SmallText>Please sign-up to continue!</SmallText>
                        </HeaderContainer>
                    )}
                </TopContainer>
                <InnerContainer>
                    {active === "signin" && <Login />}
                    {active === "signup" && <SignupForm />}
                </InnerContainer>
            </BoxContainer>
        </AccountContext.Provider>
    );
}