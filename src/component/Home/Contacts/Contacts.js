import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contacts.css'

function Contacts() {
    return (
      <div className="wrapper_contact">
        <div className='contact_div'>
          <p className='contact'>Contacts</p>
          <p className='Telefon'>+3 999 999 99 99</p>
          <div className="insta">
            </div>
        </div>
        <div className='adres_div'>
          <p className='adres'>Address</p>
          <p className='text'>city.Druzhkovka <br/> Central passage,D.11</p>
          <p className='working_mode'>working mode</p>
          <p className='clock'>around the clock</p>
        </div>
      </div>
    );
  }
  
  export default Contacts