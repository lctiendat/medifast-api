import { ListCategoryResponseDto } from "@dto";
import { Controller, Get } from "@nestjs/common";


@Controller('category')
export class CategoryController {

    @Get('')
    findAll() : Promise<ListCategoryResponseDto | any> {
         return 
    }

}