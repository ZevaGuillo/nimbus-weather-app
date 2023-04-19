
import { FC, ReactNode } from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

interface ProviderProps {
    children: ReactNode
}

const queryClient = new QueryClient()

const QueryProvider: FC<ProviderProps> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
