import "../../styles/modalLogin.css"


const ModalLogin = ({ isOpen, onClose, children }) => {
    if(!isOpen) return null;


    return (
        <div
         className="modal-overlay-login"
         onClick={onClose}
         
         >
        <div className="container-modal-login" onClick={(e) => e.stopPropagation()}>
            <div>
            {children}
            </div>
        </div>
        



        </div>

    )


}
export default ModalLogin;