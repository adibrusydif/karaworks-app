import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EventApi } from '@api/endpoints/event';
import { handleAxiosError } from '@api/errorHandler';
import { EventPhotoPayload } from '@type/api/event';
import { EventPhoto } from '@type/models/event';
import { BaseStateProps } from '@type/models/state';
import { uriToFile } from '@utils';

export const uploadEventPhoto = createAsyncThunk(
  'event/upload-event-photo',
  async (payload: EventPhotoPayload, { rejectWithValue }) => {
    const { eventId, imageUri } = payload;

    const formData = new FormData();
    formData.append(
      'photo',
      uriToFile(imageUri, `event-${eventId}`) as unknown as Blob,
    );

    try {
      const response = await EventApi.uploadEventPhoto(eventId, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

const initialState: BaseStateProps<EventPhoto | null> = {
  data: null,
  isLoading: false,
  isError: false,
  error: null,
};

export const eventPhotoSlice = createSlice({
  name: 'eventPhoto',
  initialState,
  reducers: {
    resetUploadEventPhoto: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadEventPhoto.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(uploadEventPhoto.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(uploadEventPhoto.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { resetUploadEventPhoto } = eventPhotoSlice.actions;
export default eventPhotoSlice.reducer;
