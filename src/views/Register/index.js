import React, { useContext } from "react";
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
} from '../../redux/reducers/postUserReducer';
import { Marginer } from "../../Marginer/index";
import { AccountContext } from "../../Component/AccountContext";

export function SignupForm(props) {
    const dispatch = useDispatch();

    // const { switchToSignin } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer onClickCapture={() => dispatch(addUsersAction())}>
                <Input type="email" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit">Signup</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Already have an account?
                {/* <BoldLink href="#" onClick={switchToSignin}> */}
                <BoldLink href="#">
                    Signin
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}