import DashboardCard from "../../components/ui/Cards/DashboardCardProps";
import { statsData } from "../../Data/dash";

export default function OverView() {
  return (
    <div className=" w-full flex gap-6 p-6">
      {statsData.map((stat, index) => (
        <DashboardCard
          key={index}
          title={stat.title}
          count={stat.count}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  )
}
