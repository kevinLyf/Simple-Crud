import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Global } from './styles/global';
import { Container, Title, Input, Form, ButtonCreate, Wrapper } from './style';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './components/Card';

function App() {
  const [users, setUsers] = useState([]);
  const ref = useRef();
  const URL = 'http://localhost:3333/user';

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  const getUsers = async () => {
    try {
      const res = await axios.get(URL);
      setUsers(res.data.users.sort((a, b) => (a.email > b.email ? 1 : -1)));
      console.log(res.data.users.sort((a, b) => (a.email > b.email ? 1 : -1)));
    } catch (err) {
      toast.error(error);
    }
  };

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
      return toast.warn('Fill in all the data');
    }

    await axios
      .post(URL, {
        name: user.name.value,
        email: user.email.value,
        password: user.email.value,
        fone: user.fone.value,
        birth: user.birth.value,
      })
      .then(() => toast.success('User created successfully!'))
      .catch((err) => toast.error(err));

    user.name.value = '';
    user.email.value = '';
    user.password.value = '';
    user.fone.value = '';
    user.birth.value = '';

    getUsers();
  };
  return (
    <>
      <Global />
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} theme={'dark'}/>
      <Container>
        <Title>CRUD</Title>
        <Form ref={ref} onSubmit={handleSubmit}>
          <Input placeholder="Name" type="text" id="name" />
          <Input placeholder="Email" type="email" id="email" />
          <Input placeholder="Password" type="password" id="password" />
          <Input placeholder="+1 2345-67890" type="tel" id="fone" />
          <Input placeholder="xx/mm/yyyy" type="date" id="birth" />
          <ButtonCreate type="submit">
            Create
          </ButtonCreate>
        </Form>

        <Wrapper>
          {users == [] ? (
            <p>Loading... </p>
          ) : (
            users.map((user) => (
              <Card
                key={user.email}
                name={user.name}
                email={user.email}
                birth={user.birth}
                tel={user.fone}
              />
            ))
          )}
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
