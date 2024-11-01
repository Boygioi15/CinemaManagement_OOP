import { memo } from "react";
import Header from "../header";
import Footer from "../footer";

const MasterLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <div className="container">
        <Header />
      </div>
      <main>
        {" "}
        {/* Để children chiếm không gian còn lại */}
        {children}
      </main>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default memo(MasterLayout);
