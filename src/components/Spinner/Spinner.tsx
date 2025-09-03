import SpinnerImage from "./../../assets/authImage/main.svg"

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary z-[100]">
      <img
        src={SpinnerImage}
        alt="loading"
        className="animate-spin duration-75 w-50"
        style={{ animationDuration: "3s" }}
      />
    </div>
  );
};

export default Spinner;
