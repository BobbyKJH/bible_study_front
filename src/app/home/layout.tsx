import React from 'react';

import Header from '@/components/common/header/Header';
import Sidebar from '@/components/common/sidebar/Sidebar';

import ScrollToTop from '@/components/common/ScrollToTop';

import styles from "@/app/home/layout.module.css"

const Layout = ({ children }: { children: React.ReactNode }) => {

	return (
		<>
			<ScrollToTop/>

			<Header/>

			<Sidebar/>

			<div className={styles.container}>
				{children}
			</div>
		</>
	)
}

export default Layout;