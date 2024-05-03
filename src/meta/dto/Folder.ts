import {
  ActionNodeResponseDto,
  CreateNodeRequestDto,
  NodeRecordDto,
  SingleNodeRequestDto,
  UpdateNodeRequestDto,
} from "./Node";
import { FileRecordDto } from "./File";

class FolderRecordDto extends NodeRecordDto {
  child_folders?: FolderRecordDto[];
  child_files?: FileRecordDto[];
}

type CreateFolderRequestDto = typeof CreateNodeRequestDto;
type UpdateFolderRequestDto = typeof UpdateNodeRequestDto;
type ActionFolderResponseDto = typeof ActionNodeResponseDto;
type SingleFolderRequestDto = typeof SingleNodeRequestDto;

export {
  FolderRecordDto,
  CreateFolderRequestDto,
  ActionFolderResponseDto,
  UpdateFolderRequestDto,
  SingleFolderRequestDto,
};
