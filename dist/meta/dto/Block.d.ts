declare class BlockRecordDto {
    id_block: number;
    size_bytes: number;
    hash: string;
    uploaded_bytes: number;
}
declare class FileBlockRecordDto extends BlockRecordDto {
    id_file: number;
    id_block: number;
    order: number;
}
declare class CreateFileBlockRequestDto {
    id_file: number;
    order: number;
    size_bytes: number;
    hash: string;
}
declare class CreateFileBlockResponseDto {
    id_block: number;
    error_code: string;
    error_message: string;
    already_exists: boolean;
}
declare class UpdateBlockRequestDto {
    id_block: number;
    uploaded_bytes: number;
}
declare class ActionBlockResponseDto {
    id_block: number;
    error_code: string;
    error_message: string;
}
export { BlockRecordDto, FileBlockRecordDto, CreateFileBlockRequestDto, CreateFileBlockResponseDto, UpdateBlockRequestDto, ActionBlockResponseDto, };
