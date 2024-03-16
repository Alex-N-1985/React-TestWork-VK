import { useEffect, useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';

const App = () => {
  const [productsNum, setProductsNum] = useState(5);
  const [products, setProducts] = useState({});

  useEffect(() => {
    const url = `https://fakestoreapi.com/products?limit=${productsNum}`;
    fetch(url).then((responce) => {
      return responce.json();
    }).then((result) => {
      setProducts(result)
    }).catch((error) => console.log(error));
  }, [productsNum]);

  return (
    <div className="App">
      <h1>Тестовое задание React в VK-market</h1>
      <div className='container'>
        <div className='container__left'>
          <h2>Корзина:</h2>
          {products.map((item, index) => <ProductCard 
              key={item.id}
              photo={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          )}
        </div>
        <div className='container__right'>
          <p>Итоговая сумма: 0 USD.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
