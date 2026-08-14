import { createSlice } from "@reduxjs/toolkit";
import { endShift, getCurrentShiftProgress, getShiftById, getShiftReportByDate, getShiftsByBranch, getShiftsByCashier, startShift } from "./shiftReportThunk";

const initialState= {
    shifts: [],
    currentShift: null,
    selectedShift: null,
    shiftsByCashier: [],
    shiftsByBranch: [],
    loading: false,
    error: null,
};

const shiftReportSlice = createSlice({
    name: "shoftReport",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(startShift.pending, (state)=>{
                state.loading= true;
            })
            .addCase(startShift.fulfilled, (state, action)=>{
                state.loading = false;
                state.selectedShift=action.payload;
                state.shifts.push(action.payload);
            })
            .addCase(startShift.rejected, (state, action)=>{
                state.loading = false;
                state.error= action.payload;
            })

            .addCase(endShift.pending, (state)=>{
                state.loading= true;
                state.error = null;
            })
            .addCase(endShift.fulfilled, (state, action)=>{
                state.loading = false;
                if(state.currentShift && state.currentShift.id === action.payload.id){
                    state.currentShift = action.payload;
                }

                const index = state.shifts.findIndex(shift => shift.id === action.payload.id);
                if(index !== -1){
                    state.shifts[index] = action.payload;
                }
            })
            .addCase(endShift.rejected, (state, action)=>{
                state.loading = false;
                state.error= action.payload;
            })

            .addCase(getCurrentShiftProgress.pending, (state)=>{
                state.loading= true;
                state.error= null;
            })
            .addCase(getCurrentShiftProgress.fulfilled, (state, action)=>{
                state.loading = false;
                state.currentShift=action.payload;
            })
            .addCase(getCurrentShiftProgress.rejected, (state, action)=>{
                state.loading = false;
                state.error= action.payload;
            })

            .addCase(getShiftReportByDate.pending, (state)=>{
                state.loading= true;
                state.error= null;
            })
            .addCase(getShiftReportByDate.fulfilled, (state, action)=>{
                state.loading = false;
                state.selectedShift=action.payload;
            })
            .addCase(getShiftReportByDate.rejected, (state, action)=>{
                state.loading = false;
                state.error= action.payload;
            })

            .addCase(getShiftsByCashier.pending, (state)=>{
                state.loading= true;
                state.error= null;
            })
            .addCase(getShiftsByCashier.fulfilled, (state, action)=>{
                state.loading = false;
                state.shiftsByCashier=action.payload;
            })
            .addCase(getShiftsByCashier.rejected, (state, action)=>{
                state.loading = false;
                state.error= action.payload;
            })

            .addCase(getShiftsByBranch.pending, (state)=>{
                state.loading= true;
                state.error= null;
            })
            .addCase(getShiftsByBranch.fulfilled, (state, action)=>{
                state.loading = false;
                state.shiftsByCashier=action.payload;
            })
            .addCase(getShiftsByBranch.rejected, (state, action)=>{
                state.loading = false;
                state.error= action.payload;
            })

            .addCase(getShiftById.pending, (state)=>{
                state.loading= true;
                state.error= null;
            })
            .addCase(getShiftById.fulfilled, (state, action)=>{
                state.loading = false;
                state.selectedShift=action.payload;
            })
            .addCase(getShiftById.rejected, (state, action)=>{
                state.loading = false;
                state.error= action.payload;
            })

    }
});


export default shiftReportSlice.reducer;