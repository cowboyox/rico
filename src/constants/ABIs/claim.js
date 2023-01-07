export const claimABI = [
	{
		inputs: [
			{ internalType: 'contract ISuperfluid', name: '_host', type: 'address' },
			{ internalType: 'contract IConstantFlowAgreementV1', name: '_cfa', type: 'address' },
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		inputs: [
			{ internalType: 'contract ISuperToken', name: 'token', type: 'address' },
			{ internalType: 'int96', name: 'rate', type: 'int96' },
			{ internalType: 'uint256', name: 'duration', type: 'uint256' },
			{ internalType: 'uint256', name: 'deadline', type: 'uint256' },
		],
		name: 'addClaim',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: 'recipient', type: 'address' },
			{ internalType: 'uint256', name: 'claimIndex', type: 'uint256' },
		],
		name: 'addUserClaim',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'cfaV1',
		outputs: [
			{ internalType: 'contract ISuperfluid', name: 'host', type: 'address' },
			{ internalType: 'contract IConstantFlowAgreementV1', name: 'cfa', type: 'address' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{ inputs: [], name: 'claim', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'claims',
		outputs: [
			{ internalType: 'contract ISuperToken', name: 'token', type: 'address' },
			{ internalType: 'int96', name: 'rate', type: 'int96' },
			{ internalType: 'uint256', name: 'duration', type: 'uint256' },
			{ internalType: 'uint256', name: 'deadline', type: 'uint256' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{ inputs: [], name: 'closeNext', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [{ internalType: 'address', name: 'recipient', type: 'address' }],
		name: 'getFlow',
		outputs: [
			{ internalType: 'uint256', name: 'timestamp', type: 'uint256' },
			{ internalType: 'int96', name: 'flowRate', type: 'int96' },
			{ internalType: 'uint256', name: 'deposit', type: 'uint256' },
			{ internalType: 'uint256', name: 'owedDeposit', type: 'uint256' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{ inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: 'userClaims',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
];
