import { createPortal } from 'react-dom';
import '../assets/modal.css'

export default function Modal({children}){
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