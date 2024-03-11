"use client";
import {toast} from 'react-toastify';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/store/modal-store";
import { useUserStore } from "@/store/user-store";

import { FormInput } from "../form/form-input";
import { FormSubmit } from "../form/form-submit";
import { FormSelect } from "../form/form-select";
import { FormPicker } from "../form/form-picker";

export const UserPreferencesModal = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  const modalOnClose = useModalStore((state) => state.onClose);

  const {
    name, surname, topic, clearUserData, setData
  } = useUserStore();

  const onSubmit = (formData: FormData) => {
    const formName = formData.get("name") as string;
    const formSurname = formData.get("surname") as string;

    if (!formName || !formSurname || !topic) {
      toast.error('Cannot submit with empty: Name, Surname or Topic');

      modalOnClose();
      clearUserData();
    }

    setData({
      name: formName,
      surname: formSurname
    })

    modalOnClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={modalOnClose}>
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
            <FormInput placeholder={name} id="name" label="First Name" type="text" />
            <FormInput placeholder={surname} id="surname" label="Surname" type="text" />
            <FormSelect topic={topic} />
            <FormPicker id="image" /> 
          </div>

          <div className="flex justify-end items-center">
            <FormSubmit className="md:w-[150px] md:p-3 md:mt-5 md:mx-auto w-full">Save</FormSubmit>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
