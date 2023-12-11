import { Category } from "@entity";
import { OmitType, PartialType } from "@nestjs/swagger";


export class ListCategoryResponseDto extends PartialType(OmitType(Category, ['id'] as const)) {
    
}