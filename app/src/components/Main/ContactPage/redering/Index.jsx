import TitleAndSubTitleOrtherPage from '../../../UI/TitleAndSubTitle-OrtherPage';

import Form from '../logic/Form-Logic';
export default function Index() {
  return (
    <section  className="p-4 sm:w-3/4 lg:w-2/4 mx-auto mb-10">
       <TitleAndSubTitleOrtherPage
        title={"Contactez-moi"}
        subTitle={"Vous avez décidez de vous prendre en main alors vous êtes au bon endroit."}
      />

      <p className='mb-4'>Pour tous renseignements, remplissez le formulaire ci-dessous, je vous
      recontacterai dans les plus brefs délais.</p>
      <Form />

    </section>
  )
}
