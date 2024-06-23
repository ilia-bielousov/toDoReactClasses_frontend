import './appModal.scss';


const AppModal = ({ children }) => {
  return (
    <div
      className="modal">
      <div
        className="modal__inner">
        {children}
      </div>
    </div>
  );
};

export default AppModal;