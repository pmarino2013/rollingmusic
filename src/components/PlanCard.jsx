import React from "react";
import "../css/PlanStyle.css"

const PlanCard = ({
  title,
  subtitle,
  price,
  duration,
  features,
  offer,
  button,
}) => {
  return (
    <div className="plan-card card h-100">
      {/* encabezado*/}
      <div className="card-header text-center py-3">
        <h3 className="card-title mb-1">{title}</h3>
        <p className="card-subtitle mb-0 text-body-secondary">{subtitle}</p>
      </div>

      {/* cuerpo de la tarjeta */}
      <div className="card-body d-flex flex-column">
        {/* ofertas*/}
        {offer && (
          <div className="alert alert-danger text-center py-2 mb-3">
            <span className="fw-bold">{offer}</span>
          </div>
        )}

        {/* seccion de precio */}
        <div className="price-section text-center py-3 mb-3">
            {/* texto de precio */}
          <div className="fs-1">{price}</div>
          <div className="text-body-secondary">{duration}</div>
        </div>

        {/*caracteristicas */}
        <div className="features-container">
          <ul>
            {features.map((feature, index) => (
              <li key={index} className="mb-2 d-flex">
                {/* punto de la lista*/}
                <span className="me-2 text-danger">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="card-footer border-top-0">
        {/* color de boton */}
        <button className="btn w-100 fw-bold button-plan">
          {button}
        </button>
        <p className="text-center text-body-secondary small mt-2 mb-0">
          Pago por suscripción
        </p>
      </div>
    </div>
  );
};

export default PlanCard;
