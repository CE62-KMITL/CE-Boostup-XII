import { create } from "zustand";
import { PaginationRequestDto } from "../../dto/utils.dto";

interface PaginationRequestState {
    paginationRequest: PaginationRequestDto;
    setPaginationRequest: (paginationRequest: PaginationRequestDto) => void;
}

export const usePaginationRequestStore = create<PaginationRequestState>((set) => ({
    paginationRequest: {
        page: 1,
        perPage: 30,
        sort: "createdAt",
    },
    setPaginationRequest: (paginationRequest: PaginationRequestDto) => set({ paginationRequest }),
}));    