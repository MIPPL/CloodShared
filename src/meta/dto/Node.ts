import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsHexadecimal
} from "class-validator";

class NodeRecordDto {
  id: string;
  parent_id: string;
  owner_id: number;
  name: string;
  path: string;
  created_at: Date;
  modified_at: Date;
  deleted_at: Date;
}

class CreateNodeRequestDto {
  @IsHexadecimal()
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
  @IsHexadecimal()
  id_node: number;

  @IsHexadecimal()
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
  id_node: string;
  error_code: string;
  error_message: string;
  name: string;
  path: string;
}

class SingleNodeRequestDto {
  @IsHexadecimal()
  id: string;

  @IsBoolean()
  @IsOptional()
  recursive: boolean;
}

class DeleteNodeRequestDto {
  @IsHexadecimal()
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
