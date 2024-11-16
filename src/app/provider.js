'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import request from '@/app/utils/request';

const SettingsContext = createContext();
const ContacsContext = createContext();
export function useSettings() {
    return useContext(SettingsContext);
}

export function useContacts() {
    return useContext(ContacsContext);
}

export function Providers({ children }) {
    const [settingsData, setSettingsData] = useState(null);
    const [contactsData, setContactsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const logError = (message, error) => console.error(message, error);

    const fetchSettingDatas = async () => {
        try {
            const response = await request.get("/setting");
            if (response?.status === 200) {
                setSettingsData(response.data.data);
            } else {
                logError("Error fetching settings data:", response?.errors);
            }
        } catch (error) {
            logError("Error fetching settings data:", error);
        }
    };

    const fetchContactDatas = async () => {
        try {
            const response = await request.get("/contact");
            if (response?.status === 200) {
                setContactsData(response.data);
            } else {
                logError("Error fetching contact data:", response?.errors);
            }
        } catch (error) {
            logError("Error fetching contact data:", error);
        }
    };

    useEffect(() => {
        setIsLoading(true);

        // Pakai promise allSettled untuk fetch data secara bersamaan dan ngabaikan error dalam suatu fungsi fetch
        Promise.allSettled([
            fetchSettingDatas(),
            fetchContactDatas(),
        ]).finally(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <SettingsContext.Provider value={{ settingsData, contactsData, isLoading }}>
            {children}
        </SettingsContext.Provider>
    );
};