import { AppleOrder } from "../../entities/AppleOrder";
import { IAppleOrderRepository } from "../../repositories/IAppleOrderRepository";
import { ICreateOrderDTO } from "./CreateOrderDTO";

export class CreateOrderUseCase {
    constructor(
        private appleOrderRepository: IAppleOrderRepository
    ) {}

    async execute(data: ICreateOrderDTO): Promise<void> {
        const orderAlreadyExists = await this.appleOrderRepository.findOrderByUserId(data.id_usuario);

        if (orderAlreadyExists) {
            throw new Error("Order already exists");
        }

        const order = new AppleOrder(data);

        await this.appleOrderRepository.save(order);
    }
}
