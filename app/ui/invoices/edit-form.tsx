'use client';

import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import { updateInvoice } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function EditInvoiceForm({
  invoice,
}: {
  invoice: InvoiceForm;
}) {
  const updateInvoiceWithId = async (formData: FormData) => {
    return await updateInvoice(invoice.id, formData);
  };

  const [, formAction] = useActionState(
    updateInvoiceWithId,
    { message: '', errors: {} }
  );

  return (
    <form action={formAction}>
      {/* Other form fields go here */}
      <button type="submit">Update Invoice</button>
    </form>
  );
}

