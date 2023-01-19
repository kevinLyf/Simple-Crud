import axios from 'axios';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import {
  Container,
  Title,
  Form,
  InputGroup,
  Label,
  Input,
  Button,
} from './style.js';

const Create = () => {
  const ref = useRef();
  const URL = 'http://localhost:3333/user';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = ref.current;

    if (
      !user.name.value ||
      !user.email.value ||
      !user.password.value ||
      !user.fone.value ||
      !user.birth.value
    ) {
      return toast.warn('Fill in all fields!');
    }

    await axios
      .post(URL, {
        name: user.name.value,
        email: user.email.value,
        password: user.password.value,
        fone: user.fone.value,
        birth: user.birth.value,
      })
      .then(() => {
        toast.success('User created successfully!');
      })
      .catch((err) => {
        toast.error(err);
      });

    user.name.value = '';
    user.email.value = '';
    user.password.value = '';
    user.fone.value = '';
    user.birth.value = '';
  };

  return (
    <Container>
      <Title>Create</Title>
      <Form ref={ref} onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            placeholder="Ex: Kevin Ferreira"
            name="name"
            id="name"
            type="text"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Ex: kevin@test.com"
            name="email"
            id="email"
            type="email"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="Strong password"
            name="password"
            id="password"
            type="password"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="fone">Tel</Label>
          <Input
            placeholder="Ex: +55 82 9123-45678"
            name="fone"
            id="fone"
            type="fone"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="birth">Birth Date</Label>
          <Input
            placeholder="Ex: dd/mm/aaaa"
            name="birth"
            id="birth"
            type="date"
          />
        </InputGroup>
        <Button type="submit">Create</Button>
      </Form>
    </Container>
  );
};

export default Create;
