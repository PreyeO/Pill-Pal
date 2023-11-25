import Medform from "../../UI/Form/MedForm"
import MainTitle from "../../UI/Titles/MainTitle"
import SubTitle from "../../UI/Titles/SubTitle"


const PatientDoc =() => {



    return(
        <section className="flex flex-col justify-center mt-6">
            <div className=" text-center">
            <MainTitle title="Schedule A Medication"/>
            <SubTitle title="Add a new medication" />

            </div>
            <Medform />
           
        </section>
    )
}

export default PatientDoc