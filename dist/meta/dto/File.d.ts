import { CreateNodeRequestDto, NodeRecordDto, SingleNodeRequestDto, UpdateNodeRequestDto } from "./Node";
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
type UpdateFileRequestDto = typeof UpdateNodeRequestDto;
type SingleFileRequestDto = typeof SingleNodeRequestDto;
export { FileRecordDto, CreateFileRequestDto, UpdateFileRequestDto, SingleFileRequestDto, };
