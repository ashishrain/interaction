import React, {useState} from 'react';
import styled from 'styled-components';
import runner from './assets/runner.png';
import hideIcon from './assets/hide.svg';
import showIcon from './assets/unhide.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().required('Email is Required!').email('Not a Valid Email!'),
    password: yup.string().required('Password is Required!'),
});

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`;

const StyledHeader = styled.h1`
    color: #e64b5f;
    margin-left: 2rem;
`;

const StyledInput = styled.input`
    background: #ffffff;
    border: 1px solid #c7c7c7;
    height: 63px;
    width: 337px;
    padding-left: 10px;
    font-size: 18px;
`;

const StyledIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-left: -40px;
    margin-bottom: -10px;
`;

const StyledErrorText = styled.p`
    color: red;
`;

const StyledButton = styled.button`
    height: 63px;
    width: 350px;
    background: #e64b5f;
    color: #ffffff;
    text-align: center;
    font-size: 18px;
    border: 0;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

const Week4 = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, watch, errors } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => console.log(data);

    const handleClick = (e) => {
        console.log('password toggle clicked');
        setShowPassword(!showPassword);
    };

    return (
        <StyledWrapper>
            <img src={runner} />
            <StyledHeader>Runday</StyledHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <StyledInput type="text" name="email" placeholder="Email" ref={register()} />
                </p>
                <StyledErrorText>{errors.email?.message}</StyledErrorText>
                <p>
                    <StyledInput type={showPassword ? "text" : "password"} name="password" placeholder="Password" ref={register()} />
                    <StyledIcon src={showPassword ? hideIcon : showIcon} onClick={handleClick}></StyledIcon>
                    <StyledErrorText>{errors.password?.message}</StyledErrorText>
                </p>
                <p>
                    <StyledButton>Login</StyledButton>
                </p>
            </form>
        </StyledWrapper>
    );
};

export default Week4;