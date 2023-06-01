import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { OrderData } from '../../../../types/Types';
import { BtnCol, SidebarContainer, SubmitButton } from './UserDataSidebar.styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

type UserDataSidebarProps = {
  onSubmit: (orderData: OrderData) => void;
};

export const UserDataSidebar: React.FC<UserDataSidebarProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const summaryItems = useSelector((state: RootState) => state.cart.summaryItems);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create the order data object
    const orderData: OrderData = {
      email,
      phone,
      address,
      name,
      summaryItems,
    };

    // Call the onSubmit function passed from the parent component
    onSubmit(orderData);

    // Reset the form fields
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
    <SidebarContainer>
      <h2>Enter Your Information</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicAddress">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Enter phone number"
            value={phone}
            onChange={handlePhoneChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={handleAddressChange}
          />
        </Form.Group>

        <BtnCol>
          <SubmitButton>Submit</SubmitButton>
        </BtnCol>
      </Form>
    </SidebarContainer>
  );
};
