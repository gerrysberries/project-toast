import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({handleDismiss, toastList}) {
	// console.log('shelf rendered');
	return (
		<ol className={styles.wrapper}>
			{toastList.map(({id, variant, message}) => (
				<li
					key={id}
					className={styles.toastWrapper}
				>
					<Toast
						id={id}
						variant={variant}
						handleDismiss={handleDismiss}
					>
						{message}{' '}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default React.memo(ToastShelf);
