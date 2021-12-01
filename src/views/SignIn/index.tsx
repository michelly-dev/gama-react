import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';

import { Container } from './style';
import { api } from "../../services/api";

interface IData {
  email: string;
  password: string;
}
const SignIn: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);

  const [load, setLoad] = useState(false);

  const history = useHistory();

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoad(true)
    const result = api.post('/session', data).then(
      response => {
        const sessionToken = JSON.stringify(response.data.token)
        localStorage.setItem('@gamaServiceToken', sessionToken)
        toast.success("Cadastro realizado com sucesso!")
        console.log(response.data)
        history.push('/dashboard')
      }
    );

    toast.promise(
      result,
      {
        pending: 'Promise is pending',
        success: 'Promise resolved 👌',
        error: 'Promise rejected 🤯'
      },
      {
        theme: 'colored'
      }
    ).catch( e => { toast.error('Ops, algo deu errado')} )
    .finally(() => setLoad(false))
  }, [data, history])

  if (load) {
    return <Loader />
  }

  return (
    <Container>
      <div className="card">
        <h5>Logar no Sistema</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Informe seu email"
            onChange={e => setData({ ...data, email: e.target.value })} />
          <input
            type="password"
            placeholder="Informe sua senha"
            onChange={e => setData({ ...data, password: e.target.value })} />
          <input type="submit" value="Logar" />
        </form>
        <Link to="/signup">Clique aqui para cadastrar.</Link>
      </div>
    </Container>
  );
}

export default SignIn;