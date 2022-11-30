import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: any = {
  loading: false,
  error: '',
  getGraphList: [],
};

const token = '2zcgJnjDyb';

let getGraphConfig: any = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const getGraphData = createAsyncThunk(
  'graph/getGraphData',

  async (data: any, thunkAPI) => {
    try {
      const resp = await axios.get(`https://api.wask.co/demo/myaccounts`,
        getGraphConfig
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const getGraphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {},
  extraReducers: {
    [getGraphData.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [getGraphData.fulfilled as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.getGraphList = action.payload;
    },
    [getGraphData.rejected as any]: (state: any, action: any) => {
      state.isLoading = false;
    },
  },
});

export default getGraphSlice.reducer;
