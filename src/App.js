import styled from 'styled-components/macro';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Products />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 32px;
`;

export default App;
