import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsNumberString,
} from "class-validator";

class NodeRecordDto {
  id: number;
  parent_id: number;
  owner_id: number;
  name: string;
  path: string;
  created_at: Date;
  modified_at: Date;
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
  id_node: number;
  error_code: string;
  error_message: string;
  name: string;
  path: string;
}

class SingleNodeRequestDto {
	@IsNumberString()
	id: string;

  @IsBoolean()
  @IsOptional()
  recursive: boolean;
}

class DeleteNodeRequestDto {
  @IsNumberString()
  id: string;

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
