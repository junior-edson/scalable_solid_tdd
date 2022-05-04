export interface ICreateOrderDTO {
    // Apple data
    transaction_id: string;
    original_transaction_id: string;
    product_id: string;
    web_order_line_item_id: string;
    receipt_data: string;
    latest_receipt: string;
    subscription_group_identifier: string;
    password: string;
    templ_doc: string;
    templ_doc_trial: string;
    is_trial_period: boolean;
    auto_renew_status: boolean;
    is_in_billing_retry_period: boolean;
    quantity: number;
    expiration_intent: number;
    purchase_date_ms: string;
    expires_date_ms: string;
    cancellation_date_ms: string;

    // Estadão data
    id_usuario: string;
    email: string;
}
