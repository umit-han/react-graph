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
    Token: `${token}`,
  },
};

export const getGraphData = createAsyncThunk(
  'graph/getGraphData',

  async () => {
    try {
      const resp = await axios.get(
        `https://api.wask.co/demo/myaccounts`,
        getGraphConfig
      );
      return resp.data.accounts;
    } catch (error) {
      return 'something went wrong';
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
