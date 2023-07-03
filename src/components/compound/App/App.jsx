import { Container } from '@UI/Container/Container';
import { Layout } from '@UI/Layout/Layout';
import { MainTitle } from '@UI/MainTitle/MainTitle';

import { MainPanel } from '@compound/MainPanel/MainPanel';

import './App.scss';

function App() {
  return (
    <Layout>
      <Container>
        <MainTitle />
        <MainPanel />
      </Container>
    </Layout>
  );
}

export default App;

