export const contractAdress = "0xECe3E224C2Fad415Fc7f26B7939F6e6c317C05D0";
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
		"name": "CreateVote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "VoteAgainst",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "VoteFor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "idToVote",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
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