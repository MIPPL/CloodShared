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
  size_bytes: number;
  hash: string;
  extension: string;
  mime_type: string;
  total_blocks: number;
  uploaded_blocks: number;
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
