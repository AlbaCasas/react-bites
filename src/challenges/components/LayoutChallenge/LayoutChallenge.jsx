import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Layout from "../../../commons/components/Layout";

const LayoutChallenge = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Layout>
      <FaArrowLeft
        className="layout-challenge__icon clickable"
        onClick={() => navigate("/")}
      />
      {children}
    </Layout>
  );
};

export default LayoutChallenge;
