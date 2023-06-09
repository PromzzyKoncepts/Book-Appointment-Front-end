// import React from 'react';
/* eslint-disable */

import styled from 'styled-components';

export const Form = styled.form`
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
  padding: 1rem;
  border-radius: 9px;
  gap: 1rem;
  @media screen and (max-width: 768px) {
      padding: 1.5rem;
      width: 70%
  }
`;

// background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  border-radius: 9px;
  background: linear-gradient(150deg, #889854 0%, #fff 100%);
  @media screen and (max-width: 767px) {
    width: 100%;
    border-radius: 0px;
  }
`

export const Input = styled.input`
  width: 80%;
  border: none;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  @media screen and (max-width: 767px) {
      width: 100%;
  }
`
export const Label = styled.label`
font-size: 12px;
  @media screen and (max-width: 767px) {
      width: 100%;
  }
`
export const Textarea = styled.textarea`
  width: 80%;
  border: none;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  @media screen and (max-width: 767px) {
      width: 100%;
  }
`

export const FormBtn = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 0.5rem;
  border: none;
  width: 7rem;
  font - size: 14px;
  color: #F5F5DC;
  margin-top: 1rem;
  cursor: pointer;
`

export const H1 = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 24px;
  @media screen and (max-width: 767px) {
      font-size: 20px
  }
`

export const P = styled.p`
  margin-top: 1rem
`