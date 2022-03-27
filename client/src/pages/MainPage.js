import  Buttons from "../components/Buttons/Buttons";
import Info from "../components/Info/Info";
import Manipulations from "../components/Manipulations/Manipulations";
import Notes from "../components/Notes/Notes";
import AddForm from "../components/AddForm/AddForm";
import Footer from "../components/Footer/Footer";
import Contacts from "../components/Contacts/Contacts";
import AddContactForm from "../components/AddContactForm/AddContactForm";

function MainPage () {
    return (
       <>
            <Buttons/>
            <Info/>
            <Manipulations/>
            <Notes/>
            <AddForm/>
            <Contacts/>
            <AddContactForm/>
            <Footer/>
       </>
    )
}

export default MainPage