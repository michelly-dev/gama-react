import React, { useState, useCallback, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container } from './style';
import { api } from "../../services/api";
import Loader from '../../components/Loader';

interface IData {
  name: string;
  email: string;
  password: string;
}
const SignUp: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [load, setLoad] = useState(false);

  const history = useNavigate();

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoad(true)
    const result = api.post('/users', data).then(_ => history('/signin'));

    toast.promise(
      result,
      {
        pending: 'Aguarde enquanto realizamos seu cadastro.',
        success: 'Cadastro realizado com sucesso!',
        error: 'Erro ao realizar o cadastro.'
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
        <h5>Cadastre-se</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Informe seu nome"
            onChange={e => setData({ ...data, name: e.target.value })} />
          <input
            type="text"
            placeholder="Informe seu email"
            onChange={e => setData({ ...data, email: e.target.value })} />
          <input
            type="password"
            placeholder="Informe sua senha"
            onChange={e => setData({ ...data, password: e.target.value })} />
          <input type="submit" value="Cadastrar" />
        </form>
        <Link to="/signin">Clique aqui para logar.</Link>
      </div>
    </Container>
  );
}

export default SignUp;