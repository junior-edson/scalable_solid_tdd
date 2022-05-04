import { Request, Response } from "express";
import { CreateOrderUseCase } from "../../useCases/CreateOrder/CreateOrderUseCase";

export class CreateOrderController {
    constructor(
        private createOrderUseCase: CreateOrderUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { ...orderData } = request.body;

        try {
            await this.createOrderUseCase.execute({
                ...orderData
            });

            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
