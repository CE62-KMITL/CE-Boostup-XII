export type PaginationRequestDto = {
    page: number;
    perPage: number;
    sort: string;
    search?: string;
    tags?: string[];
    difficulties?: number[];
    owner?: string;
}