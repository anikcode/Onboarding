import React, { useState } from "react";
import { Header } from "./";
import { Button } from "./";
import { PageIndicator } from "./";
import { CompanyLogo } from "./";
import { UserCard } from "./";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import Groups2Icon from "@mui/icons-material/Groups2";
import { useParams } from "react-router-dom";
import { ErrorHandling } from "./utils/ErrorHandling";

function Plan() {
  const [selectCardOne, setSelectCardOne] = useState(false);
  const [selectCardTwo, setSelectCardTwo] = useState(false);
  const { inputValue } = useParams();
  const { workspaceName } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    if (ErrorHandling(workspaceName) && (selectCardOne || selectCardTwo)) {
      return navigate(`/complete/${workspaceName}/${inputValue}`);
    } else {
      alert("Please Select any Plan Proceed");
      return;
    }
  };

  const selectPlanOne = () => {
    setSelectCardOne(!selectCardOne);
    setSelectCardTwo(false);
  };

  const selectPlanTwo = () => {
    setSelectCardTwo(!selectCardTwo);
    setSelectCardOne(false);
  };

  return (
    <div>
      <CompanyLogo />
      <PageIndicator
        pageNavigator1={false}
        pageNavigator2={false}
        pageNavigator3={true}
        pageNavigator4={false}
        workspaceName={workspaceName}
        selectCardOne={selectCardOne}
        selectCardTwo={selectCardTwo}
      />
      <div className="dashboard">
        <div>
          <Header
            header={`How are you planning to use ${workspaceName}`}
            subheader="We'll streamline your setup experience accordingly."
          />
          <div className="parent-card">
            <div>
              <div
                className={`${selectCardOne ? "selected-card-1" : "card"}`}
                onClick={selectPlanOne}
              >
                <PersonIcon className="user-icon" />
                <UserCard
                  head="For myself"
                  content="Write better. Think more clearly. Stay Organised."
                />
              </div>
            </div>
            <div>
              <div
                className={`${selectCardTwo ? "selected-card-2" : "card"}`}
                onClick={selectPlanTwo}
              >
                <Groups2Icon className="user-icon" />
                <UserCard
                  head="With my Team"
                  content="Wikis, docs, tasks & projects, all in one place."
                />
              </div>
            </div>
          </div>
          <Button buttonText="Create Workspace" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Plan;
