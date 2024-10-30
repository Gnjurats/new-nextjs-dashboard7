'use client';

import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
// import {
//   CheckIcon,
//   ClockIcon,
//   CurrencyDollarIcon,
//   UserCircleIcon,
// } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import { Button } from '@/app/ui/button';
import { updateInvoice } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function EditInvoiceForm({
  invoice,
  //customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [state, formAction] = useActionState(updateInvoiceWithId, { message: null, errors: {} });

  return (
    <form action={formAction}>
      {/* Other form fields go here */}
      <button type="submit">Update Invoice</button>
    </form>
  );
}
