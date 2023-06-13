import styles from "./PageMain.module.css";
import SiteHeader from "@/components/pages/shared/layout/SiteHeader";

export default function PageMain({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>

      <div className="clipped-container-chevron">
        <SiteHeader hasColor={true} />
      </div>
    </div>
  );
}
