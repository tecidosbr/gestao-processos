import React from 'react';
import { AuthContext } from './auth';

export const DataAccess: React.FC = () => {
  const auth = React.useContext(AuthContext);

  return (
    <div className="container-fluid d-flex flex-column justify-content-center">
      <div className="card col-md-8 col-lg-6">
        <div className="card-body">
          <h1 className="card-title">Acesso a dados</h1>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Servidor</th>
                <td style={{ overflowWrap: "anywhere" }}>tecidosbr.database.windows.net</td>
              </tr>
              <tr>
                <th scope="row">Banco de Dados</th>
                <td style={{ overflowWrap: "anywhere" }}>gestao-processos-db</td>
              </tr>
              <tr>
                <th scope="row">Usuário</th>
                <td style={{ overflowWrap: "anywhere" }}>{auth.account?.username}</td>
              </tr>
              <tr>
                <th scope="row">Senha</th>
                <td style={{ overflowWrap: "anywhere" }}>[Mesma do Azure Active Directory]</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

