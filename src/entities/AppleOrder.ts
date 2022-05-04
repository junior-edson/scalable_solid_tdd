import { uuid } from "uuidv4";

export class AppleOrder {
    public readonly id: string;

    // Apple data
    public transaction_id: string;
    public original_transaction_id: string;
    public product_id: string;
    public web_order_line_item_id: string;
    public receipt_data: string;
    public latest_receipt: string;
    public subscription_group_identifier: string;
    public password: string;
    public templ_doc: string;
    public templ_doc_trial: string;
    public is_trial_period: boolean;
    public auto_renew_status: boolean;
    public is_in_billing_retry_period: boolean;
    public quantity: number;
    public expiration_intent: number;
    public purchase_date_ms:string
    public expires_date_ms: string;
    public cancellation_date_ms: string;

    // Estadão data
    public id_usuario: string;
    public email: string;
    public created_at: string;
    public updated_at: string;

    constructor(props: Omit<AppleOrder, 'id'|'created_at'|'updated_at'>, id?: string, created_at?: string, updated_at?: string) {
        Object.assign(this, props);

        this.id = id || uuid();
        this.created_at = created_at || new Date().toString();
        this.updated_at = updated_at || new Date().toString();
    }
}
