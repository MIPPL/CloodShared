declare class NodeRecordDto {
    id: number;
    parent_id: number;
    owner_id: number;
    name: string;
    path: string;
    created_at: Date;
    modified_at: Date;
    deleted_at: Date;
}
declare class CreateNodeRequestDto {
    parent_id: number;
    name: string;
    auto_rename: boolean;
}
declare class UpdateNodeRequestDto {
    id_node: number;
    parent_id: number;
    name: string;
    auto_rename: boolean;
}
declare class ActionNodeResponseDto {
    id_node: number;
    error_code: string;
    error_message: string;
    name: string;
    path: string;
}
declare class SingleNodeRequestDto {
    id: string;
    recursive: boolean;
}
declare class DeleteNodeRequestDto {
    id: string;
    trash_only: boolean;
    recursive: boolean;
}
declare class SeachNodeRequestDto {
    name?: string;
    take?: number;
    skip?: number;
}
export { NodeRecordDto, CreateNodeRequestDto, ActionNodeResponseDto, UpdateNodeRequestDto, SingleNodeRequestDto, SeachNodeRequestDto, DeleteNodeRequestDto, };
