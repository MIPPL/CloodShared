import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional
} from "class-validator";

class FolderRecordDto {
  id: number;
  parent_id: number;
  owner_id: number;
  name: string;
  path: string;
  created_at: Date;
  modified_at: Date;
}

class CreateFolderRequestDto {
  @IsNumber()
  @IsOptional()
  parent_id: number;

@IsNumber()
  owner_id: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}

class UpdateFolderRequestDto {
	@IsNumber()
	folder_id: number;
	
	@IsNumber()
	@IsOptional()
	parent_id: number;
  
	@IsString()
	@IsNotEmpty()
	name: string;
  }

class ActionFolderResponseDto {
  folder_id: number;
  error_code: string;
  error_message: string;
}

class SingleFolderRequestDto {
	@IsNumber()
	folder_id: number;
}

export { FolderRecordDto,
		CreateFolderRequestDto, 
		ActionFolderResponseDto,
		UpdateFolderRequestDto,
	 SingleFolderRequestDto};
