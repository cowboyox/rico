import React from 'react';
import styles from './styles.module.scss';
import { iconsCoin, namesCoinX } from 'constants/coins';

//'InvestNav' is declared but its value is never read.

interface IProps {}

const TokenModal = (props: any) => {
	return (
		<>
			{props.display ? (
				<div className={styles.modal}>
					<div className={styles.modal_container}>
						<div className={styles.row}>
							<div>select token:</div>
							<div>
								<button onClick={props.onClick}>X</button>
							</div>
						</div>
						<div>
							{namesCoinX.map((item) => {
								return (
									<div className={styles.token_selection} key={item}>
										<img alt="token-img" className={styles.token_image} src={iconsCoin.BTC} />{' '}
										<span>{item}</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

const WarningModal = (props: any) => {
	return (
		<>
			{props.display ? (
				<div className={styles.modal}>
					<div className={styles.modal_container}></div>
				</div>
			) : null}
		</>
	);
};

export const TradeContainer: React.FC<IProps> = () => {
	const [showTokenModal] = React.useState(true);
	const [showWaringModal] = React.useState(false);
	const [tokenA] = React.useState({ symbol: 'none', token: 'select token' });
	const [tokenB] = React.useState({ symbol: 'none', token: 'select token' });

	return (
		<>
			<TokenModal display={showTokenModal} />
			<WarningModal display={showWaringModal} />
			<div className={styles.outer_container}>
				<div className={styles.container}>
					<div className={styles.trade_box}>
						<div className={styles.row}>
							<button>Setting</button>
						</div>
						<div className={styles.trade_input}>
							<div>
								<input placeholder="0.0" />
							</div>
							<div>
								<button className={styles.swap_option}>
									<div>{tokenA.symbol}</div>
									<div>{tokenA.token}</div>
								</button>
								<div>balance: 0</div>
							</div>
						</div>

						<div className={styles.trade_input}>
							<div>
								<input placeholder="0.0" />
							</div>
							<div>
								<button className={styles.swap_option}>
									<div>{tokenB.symbol}</div>
									<div>{tokenB.token}</div>
								</button>
								<div>balance: 0</div>
							</div>
						</div>
						<div className={styles.trade_button}>
							<button>Swap</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
