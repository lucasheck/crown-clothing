import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	padding-top: 10px;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 10px;
`;

export const NavLinksContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const NavLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;
