import { useMutation } from "@tanstack/react-query";
import { submitContact } from "../services/contactAPI";

export function useContact() {
  return useMutation({
    mutationFn: (data: {
      name: string;
      email: string;
      subject: string;
      message: string;
      phone: string;
    }) => submitContact(data),
  });
}
