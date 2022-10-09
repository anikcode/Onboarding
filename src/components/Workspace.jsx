import React, { useState } from "react";
import { Input } from "./";
import { Header } from "./";
import { Button } from "./";
import { PageIndicator } from "./";
import { CompanyLogo } from "./";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorHandling } from "./utils/ErrorHandling";

function Workspace() {
  const navigate = useNavigate();
  const [workspaceName, setWorkspaceName] = useState("");
  const { inputValue } = useParams();

  const handleClick = () => {
    if (ErrorHandling(workspaceName)) {
      return navigate(`/plan/${workspaceName}/${inputValue}`);
    } else {
      alert("Please Enter Value to Proceed");
      return;
    }
  };

  return (
    <div>
      <CompanyLogo />
      <PageIndicator
        pageNavigator1={false}
        pageNavigator2={true}
        pageNavigator3={false}
        pageNavigator4={false}
        inputValue={inputValue}
        workspaceName={workspaceName}
      />
      <div className="dashboard">
        <div>
          <div className="">
            <Header
              header="Let's set up a home for all your work"
              subheader="You can always create another workspace later."
            />
          </div>
          <div className="parent-input">
            <div className="child-input">
              <Input
                placeholder="Eden"
                label="Workspace Name *"
                value={workspaceName}
                onInputChange={(e) => setWorkspaceName(e.target.value)}
              />
              <div className="workspace">
                <div className="workspace-url">
                  <p>www.cutshort.com/</p>
                </div>
                <div>
                  <input
                    placeholder="Example"
                    label="Workspace URL(optional)"
                    className="input-value"
                  />
                </div>
              </div>
              <Button buttonText="Create Workspace" onClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
