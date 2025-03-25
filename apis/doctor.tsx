import { DoctorModel } from '@/models/doctorModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL = 'http://api.odishadoctors.in/api/v1'; // Replace with your API endpoint

const getApiClient = async () => {
    const token = await AsyncStorage.getItem('token'); // Wait for token retrieval
    return axios.create({
        baseURL: API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : '',
        },
    });
};

export const getDoctors = async () => {
    const api = await getApiClient(); // Wait for axios instance
    try {
        const response = await api.post('/get_doctors');
        const data: DoctorModel[] = response.data.data;
        return data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};

export const getItemById = async (id: string) => {
    const api = await getApiClient(); // Wait for axios instance
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching item:', error);
        throw error;
    }
};

export const createItem = async (data: any) => {
    const api = await getApiClient(); // Wait for axios instance
    try {
        const response = await api.post('/', data);
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error);
        throw error;
    }
};

export const updateItem = async (id: string, data: any) => {
    const api = await getApiClient(); // Wait for axios instance
    try {
        const response = await api.put(`/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating item:', error);
        throw error;
    }
};

export const deleteItem = async (id: string) => {
    const api = await getApiClient(); // Wait for axios instance
    try {
        await api.delete(`/${id}`);
        return { success: true };
    } catch (error) {
        console.error('Error deleting item:', error);
        throw error;
    }
};
