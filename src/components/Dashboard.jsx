import React, { useState } from "react";
import { Input } from "./";
import { Header } from "./";
import { Button } from "./";
import { PageIndicator } from "./";
import { CompanyLogo } from "./";
import { useNavigate } from "react-router-dom";
import { ErrorHandling } from "./utils/ErrorHandling";

function Dashboard() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const handleClick = () => {
    if (ErrorHandling(inputValue) && ErrorHandling(nameValue)) {
      return navigate(`/workspace/${inputValue}`);
    } else {
      alert("Please Enter Value to Proceed");
      return;
    }
  };
  return (
    <div>
      <CompanyLogo />
      <PageIndicator
        pageNavigator1={true}
        pageNavigator2={false}
        pageNavigator3={false}
        pageNavigator4={false}
        inputValue={inputValue}
        nameValue={nameValue}
      />
      <div className="dashboard">
        <div>
          <Header
            header="Welcome! First things first..."
            subheader="You can always change them later."
          />
          <Input
            placeholder="Steve Jobs"
            label="Full Name *"
            value={nameValue}
            onInputChange={(e) => setNameValue(e.target.value)}
          />
          <Input
            placeholder="Steve"
            label="Display Name *"
            value={inputValue}
            onInputChange={(e) => setInputValue(e.target.value)}
          />
          <div className="btn-style">
            <Button
              buttonText="Create Workspace"
              onClick={handleClick}
              className="btn-style"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
