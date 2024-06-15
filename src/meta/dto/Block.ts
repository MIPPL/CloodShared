import { IsString, IsNotEmpty, IsNumber, IsHexadecimal } from "class-validator";

class BlockRecordDto {
  id_block: number;
  size_bytes: number;
  hash: string;
  uploaded_bytes: number;
}

class FileBlockRecordDto extends BlockRecordDto {
  id_file: string;
  id_block: number;
  order: number;
}

class CreateFileBlockRequestDto {
  @IsHexadecimal()
  id_file: string;

  @IsNumber()
  order: number;

  @IsNumber()
  size_bytes: number;

  @IsString()
  @IsNotEmpty()
  hash: string;
}

class CreateFileBlockResponseDto {
  id_block: number;
  error_code: string;
  error_message: string;
  already_exists: boolean;
}

class UpdateBlockRequestDto {
  @IsNumber()
  id_block: number;

  @IsNumber()
  uploaded_bytes: number;
}

class ActionBlockResponseDto {
  id_block: number;
  error_code: string;
  error_message: string;
}

export {
  BlockRecordDto,
  FileBlockRecordDto,
  CreateFileBlockRequestDto,
  CreateFileBlockResponseDto,
  UpdateBlockRequestDto,
  ActionBlockResponseDto,
};
