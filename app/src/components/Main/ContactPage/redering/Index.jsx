import TitleAndSubTitleOrtherPage from '../../../UI/TitleAndSubTitle-OrtherPage';
import Form from '../logic/Index-Form-Logic';
export default function Index() {
  return (
    <section  className="p-4 xl:w-4/5 mx-auto mb-10">
       <TitleAndSubTitleOrtherPage
        title={"Contactez-moi"}
        subTitle={"Vous avez décidez de vous prendre en main alors vous êtes au bon endroit."}
      />

      <p className='mb-4'>Si vous souhaitez me contacter au d'un programme personnalisé, veuillez indiquer le service qui vous intéresse. N'hésitez pas à me contacter pour davantage de renseignements.</p>
      <Form />

    </section>
  )
}
