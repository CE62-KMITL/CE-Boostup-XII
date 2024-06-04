import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AttachmentModelResponse } from "../../types/response.type";

export interface AttachmentAppState {
  attachments: AttachmentModelResponse[] | null;
}

const initialState: AttachmentAppState = {
  attachments: null,
};

export const attachmentSlice = createSlice({
  name: "attachments",
  initialState,
  reducers: {
    setAttachmentState: (state, action: PayloadAction<AttachmentModelResponse[]>) => {
        state.attachments = action.payload;
    },
  },
});

export const {
  setAttachmentState,
} = attachmentSlice.actions;