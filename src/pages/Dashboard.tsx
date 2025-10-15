import { Outlet } from "react-router-dom";
import SideBar from "../Dashboard/DashSide/SideBar";
import AdminHeader from "../Dashboard/DashSide/AdminHeader";


export default function Dashboard() {

  return (
    <div className="min-h-max flex  bg-gray-100 ">
      <SideBar/>
      <div className=" w-full">
        <AdminHeader />
              <main className=" w-full p-6">
        <Outlet/>
      </main>
      </div>

    </div>
  );
}
