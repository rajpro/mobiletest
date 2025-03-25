import { UserModel } from '@/models/userModel';
import axios from 'axios';

const API_URL = 'http://api.odishadoctors.in/api/v1'; // Replace with your API endpoint

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (data: UserModel) => {
    try {
        const response = await api.post('/login', data);
        return response.data;
    } catch (error) {
        console.error('Username & Password are incorrect.');
        throw error;
    }
};

export const getItems = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};

export const getItemById = async (id: string) => {
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching item:', error);
        throw error;
    }
};

export const createItem = async (data: any) => {
    try {
        const response = await api.post('/', data);
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error);
        throw error;
    }
};

export const updateItem = async (id: string, data: any) => {
    try {
        const response = await api.put(`/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating item:', error);
        throw error;
    }
};

export const deleteItem = async (id: string) => {
    try {
        await api.delete(`/${id}`);
        return { success: true };
    } catch (error) {
        console.error('Error deleting item:', error);
        throw error;
    }
};
