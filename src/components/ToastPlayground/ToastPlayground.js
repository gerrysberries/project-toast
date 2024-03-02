import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [message, setMessage] = React.useState('');
	const [variant, setVariant] = React.useState('');

	return (
		<div className={styles.wrapper}>
			<header>
				<img
					alt="Cute toast mascot"
					src="/toast.png"
				/>
				<h1>Toast Playground</h1>
			</header>

			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{alignSelf: 'baseline'}}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							required
							id="message"
							className={styles.messageInput}
							value={message}
							onChange={event => setMessage(event.target.value)}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{/* <label htmlFor="variant-notice">
							<input
								id="variant-notice"
								type="radio"
								name="variant"
								value="notice"
								onChange={event => setVariant(event.target.value)}
							/>
							notice
						</label>
						<label htmlFor="variant-warning">
							<input
								id="variant-warning"
								type="radio"
								name="variant"
								value="warning"
								onChange={event => setVariant(event.target.value)}
							/>
							warning
						</label>
						<label htmlFor="variant-success">
							<input
								id="variant-success"
								type="radio"
								name="variant"
								value="success"
								onChange={event => setVariant(event.target.value)}
							/>
							success
						</label>
						<label htmlFor="variant-error">
							<input
								id="variant-error"
								type="radio"
								name="variant"
								value="error"
								onChange={event => setVariant(event.target.value)}
							/>
							error
						</label> */}

						{/* TODO Other Variant radio buttons here */}
						{VARIANT_OPTIONS.map(option => (
							<label htmlFor={option}>
								<input
									key={option}
									id={option}
									type="radio"
									name="variant"
									value={option}
									checked={option === variant}
									onChange={event => setVariant(event.target.value)}
								/>
								{option}
							</label>
						))}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
