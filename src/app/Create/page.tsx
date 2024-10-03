"use client";
import React, { useState } from 'react';
import type { DatePickerProps } from 'antd';
import { Button, DatePicker } from 'antd';
import { Card, CardBody, Divider } from "@nextui-org/react";
import TextArea from 'antd/es/input/TextArea';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { contractAdress, contractABI } from '@/data';
import { time } from 'console';


const onChange: DatePickerProps['onChange'] = (date, dateString) => {
	console.log(dateString.toString());
	let dateObject = new Date(dateString.toString().replace(' ', ''));
	let timestamp = dateObject.getTime();
	console.log(timestamp);
};

export default function Create() {
	const { data: hash, isPending, error, writeContract } = useWriteContract();

	const [timestamp, setTimestamp] = useState<number>(0);
	const [description, setDescription] = useState<string>('');
	const { address } = useAccount();

	const { data: read, refetch } = useReadContract({
		address: contractAdress,
		abi: contractABI,
		functionName: "getAllVotesDetails",
		args: [],
	});

	const getNumber = async () => {
		refetch();
		console.log(read);
	}


	const createVote = async () => {
		writeContract({
			address: contractAdress,
			abi: contractABI,
			functionName: "CreateVote",
			args: [description, timestamp],
			account: address,
		})
		console.log('Vote created');
	}



	return (
		<div>
			{address && <div className='flex justify-center'>
				<Card className='w-1/2 mt-10 text-black' >
					<CardBody>
						<h4>Description</h4>
						<TextArea rows={4} onChange={(e) => { setDescription(e.target.value) }} />
					</CardBody>
					<Divider />
					<CardBody>
						<input type="number" onChange={(e) => setTimestamp(Number(e.target.value))} />
						{/* <DatePicker onChange={(e) => setTimestamp(new Date(e.toString().replace(' ', '')).getTime())} /> */}
					</CardBody>
					<Divider />
					<CardBody>
						<Button onClick={createVote} type="primary">
							Send le vote
						</Button>
						<Button onClick={() => { console.log(timestamp, description) }}>Check</Button>
						<Button onClick={getNumber}>Get number</Button>
					</CardBody>
				</Card>
			</div>}
		</div>
	);
}