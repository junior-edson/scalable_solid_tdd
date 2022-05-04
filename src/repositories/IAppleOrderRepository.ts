import { AppleOrder } from "../entities/AppleOrder";

export interface IAppleOrderRepository {
    findOrderByUserId(id_usuario: string): Promise<AppleOrder>;
    save(order: AppleOrder): Promise<void>;
}
