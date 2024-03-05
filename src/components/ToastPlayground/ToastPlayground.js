import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf/';
import {ToastContext} from '../ToastProvider';

import styles from './ToastPlayground.module.css';

function ToastPlayground() {
	const {toastList, variant, message, handleCreateToast, handleDismiss, VARIANT_OPTIONS, setMessage, setVariant} = React.useContext(ToastContext);

	return (
		<div className={styles.wrapper}>
			<header>
				<img
					alt="Cute toast mascot"
					src="/toast.png"
				/>
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf
				toastList={toastList}
				handleDismiss={handleDismiss}
			/>

			<form
				onSubmit={handleCreateToast}
				action=""
				className={styles.controlsWrapper}
			>
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
							required={true}
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
						{VARIANT_OPTIONS.map(option => {
							const id = `variant-${option}`;

							return (
								<label
									key={id}
									htmlFor={id}
								>
									<input
										id={id}
										type="radio"
										name="variant"
										value={option}
										checked={option === variant}
										onChange={event => setVariant(event.target.value)}
									/>
									{option}
								</label>
							);
						})}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
