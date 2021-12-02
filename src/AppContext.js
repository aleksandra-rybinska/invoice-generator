import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [invoiceData, setInvoiceData] = useLocalStorage('invoiceData', []);
    const [invoicePosition, setInvoicePosition] = useLocalStorage(
        'invoicePosition',
        []
    );

    const [positionsList, setPositionsList] = useLocalStorage(
        'positionsList',
        []
    );

    const updateInvoiceData = (e) => {
        setInvoiceData({
            ...invoiceData,
            [e.target.name]: e.target.value,
        });
    };

    const updateInvoicePosition = (e) => {
        setInvoicePosition({
            ...invoicePosition,
            [e.target.name]: e.target.value,
        });
    };

    const updatePositionsList = () => {
        const newPosition = {
            id: uuidv4(),
            description: invoicePosition.description,
            jm: invoicePosition.jm,
            quantity: invoicePosition.quantity,
            price: invoicePosition.price,
            amount: invoicePosition.amount,
        };

        setPositionsList([...positionsList, newPosition]);
        setInvoicePosition([]);
    };

    const value = {
        invoiceData,
        updateInvoiceData,
        invoicePosition,
        updateInvoicePosition,
        updatePositionsList,
        positionsList,
        setInvoicePosition,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useInvoice = () => {
    return useContext(AppContext);
};

// Local storage hook: https://usehooks.com/useLocalStorage/?fbclid=IwAR0h5qXIzD8JAptCbqrKaFCbTsFQgROa7_f51GKzoCNjjYPQ7Ln9EurFcLs
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };

    return [storedValue, setValue];
}
