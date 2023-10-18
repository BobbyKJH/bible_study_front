/** React */
import React from 'react';
import { Link } from 'react-router-dom'
/** Style */
import { Tab } from '@mui/material'
import { MyPageFooterContainer } from '@style/common/FooterStyle.ts'

const MyPageHeader: React.FC<{ value: number }> = (props) => {
	const { value } = props;

	return (
		<MyPageFooterContainer value={value} centered>
			<Link to={"/mypage"} style={{ width:"33.3%", textAlign: "center" }}>
				<Tab label="그래프" sx={{ fontWeight: 900, display: "inline-flex" }} />
			</Link>

			<Link to={"/mypage/pbs"} style={{ width:"33.3%", textAlign: "center" }}>
				<Tab label="PBS"  sx={{ fontWeight: 900, display: "inline-flex" }} />
			</Link>

			<Link to={"/mypage/qt"} style={{ width:"33.3%", textAlign: "center" }}>
				<Tab label="QT"   sx={{ fontWeight: 900, display: "inline-flex" }} />
			</Link>
		</MyPageFooterContainer>
	);
};

export default MyPageHeader;