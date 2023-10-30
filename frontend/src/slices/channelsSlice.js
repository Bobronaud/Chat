import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
  active: null,
};
const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    addChannels: (state, action) => {
      const channels = action.payload;
      state.channels =
        channels.length > 1 ? [...state.channels, ...channels] : [...state.channels, channels];
    },
    renameChannel: (state, action) => {
      const channel = action.payload;
      state.channels.find((e) => e.id === channel.id).name = channel.name;
    },
    removeChannel: (state, action) => {
      const { id } = action.payload;
      state.channels = state.channels.filter((e) => e.id !== id);
    },
    setActive: (state, action) => {
      const value = action.payload;
      state.active = value || state.channels.find((e) => e.name === 'general').id;
    },
  },
});

export const { addChannels, renameChannel, removeChannel, setActive } = channelsSlice.actions;

export default channelsSlice.reducer;