import { forwardRef } from 'react';
import {ReactComponent as SvgInstagram} from '../../media/Instagram.svg'
import {ReactComponent as SvgWhatsApp} from '../../media/WhatsApp.svg'
import './Contacts.css'

const Contacts = forwardRef((props, ref) => {
    return (
      <div ref={ref} className="wrapper_contact">
        <div className='contact_div'>
          <p className='contact'>Contact</p>
          <p className='Telefon'>+49 999 999 99 99</p>
          <div className='icon_container'>
            <div className='icon_style'>
              <SvgInstagram style={{width: '45px', height: '45px', margin: '0 0 10px'}}/>
              <p>Instagram</p>
            </div>
            <div className='icon_style'>
              <SvgWhatsApp style={{width: '45px', height: '45px', margin: '0 0 10px'}}/>
              <p>WhatsApp</p>
            </div>
          </div>
          <div>
            </div>
        </div>
        <div className='adres_div'>
          <p className='adres'>Address</p>
          <p className='adres_text'>Linkstrasse 2, 8 OG, 10785 <br/> Berlin, Deutschland</p>
          <p className='working_mode'>working Hours:</p>
          <p className='clock'>24 hours a day</p>
        </div>
      </div>
    );
  })
  
  export default Contacts