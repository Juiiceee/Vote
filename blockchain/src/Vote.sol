// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract Vote {
	vote public voteUnit;
	mapping(address => bool) public addressToVote;

	struct vote {
		string description;
		uint256 voteUp;
		uint256 voteDown;
		uint256 timeCreate;
		uint256 timeEnd;
	}

	modifier onlyTime(uint256 _timeEnd) {
		require(block.timestamp < _timeEnd, "Voting period has ended");
		_;
	}

	modifier onlyOneTime() {
		require(!addressToVote[msg.sender], "You can only vote once");
		_;
	}

	constructor(string memory _description, uint256 _timeEnd) {
		require(
			block.timestamp < block.timestamp + (_timeEnd * 1 days),
			"the end time is smaller than create time"
		);

		voteUnit = vote({
			description: _description,
			voteUp: 0,
			voteDown: 0,
			timeCreate: block.timestamp,
			timeEnd: block.timestamp + (_timeEnd * 1 days)
		});
	}

	function VoteAgainst() external onlyTime(voteUnit.timeEnd) onlyOneTime {
		voteUnit.voteDown++;
		addressToVote[msg.sender] = true;
	}

	function VoteFor() external onlyTime(voteUnit.timeEnd) onlyOneTime {
		voteUnit.voteUp++;
		addressToVote[msg.sender] = true;
	}

	function getVoteDetails()
		external
		view
		returns (
			string memory description,
			uint256 voteUp,
			uint256 voteDown,
			uint256 timeCreate,
			uint256 timeEnd
		)
	{
		return (
			voteUnit.description,
			voteUnit.voteUp,
			voteUnit.voteDown,
			voteUnit.timeCreate,
			voteUnit.timeEnd
		);
	}
}

contract VoteFactory {
	Vote[] public votes;

	event VoteCreated(address voteAddress, string description, uint256 timeEnd);

	function createVote(string memory _description, uint256 _timeEnd) external {
		Vote newVote = new Vote(_description, _timeEnd);
		votes.push(newVote);
		emit VoteCreated(address(newVote), _description, _timeEnd);
	}

	function getAllVotesDetails()
		external
		view
		returns (
			string[] memory descriptions,
			uint256[] memory votesUp,
			uint256[] memory votesDown,
			uint256[] memory timesCreate,
			uint256[] memory timesEnd
		)
	{
		uint256 numVotes = votes.length;

		string[] memory descriptionsArray = new string[](numVotes);
		uint256[] memory votesUpArray = new uint256[](numVotes);
		uint256[] memory votesDownArray = new uint256[](numVotes);
		uint256[] memory timesCreateArray = new uint256[](numVotes);
		uint256[] memory timesEndArray = new uint256[](numVotes);

		for (uint256 i = 0; i < numVotes; i++) {
			(
				string memory description,
				uint256 voteUp,
				uint256 voteDown,
				uint256 timeCreate,
				uint256 timeEnd
			) = votes[i].getVoteDetails();

			descriptionsArray[i] = description;
			votesUpArray[i] = voteUp;
			votesDownArray[i] = voteDown;
			timesCreateArray[i] = timeCreate;
			timesEndArray[i] = timeEnd;
		}

		return (
			descriptionsArray,
			votesUpArray,
			votesDownArray,
			timesCreateArray,
			timesEndArray
		);
	}

	function VoteAgainst(uint256 _index) external {
		votes[_index].VoteAgainst();
	}

	function VoteFor(uint256 _index) external {
		votes[_index].VoteFor();
	}
}
