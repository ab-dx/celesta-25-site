import { z } from "zod";

export const invoiceSchema = z.object({
  transaction_id: z.string(),
  item_id: z.string(),
  qty: z.number()
});
