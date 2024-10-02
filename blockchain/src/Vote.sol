// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract Vote {
	struct vote {
		uint256 id;
		string description;
		uint256 voteUp;
		uint256 voteDown;
		uint256 timeCreate;
		uint256 timeEnd;
	}

	uint private nbVote;
	mapping(uint256 => vote) public idToVote;

	modifier onlyTime(uint256 _timeEnd) {
		require(
			block.timestamp < block.timestamp + (_timeEnd * 1 days),
			"the end time is smaller than create time"
		);
		_;
	}

	function CreateVote(
		string memory _description,
		uint256 _timeEnd
	) external onlyTime(_timeEnd) {
		idToVote[nbVote] = vote({
			id: nbVote,
			description: _description,
			voteUp: 0,
			voteDown: 0,
			timeCreate: block.timestamp,
			timeEnd: block.timestamp + (_timeEnd * 1 days)
		});
		nbVote++;
	}

	function VoteAgainst(uint256 _id) external onlyTime(idToVote[_id].timeEnd) {
		idToVote[_id].voteDown++;
	}

	function VoteFor(uint256 _id) external onlyTime(idToVote[_id].timeEnd) {
		idToVote[_id].voteUp++;
	}
}
