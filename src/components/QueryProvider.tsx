
import { FC, ReactNode, useState } from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

interface ProviderProps {
    children: ReactNode
}
const QueryProvider: FC<ProviderProps> = ({children}) => {

  const [queryClient] = useState(() => new QueryClient());


  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
