import { ToastContainer } from "react-toastify";

import servicesArray from "@/app/src/data/services";
import RequireInput from "../../../UI/RequireInput";
import SubmitButton from "../../../UX/SubmitButton";

export default function IndexForm({
  handleSubmit,
  handleChange,
  formData = {},
}) {
  return (
    <>
      <form
        className="text-blackContrast flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="lastName">
              Nom : <RequireInput />
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="p-2 text-blackContrast border border-blackContrast rounded-xl"
              onChange={handleChange}
              value={formData.lastName}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="firstName">
              Prénom : <RequireInput />
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="p-2 text-blackContrast border border-blackContrast rounded-xl"
              onChange={handleChange}
              value={formData.firstName}
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">
              E-mail : <RequireInput />
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`p-2 text-blackContrast border border-blackContrast rounded-xl`}
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="tel">Tèl :</label>
            <input
              type="tel"
              name="tel"
              id="tel"
              className="p-2 text-blackContrast border border-blackContrast rounded-xl"
              onChange={handleChange}
              value={formData.tel}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="service">Programme / Service :</label>
          <select
            name="service"
            id="service"
            className="text-blackContrast p-2 border border-blackContrast rounded-xl"
            onChange={handleChange}
            value={formData.service}
          >
            <option value="" className="text-blackContrast "></option>
            {servicesArray.map((service) => (
              <option
                key={service.id}
                value={service.title.split(" ").join("_")}
                className="text-blackContrast"
              >
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">
            Message : <RequireInput />
          </label>
          <textarea
            name="message"
            id="message"
            className="p-2 text-blackContrast border border-blackContrast rounded-xl"
            onChange={handleChange}
            value={formData.message}
            required
          ></textarea>
        </div>
        <div className="m-auto">

        <SubmitButton
          text={"Envoyer"}
          ariaLabel={"Bouton pour soumettre le formulaire"}
        />
        </div>
      </form>
      <ToastContainer
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        position="top-right"
        rtl={false}
        theme="colored"
      />
      {/* <form
        className="text-whiteContrast flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <div>

          
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName">
            Nom : <RequireInput />
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="p-2 text-blackContrast"
            onChange={handleChange}
            value={formData.lastName}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">
            Prénom : <RequireInput />
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="p-2 text-blackContrast"
            onChange={handleChange}
            value={formData.firstName}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">
            E-mail : <RequireInput />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`p-2 text-blackContrast`}
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tel">Tèl :</label>
          <input
            type="tel"
            name="tel"
            id="tel"
            className="p-2 text-blackContrast"
            onChange={handleChange}
            value={formData.tel}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="service">Programme / Service :</label>
          <select
            name="service"
            id="service"
            className="text-blackContrast p-2"
            onChange={handleChange}
            value={formData.service}
          >
            <option value="" className="text-blackContrast"></option>
            {servicesArray.map((service) => (
              <option
                key={service.id}
                value={service.title.split(" ").join("_")}
                className="text-blackContrast"
              >
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">
            Message : <RequireInput />
          </label>
          <textarea
            name="message"
            id="message"
            className="p-2 text-blackContrast"
            onChange={handleChange}
            value={formData.message}
            required
          ></textarea>
        </div>

        <SubmitButton
          text={"Envoyer"}
          ariaLabel={"Bouton pour soumettre le formulaire"}
        />
      </form>
      <ToastContainer
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        position="top-right"
        rtl={false}
        theme="colored"
      /> */}
    </>
  );
}
