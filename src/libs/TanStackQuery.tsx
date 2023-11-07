"use client"
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const TanStackQuery = ({ children }: { children: React.ReactNode }) => {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
};

export default TanStackQuery;