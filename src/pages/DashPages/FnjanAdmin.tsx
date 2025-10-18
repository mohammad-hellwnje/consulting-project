import { BiPlus } from "react-icons/bi";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import StateBtn from "../../components/ui/Button/StateBtn";
import FnjanTable from "../../Dashboard/FnjanTable";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FnjanAdmin() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <div className=" flex justify-between">
        <SearchComponent value={value} onChange={setValue} />
        <StateBtn
          onClick={() => navigate("/dashboard/addfnjan")}
          className="  bg-primary text-white"
          icon={<BiPlus size={18} />}
          text="اضافة حدث فنجان"
        />
      </div>
      <FnjanTable />
    </div>
  );
}
