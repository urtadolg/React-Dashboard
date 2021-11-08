//é a renderização condicional de diferentes paginas para diferentes paths de link
//utilizamos o react-router-dom para isso
//passos para utilizar:
//1- importar o BrowserRouter no indexjs e embrulhar o <App />
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//2- importar o Route no appjs e embrulhar os componentes desejados. Cada <Router> possui um atributo path='' contendo o path para renderizar o componente

import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;

//3- criamos um header com links, porém, ao invés de criar links <a... normais importamos Link from react-router-dom. Esse link previne default refresh of the page. Possui o atributo to='' contendo o path que redirecionará o link.

import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <section>
      <ul>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </section>
  );
};

export default MainHeader;

// foi salientado que podemos usar como links em um navbar (header) ao invés de Link o NavLink. A vantagem de se utilizar esse ultimo é que podemos atribuir uma classe especial a ele (o activeClassName) no qual o react-router-dom automaticamente atribui quando tal pagina está ativa.

import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <section className={styles.header}>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default MainHeader;

//podemos criar routers dinâmicos utilizando o :someID no final do router.

<Route path="/products/:productId">
  <ProductsDetails />
</Route>

//para acessar o valor digitado como key (:productId): no componente importamos um custom hook do react-router-dom, o useParams.
//o useParams() retorna um objeto cujos key pairs são: key = identifier atribuido no path e valor = digitado pelo usuário (ou acessado através de um link específico)

import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product Detail.</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductsDetails;

//para evitar que ambas as páginas que começam com o mesmo path sejam renderizadas juntas (veja abaixo) incluimos o atributo exact no path desejado para forçar exact match.

return (
    <Fragment>
      <MainHeader />
      <section className={styles.main}>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductsDetails />
        </Route>
      </section>
    </Fragment>
  );

  //alternativamente, foi mostrado também que pode-se utilizar o build in component Switch do react-router-dom. Embrulhamos com o Switch todos os Route, e ele faz com que seja renderizado o primeiro route encontrado que match com o path.

  import {Route, Switch} from 'react-router-dom';

  return (
    <Fragment>
      <MainHeader />
      <section className={styles.main}>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductsDetails />
          </Route>
        </Switch>
      </section>
    </Fragment>
  );

//podemos ter também neasted router, que é, basicamente um router dentro de um componente. Fazemos isso para espedificar mais o Route. Por exemplo, renderizar a página welcome personalizada para novos usuários, acrescentando Route no componente welcome. O path, por sua vez deve acrescentar ao router do welcome atual.


import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page!</h1>
      <Route path="/welcome/new-user">
        <p>Hello, New User!</p>
      </Route>
    </section>
  );
};

export default Welcome;

//outro componente importado de react-route-dom é o Redirect. Como o proprio nome diz permite redirecionar o usuário para outra página. Foi mostrado o exemplo: se o usuário entrar no path / apenas, redirecionar ele para /welcome.

//react router v 6

// Switch é substituido por Routes
// o Route não mais indica o componente a ser renderizado como child. Ao invés disso como uma propriedade chamada element:

//<Route path='/welcome' element={<Welcome />} />

//podemos remover 'exact' no Route component
//a ordem dos route não importa mais
//nova forma de inserir classes no NavLink utilizando função

//<NavLink className={(navData)=>navData.isActive ? styles.active : ''} to='/welcome'>Welcome</NavLink>

//<Redirect...> substituido por <Navigate replace to='/welcome' />

//nested routes agora são todos definitos no proprio app.js dentro dos Route. No path do neasted route não precisamos mais colocar o path todo, mas somente o que é adicional ('new-user' = /welcome/new-user)

//<Route to='/welcome/* element={<Welcome />}>
//  <Route path='new-user' element={<p>Welcome, new user!}</p> />
//</Route>

//no componente que será renderizado o conteudo do neasted route, devemos inserir um custom component como placeholder. É o Outlet

//<Outlet />

//para estabelecer um path programatically (redirecionar ao fetch por exemplo) não utilizamos mais o useHistory. Ao invés disso agora utilizamos o useNavigate. 

//const navigate = useNavigate();

//para redirecionar: 

//navigate('/welcome', {replace: true});

//para voltar 1 página:

//navigate(-1);

//até o momento o componente Prompt, que evitava fazer redirects acidentalmente, não existe na nova versão
