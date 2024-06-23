import {
  ActionNodeResponseDto,
  CreateNodeRequestDto,
  NodeRecordDto,
  SingleNodeRequestDto,
  UpdateNodeRequestDto,
  SeachNodeRequestDto,
  DeleteNodeRequestDto,
} from "./Node";
import { FileRecordDto } from "./File";
import {
  IsOptional,
  IsHexadecimal,
  IsBooleanString,
  IsBoolean,
} from "class-validator";

class FolderRecordDto extends NodeRecordDto {
  child_folders?: FolderRecordDto[];
  child_files?: FileRecordDto[];
}

class ReadFolderRequestDto extends SeachNodeRequestDto {
  @IsHexadecimal()
  id: string;

  @IsBooleanString()
  @IsOptional()
  recursive?: boolean;
}

class CreateFolderRequestDto extends CreateNodeRequestDto {}
class UpdateFolderRequestDto extends UpdateNodeRequestDto {}
class ActionFolderResponseDto extends ActionNodeResponseDto {}
class SingleFolderRequestDto extends SingleNodeRequestDto {}
class DeleteFolderRequestDto extends DeleteNodeRequestDto {
  @IsBoolean()
  recursive: boolean;
}

export {
  FolderRecordDto,
  CreateFolderRequestDto,
  ActionFolderResponseDto,
  UpdateFolderRequestDto,
  SingleFolderRequestDto,
  ReadFolderRequestDto,
  DeleteFolderRequestDto,
};
