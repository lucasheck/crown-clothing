import styled from "styled-components";

import { ReactComponent as CloseSvg } from "../../assets/x-close.svg";
import { ReactComponent as LessThanSvg } from "../../assets/less-than.svg";
import { ReactComponent as GreaterThanSvg } from "../../assets/greater-than.svg";

export const CloseIcon = styled(CloseSvg)`
	cursor: pointer;
`;
export const LessThanIcon = styled(LessThanSvg)`
	cursor: pointer;
`;
export const GreaterThanIcon = styled(GreaterThanSvg)`
	cursor: pointer;
`;

export const ImageContainer = styled.div`
	padding: 10px 10px 10px 0;
	height: 240px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const ItemQuantity = styled.span`
	display: inherit;
	align-items: center;
`;

export const CheckoutItem = styled.div`
	border-bottom: solid gray 1px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0;
	height: 240px;

	& > * {
		width: 23%;
	}
`;

export const CloseIconDiv = styled.div`
	width: 8%;
	padding-left: 12px;
`;
