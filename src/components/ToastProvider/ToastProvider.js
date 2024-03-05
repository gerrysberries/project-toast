import React from 'react';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export const ToastContext = React.createContext();

function ToastProvider({children}) {
	const [message, setMessage] = React.useState('');
	const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
	const [toastList, setToastList] = React.useState([]);

	function handleDismiss(id) {
		const newToastList = toastList.filter(toast => toast.id !== id);

		setToastList(newToastList);
	}

	function handleCreateToast(e) {
		e.preventDefault();

		// My original solution:

		// const newToast = {
		// 	id: crypto.randomUUID(),
		// 	variant,
		// 	message,
		// };
		// setToastList([...toastList, newToast])

		// Josh's solution:
		const nextToasts = [...toastList, {id: crypto.randomUUID(), variant, message}];
		setToastList(nextToasts);

		setMessage('');
		setVariant(VARIANT_OPTIONS[0]);
		// console.log(toastList);
	}

	return <ToastContext.Provider value={{message, variant, toastList, handleDismiss, handleCreateToast, setMessage, setVariant, VARIANT_OPTIONS}}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
