import { Award, Users, Globe2, Layers } from "lucide-react";

export function StatsCounter() {
  const stats = [
    {
      value: "Desde 2009",
      label: "Especialistas en Retail para SAP B1",
      icon: <Award className="w-6 h-6 text-[#E00E8B]" />,
    },
    {
      value: "+80",
      label: "Colaboradores en Desarrollo y Soporte",
      icon: <Users className="w-6 h-6 text-[#E00E8B]" />,
    },
    {
      value: "+12",
      label: "Países con terminales activas",
      icon: <Globe2 className="w-6 h-6 text-[#E00E8B]" />,
    },
    {
      value: "+5,000",
      label: "Licencias y Puntos de Venta R1",
      icon: <Layers className="w-6 h-6 text-[#E00E8B]" />,
    },
  ];

  return (
    <section className="bg-[#0B2252] py-14 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-1 border border-white/10">
                {item.icon}
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-300 max-w-[180px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
