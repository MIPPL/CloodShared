import { ActionNodeResponseDto, CreateNodeRequestDto, NodeRecordDto, SingleNodeRequestDto, UpdateNodeRequestDto, SeachNodeRequestDto, DeleteNodeRequestDto } from "./Node";
import { FileRecordDto } from "./File";
declare class FolderRecordDto extends NodeRecordDto {
    child_folders?: FolderRecordDto[];
    child_files?: FileRecordDto[];
}
declare class ReadFolderRequestDto extends SeachNodeRequestDto {
    id: string;
    recursive?: boolean;
}
declare class CreateFolderRequestDto extends CreateNodeRequestDto {
}
declare class UpdateFolderRequestDto extends UpdateNodeRequestDto {
}
declare class ActionFolderResponseDto extends ActionNodeResponseDto {
}
declare class SingleFolderRequestDto extends SingleNodeRequestDto {
}
declare class DeleteFolderRequestDto extends DeleteNodeRequestDto {
    recursive: boolean;
}
export { FolderRecordDto, CreateFolderRequestDto, ActionFolderResponseDto, UpdateFolderRequestDto, SingleFolderRequestDto, ReadFolderRequestDto, DeleteFolderRequestDto, };
