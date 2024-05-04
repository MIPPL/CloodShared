import { ActionNodeResponseDto, CreateNodeRequestDto, NodeRecordDto, SingleNodeRequestDto, UpdateNodeRequestDto } from "./Node";
declare class FileRecordDto extends NodeRecordDto {
    size_bytes: number;
    hash: string;
    extension: string;
    mime_type: string;
    total_blocks: number;
    uploaded_blocks: number;
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
export { FileRecordDto, CreateFileRequestDto, UpdateFileRequestDto, SingleFileRequestDto, ActionFileResponseDto, };
