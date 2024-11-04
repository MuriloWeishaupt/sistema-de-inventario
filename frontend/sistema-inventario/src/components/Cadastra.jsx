import { useState } from 'react';
import './Cadastra.css';
import { useNavigate } from 'react-router-dom';
import LogoLink from './Logo';

function Cadastra() {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [material, setMaterial] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [supplier, setSupplier] = useState('');
  const [qualityCertificate, setQualityCertificate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !model || !serialNumber || !material || !quantity || !price || !location || !status || !supplier || !qualityCertificate) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    try {
      const response = await fetch('http://localhost:3033/api/newProduct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          model,
          serialNumber,
          material,
          quantity,
          price,
          location,
          status,
          supplier,
          qualityCertificate,
        }),
      });

      if (response.ok) {
        console.log('Produto cadastrado com sucesso');
        setName('');
        setModel('');
        setSerialNumber('');
        setMaterial('');
        setQuantity('');
        setPrice('');
        setLocation('');
        setStatus('');
        setSupplier('');
        setQualityCertificate('');
      }
    } catch (error) {
      console.log('Erro: ', error);
    }
  };

  return (
    <div>
      <LogoLink logoUrl="https://manhart-performance.de/wp-content/uploads/2022/10/McLaren-Logo.png" />
      <h1>Tela de Cadastro de Inventário</h1>
      <div className="inventory-form">
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome da Peça" />
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Modelo Compatível" />
          <input type="text" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} placeholder="Número de Série" />
          <input type="text" value={material} onChange={(e) => setMaterial(e.target.value)} placeholder="Material" />
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantidade" />
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preço Unitário" />
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Localização" />
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" />
          <input type="text" value={supplier} onChange={(e) => setSupplier(e.target.value)} placeholder="Fornecedor" />
          <input type="text" value={qualityCertificate} onChange={(e) => setQualityCertificate(e.target.value)} placeholder="Certificado de Qualidade" />
          <button type="submit">Cadastrar Produto</button>
        </form>
      </div>
      <div className="listaBotao">
        <button onClick={() => navigate('/inventario')}>Voltar para Lista</button>
      </div>
    </div>
  );
}

export default Cadastra;
