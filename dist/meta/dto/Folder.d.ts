import { ActionNodeResponseDto, CreateNodeRequestDto, NodeRecordDto, SeachNodeRequestDto, SingleNodeRequestDto, UpdateNodeRequestDto } from "./Node";
import { FileRecordDto } from "./File";
declare class FolderRecordDto extends NodeRecordDto {
    child_folders?: FolderRecordDto[];
    child_files?: FileRecordDto[];
}
declare class ReadFolderRequestDto extends SeachNodeRequestDto {
    name?: string;
    take?: number;
    skip?: number;
}
declare class CreateFolderRequestDto extends CreateNodeRequestDto {
}
declare class UpdateFolderRequestDto extends UpdateNodeRequestDto {
}
declare class ActionFolderResponseDto extends ActionNodeResponseDto {
}
declare class SingleFolderRequestDto extends SingleNodeRequestDto {
}
declare class DeleteFolderRequestDto {
    id: string;
    trash_only: boolean;
}
export { FolderRecordDto, CreateFolderRequestDto, ActionFolderResponseDto, UpdateFolderRequestDto, SingleFolderRequestDto, ReadFolderRequestDto, DeleteFolderRequestDto, };
