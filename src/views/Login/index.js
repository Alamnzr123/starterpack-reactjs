import React from 'react';
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
import { useDispatch } from 'react-redux';
import {
    addUsersAction
} from '../../redux/reducers/postLoginReducer';
import { Marginer } from "../../Marginer/index";
import { AccountContext } from "../../Component/AccountContext";


export function LoginForm(props) {
    const dispatch = useDispatch();
    // const { switchToSignup } = React.useContext(AccountContext);

    return (
        <BoxContainer >
            <FormContainer onClickCapture={() => dispatch(addUsersAction())}>
                <Input type="email" placeholder="Username" />
                <Input type="password" placeholder="Password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit">Signin</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Don't have an accoun?{" "}
                {/* <BoldLink href="#" onClick={switchToSignup}> */}
                <BoldLink href="#">
                    Signup
                </BoldLink>
            </MutedLink>
        </BoxContainer >
    )
}