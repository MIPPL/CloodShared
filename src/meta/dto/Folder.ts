import {
  ActionNodeResponseDto,
  CreateNodeRequestDto,
  DeleteNodeRequestDto,
  NodeRecordDto,
  SeachNodeRequestDto,
  SingleNodeRequestDto,
  UpdateNodeRequestDto,
} from "./Node";
import { FileRecordDto } from "./File";
import { IsBoolean, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";

class FolderRecordDto extends NodeRecordDto {
  child_folders?: FolderRecordDto[];
  child_files?: FileRecordDto[];
}

class ReadFolderRequestDto extends SeachNodeRequestDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  take?: number;

  @IsNumber()
  @IsOptional()
  skip?: number;
}

class CreateFolderRequestDto extends CreateNodeRequestDto {}
class UpdateFolderRequestDto extends UpdateNodeRequestDto {}
class ActionFolderResponseDto extends ActionNodeResponseDto {}
class SingleFolderRequestDto extends SingleNodeRequestDto {}
class DeleteFolderRequestDto {
	@IsNumberString()
	id: string;

	@IsBoolean()
	trash_only: boolean;  
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
