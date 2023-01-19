import { Title, Container, Table, Thead, Tr, Th, Tbody, Td } from './style.js';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3333/user');
      setUsers(res.data.users);
      console.log(res.data.users);
    } catch (err) {
      toast.error(err);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);

    await axios
      .delete(`http://localhost:3333/user/${id}`)
      .then(() => {
        toast.success('User deleted successfully!');
      })
      .catch((err) => {
        toast.error(err);
      });

    getUsers();
  };

  return (
    <Container>
      <Title>Users</Title>

      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th onlyWeb>Fone</Th>
            <Th onlyWeb>Birth</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {users === undefined ? (
            <Tr>
              <Td colSpan={6}>No users found</Td>
            </Tr>
          ) : (
            users.map((user, i) => (
              <Tr key={i}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td onlyWeb>{user.fone}</Td>
                <Td onlyWeb>{user.birth}</Td>
                <Td>
                  <FaPen size='18px' color='orange' cursor='pointer' />
                </Td>
                <Td>
                  <FaTrashAlt
                    onClick={() => handleDelete(user._id)}
                    size='18px'
                    color='#ff4757'
                    cursor='pointer'
                  />
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Home;
