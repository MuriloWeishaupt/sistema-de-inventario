import { useState, useEffect } from 'react';
import './QuadroProdutos.css';
import Cadastra from './Cadastra';
import { useNavigate } from 'react-router-dom';
import LogoLink from './Logo';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editedFields, setEditedFields] = useState({});
  const [totalValue, setTotalValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3033/api/products');
        const data = await response.json();
        setProducts(data);
        calculateTotal(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setEditingProduct(product._id);
    setEditedFields({ ...product });
  };

  const handleSave = async (id) => {
    try {
      await fetch(`http://localhost:3033/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedFields),
      });
      const updatedProducts = products.map((prod) =>
        prod._id === id ? editedFields : prod
      );
      setProducts(updatedProducts);
      setEditingProduct(null);
      calculateTotal(updatedProducts);
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3033/api/products/${id}`, {
        method: 'DELETE',
      });
      const updatedProducts = products.filter((prod) => prod._id !== id);
      setProducts(updatedProducts);
      calculateTotal(updatedProducts);
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  };

  const handleChange = (e) => {
    setEditedFields({
      ...editedFields,
      [e.target.name]: e.target.value,
    });
  };

  const calculateTotal = (products) => {
    const total = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotalValue(total);
  };

  return (
    <div>
      <LogoLink
        logoUrl="https://manhart-performance.de/wp-content/uploads/2022/10/McLaren-Logo.png"
      />
      <h1>Controle de Peças McLaren</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Modelo Compatível</th>
            <th>Número de Série</th>
            <th>Material</th>
            <th>Quantidade</th>
            <th>Preço Unitário</th>
            <th>Localização</th>
            <th>Status</th>
            <th>Fornecedor</th>
            <th>Certificado de Qualidade</th>
            <th>Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              {editingProduct === product._id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={editedFields.name}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="model"
                      value={editedFields.model}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="serialNumber"
                      value={editedFields.serialNumber}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="material"
                      value={editedFields.material}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="quantity"
                      value={editedFields.quantity}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      value={editedFields.price}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="location"
                      value={editedFields.location}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="status"
                      value={editedFields.status}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="supplier"
                      value={editedFields.supplier}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="qualityCertificate"
                      value={editedFields.qualityCertificate}
                      onChange={handleChange}
                    />
                  </td>
                  <td>R$ {(editedFields.price * editedFields.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleSave(product._id)}>Salvar</button>
                    <button onClick={() => setEditingProduct(null)}>Cancelar</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{product.name}</td>
                  <td>{product.model}</td>
                  <td>{product.serialNumber}</td>
                  <td>{product.material}</td>
                  <td>{product.quantity}</td>
                  <td>R$ {product.price.toFixed(2)}</td>
                  <td>{product.location}</td>
                  <td>{product.status}</td>
                  <td>{product.supplier}</td>
                  <td>{product.qualityCertificate}</td>
                  <td>R$ {(product.price * product.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleEdit(product)}>Editar</button>
                    <button onClick={() => handleDelete(product._id)}>Excluir</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Valor Total do Inventário: R$ {totalValue.toFixed(2)}</h3>
      <div className="botaoCadastra">
        <button onClick={() => navigate('/cadastra')}>Cadastrar mais produtos</button>
      </div>
    </div>
  );
}

export default ProductsList;
