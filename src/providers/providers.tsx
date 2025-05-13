// src/providers/Providers.tsx

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { MSWComponent } from "./MSWComponent";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1분
            // 필요에 따라 다른 옵션 설정
          },
        },
      }),
  );

  return (
    <MSWComponent>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MSWComponent>
  );
}
