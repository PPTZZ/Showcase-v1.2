import { createPortal } from 'react-dom';
import '../assets/styles/modal.css'

export const Modal = ({children, open})=> {
    if(!open) {
        return null
    } else {
        return createPortal(
            <>
              <div className='overlay'/>
              <div className="modal">
                  {children}
              </div>
            </>,
            document.getElementById('portal')
        )
    }
  
}