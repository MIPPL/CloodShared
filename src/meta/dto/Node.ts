import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsHexadecimal,
  IsBooleanString,
} from "class-validator";

class NodeRecordDto {
  id: string;
  parentId: string;
  ownerId: number;
  name: string;
  path: string;
  createdAt: Date;
  modifiedAt: Date;
  deletedAt: Date;
}

class CreateNodeRequestDto {
  @IsHexadecimal()
  @IsOptional()
  parent_id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsOptional()
  auto_rename: boolean;
}

class UpdateNodeRequestDto {
  @IsHexadecimal()
  id_node: string;

  @IsHexadecimal()
  @IsOptional()
  parent_id: string;

  @IsString()
  @IsOptional()
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

  @IsBooleanString()
  @IsOptional()
  recursive: boolean;
}

class DeleteNodeRequestDto {
  @IsHexadecimal()
  id: string;

  @IsBoolean()
  trash_only: boolean;
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
