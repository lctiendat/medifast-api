import { Body, NotFoundException, Post } from "@nestjs/common";
import { Route } from "@shared";
import { AuthService } from "@service";

@Route("auth")
export class AuthController {

    constructor(
        private readonly authService : AuthService
    ) {}
    @Post("signup")
    async signup(@Body() body: any) {
        return {
            success: true,
            data: await this.authService.signup(body.username, body.password)
        }
    }
}