import ReactDOM from "react-dom";

const Notification = ({ status, title, message }) => {
  const cssClass = `notification ${status}`;

  return ReactDOM.createPortal(
    <div className={cssClass}>
      <div className="container py-3">
        <h2 className=" font-bold text-white pb-2">{title}</h2>
        <p className="text-gray-200 text-sm">{message}</p>
      </div>
    </div>,
    document.getElementById("notification")
  );
};

export default Notification;
