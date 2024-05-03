import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsBoolean,
} from "class-validator";

class NodeRecordDto {
  id: number;
  parent_id: number;
  owner_id: number;
  name: string;
  path: string;
  created_at: Date;
  modified_at: Date;
  path_name: string;
  deleted_at: Date;
}

class CreateNodeRequestDto {
  @IsNumber()
  @IsOptional()
  parent_id: number;

  @IsNumber()
  owner_id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsOptional()
  auto_rename: boolean;
}

class UpdateNodeRequestDto {
  @IsNumber()
  folder_id: number;

  @IsNumber()
  @IsOptional()
  parent_id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsOptional()
  auto_rename: boolean;
}

class ActionNodeResponseDto {
  id_file: number;
  error_code: string;
  error_message: string;
  name: string;
  path: string;
  path_name: string;
}

class SingleNodeRequestDto {
  @IsNumber()
  id_folder: number;

  @IsBoolean()
  @IsOptional()
  recursive: boolean;
}

export {
  NodeRecordDto,
  CreateNodeRequestDto,
  ActionNodeResponseDto,
  UpdateNodeRequestDto,
  SingleNodeRequestDto,
};
