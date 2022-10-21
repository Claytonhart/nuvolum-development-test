import styled from 'styled-components/macro';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Main></Main>
    </>
  );
}

const Main = styled.main`
  padding: 32px;
`;

export default App;
