"use client";

import ApiService from "@/app/src/services/apiService";
import { SubmitContactForm } from "../../../../usecases/submitContactForm";
import IndexForm from "../redering/Form";

import { useState } from "react";

export default function FormLogic() {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    tel: "",
    service: "",
    ortherObject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiService = new ApiService();
    const submitFormUseCase = new SubmitContactForm(apiService);

    await submitFormUseCase.execute(
      formData,
      setFormData,
    );
  };

  return (
    <IndexForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formData={formData}
    />
  );
}
