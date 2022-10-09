import React from "react";
import { Header } from "./";
import { Button } from "./";
import { PageIndicator } from "./";
import { CompanyLogo } from "./";
import { useNavigate, useParams } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Complete() {
  const navigate = useNavigate();
  const { inputValue } = useParams();
  const { workspaceName } = useParams();
  const handleClick = () => {
    return navigate(`/`);
  };
  return (
    <div>
      <CompanyLogo />
      <PageIndicator
        pageNavigator1={false}
        pageNavigator2={false}
        pageNavigator3={false}
        pageNavigator4={true}
      />
      <div className="icon">
        <CheckCircleIcon className="check-icon" />
      </div>
      <div className="dashboard">
        <div>
          <Header
            header={`Congratulations, ${inputValue}!`}
            subheader={`You have completed onboarding, you can start using ${workspaceName}!.`}
          />

          <Button buttonText="Launch CutShort" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Complete;
