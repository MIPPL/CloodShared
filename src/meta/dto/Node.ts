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

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsOptional()
  auto_rename: boolean;
}

class UpdateNodeRequestDto {
  @IsNumber()
  id_node: number;

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
  id: number;
  error_code: string;
  error_message: string;
  name: string;
  path: string;
  path_name: string;
}

class SingleNodeRequestDto {
  @IsBoolean()
  @IsOptional()
  recursive: boolean;
}

class DeleteNodeRequestDto {
  @IsBoolean()
  trash_only: boolean;

  @IsBoolean()
  @IsOptional()
  recursive: boolean;
}

class SeachNodeRequestDto {
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

export {
  NodeRecordDto,
  CreateNodeRequestDto,
  ActionNodeResponseDto,
  UpdateNodeRequestDto,
  SingleNodeRequestDto,
  SeachNodeRequestDto,
  DeleteNodeRequestDto,
};
