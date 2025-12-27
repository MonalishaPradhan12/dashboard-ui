import React from "react";
import styles from "./CustomCard.module.css";

interface CustomCardProps {
  title: string;
  amount: string;
  percentage: string;
  description: string;
  iconClass: string;
  iconBgClass?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  amount,
  percentage,
  description,
  iconClass,
  iconBgClass = "bg-primary",
}) => {
  return (
    <div className="card shadow-sm p-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <div className="text-uppercase text-muted fw-semibold small">
            {title}
          </div>

          <h5 className="fw-bold mb-1">{amount}</h5>

          <span className="small">
            <span className="text-success fw-semibold">{percentage}</span>{" "}
            <span className="text-muted">{description}</span>
          </span>
        </div>

        <div className={`${styles.iconCircle} ${iconBgClass} text-white`}>
          <i className={iconClass} />
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
