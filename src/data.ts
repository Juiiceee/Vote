// export const contractAdress = "0xECe3E224C2Fad415Fc7f26B7939F6e6c317C05D0";
export const contractAdress = "0x203dc9c9b5185b355ea93c97e6ee7534215b078a";
export const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_timeEnd",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "VoteAgainst",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "VoteFor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToVote",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getVoteDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteUp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "voteDown",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timeCreate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timeEnd",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "voteUnit",
		"outputs": [
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteUp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "voteDown",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timeCreate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timeEnd",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]