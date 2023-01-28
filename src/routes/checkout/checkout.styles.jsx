import styled from "styled-components";

export const CheckoutLabel = styled.div`
	margin-top: 30px;
	padding: 15px 10px 15px 0;
	border-bottom: solid gray 1px;
	display: flex;
	justify-content: space-between;
	font-weight: 600;

	span {
		width: 23%;
	}

	.span-remove {
		width: 8%;
	}
`;

export const CheckoutTotal = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 50px;
	padding-top: 30px;
	font-size: xx-large;
`;

export const CheckoutDescription = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CheckoutItemList = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
`;

export const CheckoutContainer = styled.div`
	display: flex;
	justify-content: center;
`;
