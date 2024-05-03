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

class CreateFolderRequestDto extends CreateNodeRequestDto {}
class UpdateFolderRequestDto extends UpdateNodeRequestDto {}
class ActionFolderResponseDto extends ActionNodeResponseDto {}
class SingleFolderRequestDto extends SingleNodeRequestDto {}

export {
  FolderRecordDto,
  CreateFolderRequestDto,
  ActionFolderResponseDto,
  UpdateFolderRequestDto,
  SingleFolderRequestDto,
};
