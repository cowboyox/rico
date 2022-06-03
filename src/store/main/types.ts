import Web3 from 'web3';
import { Coin } from '../../constants/coins';

export type MainState = {
	web3: Web3;
	readWeb3: Web3;
	address: string;
	balances?: { [key: string]: string };
	coingeckoPrices?: { [key: string]: number };
	hasUsdcApprove?: boolean;
	hasDaiApprove?: boolean;
	hasMkrApprove?: boolean;
	hasWethApprove?: boolean;
	hasWbtcApprove?: boolean;
	hasMaticApprove?: boolean;
	hasSushiApprove?: boolean;
	hasIdleApprove?: boolean;
	apy?: number;
	rewardsApy?: number;
	feesApy?: number;
	usdcRicFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	usdcSlpEthFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	usdcWethFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	daiMkrFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	mkrDaiFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	usdcMkrFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	mkrUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	daiMaticFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	maticDaiFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	usdcMaticFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	maticUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	daiEthFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	ethDaiFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	usdcWbtcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	wethUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	wbtcUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	usdcIdleFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	twoWayusdcWethFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	twoWaywethUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	twoWaywbtcUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	twoWayusdcWbtcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	twoWayDaiWethFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	twoWayWethDaiFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	twoWayRicUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	twoWayUsdcRicFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	twoWayMaticUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	twoWayUsdcMaticFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		receivedSoFar?: number;
	};
	// twoWayMaticDaiFlowQuery?: {
	//   flowKey: string,
	//   flowsReceived: number,
	//   flowsOwned: string,
	//   totalFlows: number,
	//   placeholder: string,
	//   subsidyRate: { perso:number, total:number, endDate:string },
	//   streamedSoFar?: number,
	//   receivedSoFar?: number,
	// },
	// twoWayDaiMaticFlowQuery?: {
	//   flowKey: string,
	//   flowsReceived: number,
	//   flowsOwned: string,
	//   totalFlows: number,
	//   placeholder: string,
	//   subsidyRate: { perso:number, total:number, endDate:string },
	//   streamedSoFar?: number,
	//   receivedSoFar?: number,
	// }
	// twoWayWbtcDaiFlowQuery?: {
	//   flowKey: string,
	//   flowsReceived: number,
	//   flowsOwned: string,
	//   totalFlows: number,
	//   placeholder: string,
	//   subsidyRate: { perso:number, total:number, endDate:string },
	//   streamedSoFar?: number,
	//   receivedSoFar?: number,
	// },
	// twoWayDaiWbtcFlowQuery?: {
	//   flowKey: string,
	//   flowsReceived: number,
	//   flowsOwned: string,
	//   totalFlows: number,
	//   placeholder: string,
	//   subsidyRate: { perso:number, total:number, endDate:string },
	//   streamedSoFar?: number,
	//   receivedSoFar?: number,
	// }
	isLoadingDowngrade: boolean;
	isLoadingUpgrade: boolean;
	isLoading: boolean;
	selectedDowngradeCoin: Coin;
	selectedUpgradeCoin: Coin;
	coinType: Coin;
	isReadOnly: boolean;
	referralId?: string;
};
