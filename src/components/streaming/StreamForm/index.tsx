import React, { useState } from 'react';
import {
	DAIxAddress,
	USDCxAddress,
	WETHxAddress,
	MKRxAddress,
	WBTCxAddress,
	MATICxAddress,
	SUSHIxAddress,
	IDLExAddress,
	RICAddress,
	StIbAlluoETHAddress,
	StIbAlluoUSDAddress,
	StIbAlluoBTCAddress,
} from 'constants/polygon_config';
import { Loader } from 'components/common/Loader';
import { useShallowSelector } from 'hooks/useShallowSelector';
import { selectMain } from 'store/main/selectors';
import { blockInvalidChar } from 'utils/blockInvalidChars';
import { calculateFlowRate } from 'utils/calculateFlowRate';
import Grid from '@mui/material/Grid';
import styles from './styles.module.scss';

interface IProps {
	updateRecipient: (arg: string) => void;
	updateFlowRate: (arg: string) => void;
	updateSuperToken: (arg: string) => void;
	loading: boolean;
	createFlow: () => void;
}

export const StreamForm: React.FC<IProps> = ({
	createFlow,
	updateRecipient,
	updateFlowRate,
	updateSuperToken,
	loading,
}) => {
	const [addressProvided, setAddressStatus] = useState(false);
	const [flowProvided, setFlowStatus] = useState(false);
	const [tokenProvided, setTokenStatus] = useState(false);
	const state = useShallowSelector(selectMain);

	const supportedCurrencies = [
		{
			currency: 'DAIx',
			address: DAIxAddress,
		},

		{
			currency: 'USDCx',
			address: USDCxAddress,
		},

		{
			currency: 'WETHx',
			address: WETHxAddress,
		},

		{
			currency: 'MKRx',
			address: MKRxAddress,
		},

		{
			currency: 'WBTCx',
			address: WBTCxAddress,
		},

		{
			currency: 'MATICx',
			address: MATICxAddress,
		},

		{
			currency: 'SUSHIx',
			address: SUSHIxAddress,
		},

		{
			currency: 'IDLEx',
			address: IDLExAddress,
		},
		{
			currency: 'RIC',
			address: RICAddress,
		},
		{
			currency: 'StIbAlluoETH',
			address: StIbAlluoETHAddress,
		},
		{
			currency: 'StIbAlluoUSD',
			address: StIbAlluoUSDAddress,
		},
		{
			currency: 'StIbAlluoBTC',
			address: StIbAlluoBTCAddress,
		},
	];

	const { balances } = state;

	return (
		<Grid
			container
			xs={8}
			spacing={3}
			justifyContent="center"
			alignSelf="center"
			style={{
				backgroundColor: '#2d3233',
				borderRadius: '10px',
				color: 'lightblue',
				fontSize: '14px',
				padding: '2em',
				marginTop: '24px',
				marginLeft: '0px',
				maxWidth: '800px',
				paddingRight: '50px',
			}}
		>
			<Grid item xs={12} sm={12}>
				<label htmlFor="recipient" className={styles.label}>
					Recipient
				</label>
			</Grid>
			<Grid item xs={12} sm={12}>
				<input
					className={styles.input}
					type="text"
					id="recipient"
					placeholder="Receiver Address"
					onChange={async (e) => {
						if (e.target.value.length === 42) {
							await updateRecipient(e.target.value);
							setAddressStatus(true);
						}
					}}
				/>
			</Grid>

			<Grid item xs={12} sm={12}>
				<label className={styles.label} htmlFor="payment">
					Monthly payment amount
				</label>
			</Grid>
			<Grid item xs={12} sm={12}>
				<input
					id="payment"
					className={styles.input}
					type="number"
					placeholder="Payment Amount"
					onKeyDown={blockInvalidChar}
					min={0}
					onChange={async (e) => {
						const newFlow = await calculateFlowRate(+e.target.value);
						if (newFlow) {
							await updateFlowRate(newFlow.toString());
							setFlowStatus(true);
						}
					}}
				/>
			</Grid>

			<Grid item xs={12} sm={12}>
				<label className={styles.label} htmlFor="supertoken">
					Token to stream
				</label>
				<select
					name="SuperTokens"
					id="supertoken"
					onChange={async (e) => {
						await updateSuperToken(e.target.value);
						setTokenStatus(true);
					}}
					className={styles.select}
				>
					<option value="" selected>
						Choose A Token
					</option>
					{balances
						? supportedCurrencies.map((currency) => {
								if (+balances[currency.address] > 0) {
									return (
										<option value={`${currency.address}`}>
											{currency.currency} {(+balances[currency.address]).toFixed(2)}{' '}
										</option>
									);
								}
								return '';
						  })
						: ''}
				</select>
			</Grid>

			<Grid item xs={12} sm={12}>
				<button
					style={{ backgroundColor: '#79aad9' }}
					className={styles.input_field_submit}
					disabled={!addressProvided || !flowProvided || !tokenProvided}
					onClick={() => {
						createFlow();
					}}
				>
					{loading ? <Loader /> : 'Create Stream'}
				</button>
			</Grid>
		</Grid>
	);
};
