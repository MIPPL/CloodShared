import { IsString, IsNumber } from "class-validator";
import {
  ActionNodeResponseDto,
  CreateNodeRequestDto,
  DeleteNodeRequestDto,
  NodeRecordDto,
  SingleNodeRequestDto,
  UpdateNodeRequestDto,
} from "./Node";

class FileRecordDto extends NodeRecordDto {
  sizeBytes: number;
  hash: string;
  extension: string;
  mimeType: string;
  totalBlocks: number;
  uploadedBlocks: number;
}

class CreateFileRequestDto extends CreateNodeRequestDto {
  @IsString()
  extension: string;

  @IsNumber()
  size_bytes: number;

  @IsString()
  hash: string;
}

class UpdateFileRequestDto extends UpdateNodeRequestDto {}
class SingleFileRequestDto extends SingleNodeRequestDto {}
class ActionFileResponseDto extends ActionNodeResponseDto {}
class DeleteFileRequestDto extends DeleteNodeRequestDto {}

export {
  FileRecordDto,
  CreateFileRequestDto,
  UpdateFileRequestDto,
  SingleFileRequestDto,
  ActionFileResponseDto,
  DeleteFileRequestDto,
};
