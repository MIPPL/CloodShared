import { ActionNodeResponseDto, CreateNodeRequestDto, NodeRecordDto, SeachNodeRequestDto, SingleNodeRequestDto, UpdateNodeRequestDto } from "./Node";
import { FileRecordDto } from "./File";
declare class FolderRecordDto extends NodeRecordDto {
    child_folders?: FolderRecordDto[];
    child_files?: FileRecordDto[];
}
declare class ReadFolderRequestDto {
    node_request: SingleNodeRequestDto;
    folder_filter: SeachNodeRequestDto;
    file_filter: SeachNodeRequestDto;
}
declare class CreateFolderRequestDto extends CreateNodeRequestDto {
}
declare class UpdateFolderRequestDto extends UpdateNodeRequestDto {
}
declare class ActionFolderResponseDto extends ActionNodeResponseDto {
}
declare class SingleFolderRequestDto extends SingleNodeRequestDto {
}
export { FolderRecordDto, CreateFolderRequestDto, ActionFolderResponseDto, UpdateFolderRequestDto, SingleFolderRequestDto, ReadFolderRequestDto, };
