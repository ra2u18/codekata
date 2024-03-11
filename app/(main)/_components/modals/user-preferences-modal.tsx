"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/store/modal-store";
import { FormInput } from "../form/form-input";
import { FormSubmit } from "../form/form-submit";

export const UserPreferencesModal = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  const onClose = useModalStore((state) => state.onClose);

  const onSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;

    console.log(name);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        {/* Content header */}
        <DialogHeader>
          <DialogTitle>Set your preferences!</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done
          </DialogDescription>
        </DialogHeader>

        {/* Content body */}

        <form action={onSubmit} className="space-y-4">
          <div className="space-y-4">
            <FormInput id="name" label="First Name" type="text" />
            <FormInput id="surname" label="Surname" type="text" />
          </div>

          <div className="flex justify-end items-center">
            <FormSubmit className="md:w-[150px] w-full">Save</FormSubmit>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
