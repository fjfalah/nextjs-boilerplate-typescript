import { NextPage } from 'next';
import React from 'react';
import styled from '../themes';

const Title = styled.h1`
  text-align: center;
`

const Description = styled(Title)`
  color: ${(props) => props.theme.color.blue};
`

const HomePage: NextPage = () => {
  return (
    <>
      <Title>Hello, World!</Title>
      <Description>Next JS Boilerplate with Typescript</Description>
    </>
  );
};

export default HomePage;
