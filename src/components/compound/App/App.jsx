import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { Container } from '@UI/Container/Container';
import { Layout } from '@UI/Layout/Layout';
import { MainTitle } from '@UI/MainTitle/MainTitle';

import { MainPanel } from '@compound/MainPanel/MainPanel';

import './App.scss';

export const queryClient = new QueryClient();

function App() {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Container>
          <MainTitle />
          <MainPanel />
        </Container>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Layout>
  );
}

export default App;

