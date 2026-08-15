import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createBranch = createAsyncThunk("/branch/create",
    async({dto}, {rejectWithValue})=>{

        try {
            const headers= getAuthHeaders();

            const res= await api.post(`/api/branches`, dto, {headers});

            console.log("create branch successfully", res.data);
            
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.date.message || "Failed to create branch")
            
        }

    }
);

export const getBranchById = createAsyncThunk("/branch/getById",
    async({id}, {rejectWithValue})=>{

        try {
            const headers= getAuthHeaders();

            const res= await api.get(`/api/branches/${id}`, {headers});

            console.log("get branch successfully", res.data);
            
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.date.message || "Failed to fetch branch")
            
        }

    }
);

export const getAllBranchesByStore = createAsyncThunk("/branch/getAllByStore",
    async({id}, {rejectWithValue})=>{

        try {
            const headers= getAuthHeaders();

            const res= await api.get(`/api/branches/store/${id}`, {headers})

            console.log("get store branches successfully", res.data);
            
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.date.message || "Failed to fetch store branch")
            
        }

    }
);

export const updateBranch = createAsyncThunk("/branch/update",
    async({id, dto}, {rejectWithValue})=>{

        try {
            const headers= getAuthHeaders();

            const res= await api.put(`/api/branches/store/${id}`,dto, {headers})

            console.log("update branch successfully", res.data);
            
            return res.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response?.date.message || "Failed to update branch")
            
        }

    }
);