declare class NodeRecordDto {
    id: string;
    parent_id: string;
    owner_id: number;
    name: string;
    path: string;
    created_at: Date;
    modified_at: Date;
    deleted_at: Date;
}
declare class CreateNodeRequestDto {
    parent_id: string;
    name: string;
    auto_rename: boolean;
}
declare class UpdateNodeRequestDto {
    id_node: string;
    parent_id: string;
    name: string;
    auto_rename: boolean;
}
declare class ActionNodeResponseDto {
    id_node: string;
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
}
declare class SeachNodeRequestDto {
    name?: string;
    take?: number;
    skip?: number;
}
export { NodeRecordDto, CreateNodeRequestDto, ActionNodeResponseDto, UpdateNodeRequestDto, SingleNodeRequestDto, SeachNodeRequestDto, DeleteNodeRequestDto, };
