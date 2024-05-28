export type PaginationRequestDto = {
    page: number;
    perPage: number;
    sort: string;
    search?: string;
    tags?: string;
    difficulties?: string;
    owner?: string;
    problem?: string;
}