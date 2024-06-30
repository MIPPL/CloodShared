import { ActionNodeResponseDto, CreateNodeRequestDto, DeleteNodeRequestDto, NodeRecordDto, SingleNodeRequestDto, UpdateNodeRequestDto } from "./Node";
declare class FileRecordDto extends NodeRecordDto {
    sizeBytes: number;
    hash: string;
    extension: string;
    mimeType: string;
    totalBlocks: number;
    uploadedBlocks: number;
}
declare class CreateFileRequestDto extends CreateNodeRequestDto {
    extension: string;
    size_bytes: number;
    hash: string;
}
declare class UpdateFileRequestDto extends UpdateNodeRequestDto {
}
declare class SingleFileRequestDto extends SingleNodeRequestDto {
}
declare class ActionFileResponseDto extends ActionNodeResponseDto {
}
declare class DeleteFileRequestDto extends DeleteNodeRequestDto {
}
export { FileRecordDto, CreateFileRequestDto, UpdateFileRequestDto, SingleFileRequestDto, ActionFileResponseDto, DeleteFileRequestDto, };
