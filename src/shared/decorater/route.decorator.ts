import { Controller, applyDecorators } from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";


export function Route(path: string) {
    return applyDecorators(
        Controller(path),
        ApiTags(path),
        ApiHeader({
            name: 'Accept-Language',
        })
    )
}