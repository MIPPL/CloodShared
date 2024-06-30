declare class NodeRecordDto {
    id: string;
    parentId: string;
    ownerId: number;
    name: string;
    path: string;
    createdAt: Date;
    modifiedAt: Date;
    deletedAt: Date;
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
