import s from "./index.module.css";
import { IconCheck } from "@tabler/icons-react";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
  "Entry to annual conference",
  "Official member t-shirt",
];

export const PromotionSection = () => {
  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        <div className={s.centeredText}>
          <h2 className={s.heading}>Simple no-tricks pricing</h2>
          <p className={s.paragraph}>
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className={s.pricingContainer}>
          <div className={s.pricingContent}>
            <h3 className={s.subheading}>Lifetime membership</h3>
            <p className={s.subparagraph}>
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
              amet indis perferendis blanditiis repellendus etur quidem
              assumenda.
            </p>
            <div className={s.includedSection}>
              <h4 className={s.includedHeading}>What’s included</h4>
              <div className={s.divider} />
            </div>
            <ul className={s.featuresList}>
              {includedFeatures.map((feature) => (
                <li key={feature} className={s.featureItem}>
                  <IconCheck className={s.checkIcon} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className={s.membershipContainer}>
            <div className={s.membershipContent}>
              <div className={s.membershipInner}>
                <p className={s.membershipText}>Pay once, own it forever</p>
                <p className={s.pricingInfo}>
                  <span className={s.price}>$349</span>
                  <span className={s.currency}>USD</span>
                </p>
                <a href="#" className={s.accessButton}>
                  Get access
                </a>
                <p className={s.reimbursementInfo}>
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
