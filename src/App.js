import { useEffect, useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './store/products';

const App = () => {
  const [productsNum, setProductsNum] = useState(10);

  const products = useSelector(state => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://fakestoreapi.com/products?limit=${productsNum}`;
    fetch(url).then((responce) => {
      return responce.json();
    }).then((result) => {
      setProductsNum(result.length);
      for (let i = 0; i < result.length; i++){
        dispatch(addProduct(
          {
              id : result[i].id,
              title : result[i].title,
              description: result[i].description,
              price : result[i].price,
              image : result[i].image,
              quantity : 1
            }
        ));
      }
      setProductsNum(products.length);      
    }).catch((error) => console.log(error));
  }, [productsNum]);

  return (
    <div className="App">
      <h1>Тестовое задание React в VK-market</h1>
      <div className='container'>
        <div className='container__left'>
          <h2>Корзина:</h2>
          {Object.keys(products).length === 0 ? <p>Загрузка данных ... </p> : products.map((item, index) => <ProductCard 
              key={item.id}
              id={item.id}
              photo={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          )}
        </div>
        <div className='container__right'>
          <p>Итоговая сумма: {products.reduce((s, item) => { 
            s += item.price * item.quantity;
            return s;
          }, 0)} USD.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
