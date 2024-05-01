declare class FolderRecordDto {
    id: number;
    parent_id: number;
    owner_id: number;
    name: string;
    path: string;
    created_at: Date;
    modified_at: Date;
}
declare class CreateFolderRequestDto {
    parent_id: number;
    owner_id: number;
    name: string;
}
declare class UpdateFolderRequestDto {
    folder_id: number;
    parent_id: number;
    name: string;
}
declare class ActionFolderResponseDto {
    folder_id: number;
    error_code: string;
    error_message: string;
}
declare class SingleFolderRequestDto {
    folder_id: number;
}
export { FolderRecordDto, CreateFolderRequestDto, ActionFolderResponseDto, UpdateFolderRequestDto, SingleFolderRequestDto, };
