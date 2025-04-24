import React from 'react';
import PlanCard from '../components/PlanCard';
import '../css/planes.css';

const Planes = () => {
  const plans = [
    {
      title: "Individual",
      subtitle: "Cancelá cuando quieras",
      price: "$0",
      duration: "por 3 meses. Después, cuesta $ 2.499*** al mes",
      features: [
        "1 cuenta Premium",
        "Cancelá cuando quieras",
        "Pago por suscripción o pago único"
      ],
      offer: "Probar 3 meses por $0",
      button: "Probar 3 meses por $0"
    },
    { 
      title: "Duo",
      subtitle: "$ 3.299*** al mes",
      price: "$3.299",
      duration: "por mes",
      features: [
        "2 cuentas Premium",
        "Cancelá cuando quieras",
        "Pago por suscripción o pago único"
      ],
      offer: "",
      button: "Obtener Premium Duo"
    },
    {
      title: "Familiar",
      subtitle: "$ 4.199*** al mes",
      price: "$4.199",
      duration: "al mes",
      features: [
        "Hasta 6 cuentas Premium o Kids",
        "Controlá el contenido marcado como explícito.",
        "Acceso a Rolling Music Kids",
        "Cancelá cuando quieras",
        "Pago por suscripción o pago único"
      ],
      offer: "",
      button: "Obtener Premium Familiar"
    },
    
    
  ];

  return (
    <div className="planes-container">

{/* navbar*/}

      <div className="container py-5">
        {/* Encabezado*/}
        <div className="text-center mb-5">
          <h1 className="page-title">Planes de Suscripción</h1>
          <p className="page-subtitle">Elige el mejor plan para ti</p>
        </div>
        
        {/* Grid de tarjetas */}
        <div className="row g-4">
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <PlanCard {...plan} />
            </div>
          ))}
        </div>
      </div>
      {/* footer*/}
    </div>
  );
};

export default Planes;