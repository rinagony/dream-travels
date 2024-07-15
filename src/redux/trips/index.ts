import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TripProps } from '../../interfaces';
import { getTrips } from '../../services/api';

interface TripsState {
  trips: TripProps[];
  loading: boolean;
  error: string | null;
}

const initialState: TripsState = {
  trips: [],
  loading: false,
  error: null,
};

export const fetchTrips = createAsyncThunk<TripProps[]>('trips/fetchTrips', async () => {
  return await getTrips();
});

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    addTrip: (state, action) => {
      state.trips.push(action.payload);
    },
    removeTrip: (state, action) => {
      state.trips = state.trips.filter(trip => trip.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrips.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrips.fulfilled, (state, action) => {
        state.loading = false;
        state.trips = action.payload;
      })
      .addCase(fetchTrips.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch trips';
      });
  },
});

export const { addTrip, removeTrip } = tripsSlice.actions;

export default tripsSlice.reducer;