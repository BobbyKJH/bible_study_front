"use client"
import React, { useState } from 'react';
/** Provider */
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const TanStackQuery = ({ children }: { children: React.ReactNode }) => {
	const [queryClient] = useState(() => new QueryClient());
	
	return (
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</RecoilRoot>
	);
};

export default TanStackQuery;