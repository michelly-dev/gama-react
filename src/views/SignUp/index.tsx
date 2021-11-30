import React, { useState, useCallback, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container } from './style';
import { api } from "../../services/api";

interface IData {
  registro: string;
  name: string;
  email: string;
  telefone: string;
  celular: string;
  senha: string;
  profissao: string
}
const SignUp: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);

  const history = useNavigate();

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = api.post('', data).then(
        response => {
          console.log(response.data)
          history('/signin')
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
  )
  }, [data, history])

  return (
    <Container>
      <div className="card">
        <h5>Cadastre-se</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Informe seu registro"
            onChange={e => setData({ ...data, registro: e.target.value })} />
          <input
            type="text"
            placeholder="Informe seu nome"
            onChange={e => setData({ ...data, name: e.target.value })} />
          <input
            type="text"
            placeholder="Informe seu email"
            onChange={e => setData({ ...data, email: e.target.value })} />
          <input
            type="text"
            placeholder="Informe seu telefone"
            onChange={e => setData({ ...data, telefone: e.target.value })} />
          <input
            type="text"
            placeholder="Informe seu celular"
            onChange={e => setData({ ...data, celular: e.target.value })} />
          <input
            type="password"
            placeholder="Informe sua senha"
            onChange={e => setData({ ...data, senha: e.target.value })} />
          <input
            type="text"
            placeholder="Informe sua profissão"
            onChange={e => setData({ ...data, profissao: e.target.value })} />
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    </Container>
  );
}

export default SignUp;