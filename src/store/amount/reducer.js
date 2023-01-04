import { deposit, withdraw } from './action';


const initialState = {
	amount: 0
	
}


export const amountReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'DEPOSIT_MONEY' : 
			return {
				...state,
				amount: state.amount + 10
			}
			break;
		case 'WITHDRAW_MONEY' : 
			return {
				...state,
				amount: state.amount - 10
				
			}
			break;
		default:
			return state;
		
	}
	
}