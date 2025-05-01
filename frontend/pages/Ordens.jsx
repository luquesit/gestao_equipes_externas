import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function Ordens() {
  const [ordens, setOrdens] = useState([]);

  useEffect(() => {
    api.get('/ordens').then(res => setOrdens(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Ordens de Serviço</h1>
      <ul>
        {ordens.map(ordem => (
          <li key={ordem.id} className="border p-2 m-2">{ordem.descricao} - {ordem.status}</li>
        ))}
      </ul>
    </div>
  );
}