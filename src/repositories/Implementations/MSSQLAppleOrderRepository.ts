import { AppleOrder } from "../../entities/AppleOrder";
import { IAppleOrderRepository } from "../IAppleOrderRepository";

export class MSSQLAppleOrderRepository implements IAppleOrderRepository {
    private order: AppleOrder[] = [];

    async findOrderByUserId(id_usuario: string): Promise<AppleOrder> {
        return this.order.find(order => order.id_usuario === id_usuario);
    }

    async save(order: AppleOrder): Promise<void> {
        this.order.push(order);
    }
}
