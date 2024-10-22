import { toast } from "react-toastify";
import Control from "../utils/control";
export class SubmitContactForm {

  constructor(apiService) {
    this.apiService = apiService;
  }

  async execute(formData, setFormData) {
    try {
      
      if (
        !Control.isValidInputText(formData.lastName) ||
        !Control.isValidInputText(formData.firstName) ||
        !Control.isValidInputText(formData.message)
      ) {
        toast.error("Veuillez remplir les champs obligatoires.");
        return;
      }

      if (!Control.isValidEmail(formData.email)) {
        toast.error("L'email n'est pas valide.");
        return;
      }

      if (!Control.isValidPhone(formData.tel) && formData.tel !== "") {
        toast.error("Le numéro de téléphone n'est pas valide.");
        return;
      }

      const res = await this.apiService.post("/api/contact", formData);

      if (!res.ok) {
        toast.error("Erreur lors de la soumission du formulaire");
        return
      }

      const data = await res.json();
      toast.success(data.message);

      setFormData({
        lastName: "",
        firstName: "",
        email: "",
        tel: "",
        service: "",
        message: "",
      });

    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Erreur lors de la soumission du formulaire");
    }
  }
}
