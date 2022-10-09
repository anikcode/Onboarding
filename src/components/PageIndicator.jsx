import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorHandling } from "./utils/ErrorHandling";

function PageIndicator({
  pageNavigator1 = true,
  pageNavigator2 = false,
  pageNavigator3 = false,
  pageNavigator4 = false,
  inputValue,
  nameValue,
  workspaceName,
  selectCardOne,
  selectCardTwo,
}) {
  const navigate = useNavigate();

  const handleClickToNavigate2 = () => {
    if (ErrorHandling(inputValue) && ErrorHandling(nameValue)) {
      return navigate(`/workspace/${inputValue}`);
    } else {
      alert("Please Enter Value to Proceed");
      return;
    }
  };

  const handleClickToNavigate3 = () => {
    if (
      ErrorHandling(workspaceName) &&
      ErrorHandling(inputValue) &&
      ErrorHandling(nameValue)
    ) {
      return navigate(`/plan/${workspaceName}/${inputValue}`);
    } else {
      alert("Please Enter Value to Proceed");
      return;
    }
  };

  const handleClickToNavigate4 = () => {
    if (
      ErrorHandling(workspaceName) &&
      ErrorHandling(inputValue) &&
      ErrorHandling(nameValue) &&
      (selectCardOne || selectCardTwo)
    ) {
      return navigate(`/complete/${workspaceName}/${inputValue}`);
    } else {
      alert("Please Select any Plan to Proceed");
      return;
    }
  };

  return (
    <>
      {pageNavigator1 && (
        <>
          <div className="parent-indicator">
            <div className="indicator" onClick={() => navigate(`/`)}>
              <div className="indicator-text">1</div>
            </div>
            <div className="line"></div>
            <div className="current-line"></div>

            <div
              className="indicator next-indicator"
              onClick={handleClickToNavigate2}
            >
              <div className="indicator-text next-indicator-text">2</div>
            </div>
            <div className="current-line"></div>
            <div className="current-line"></div>
            <div
              className="indicator next-indicator"
              onClick={handleClickToNavigate3}
            >
              <div className="indicator-text next-indicator-text">3</div>
            </div>
            <div className="current-line"></div>
            <div className="current-line"></div>
            <div
              className="indicator next-indicator"
              onClick={handleClickToNavigate4}
            >
              <div className="indicator-text next-indicator-text">4</div>
            </div>
          </div>
        </>
      )}
      {pageNavigator2 && (
        <>
          <div className="parent-indicator">
            <div className="indicator" onClick={() => navigate(`/`)}>
              <div className="indicator-text">1</div>
            </div>
            <div className="line"></div>
            <div className="line"></div>

            <div className="indicator" onClick={handleClickToNavigate2}>
              <div className="indicator-text">2</div>
            </div>
            <div className="line"></div>
            <div className="current-line"></div>
            <div
              className="indicator next-indicator"
              onClick={handleClickToNavigate3}
            >
              <div className="indicator-text next-indicator-text ">3</div>
            </div>
            <div className="current-line"></div>
            <div className="current-line"></div>
            <div
              className="indicator next-indicator"
              onClick={handleClickToNavigate4}
            >
              <div className="indicator-text next-indicator-text ">4</div>
            </div>
          </div>
        </>
      )}
      {pageNavigator3 && (
        <>
          <div className="parent-indicator">
            <div className="indicator" onClick={() => navigate(`/`)}>
              <div className="indicator-text">1</div>
            </div>
            <div className="line"></div>
            <div className="line"></div>

            <div className="indicator" onClick={handleClickToNavigate2}>
              <div className="indicator-text">2</div>
            </div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="indicator" onClick={handleClickToNavigate3}>
              <div className="indicator-text">3</div>
            </div>
            <div className="line"></div>
            <div className="current-line"></div>
            <div
              className="indicator next-indicator"
              onClick={handleClickToNavigate4}
            >
              <div className="indicator-text next-indicator-text ">4</div>
            </div>
          </div>
        </>
      )}
      {pageNavigator4 && (
        <>
          <div className="parent-indicator">
            <div className="indicator" onClick={() => navigate(`/`)}>
              <div className="indicator-text">1</div>
            </div>
            <div className="line"></div>
            <div className="line"></div>

            <div className="indicator" onClick={handleClickToNavigate2}>
              <div className="indicator-text">2</div>
            </div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="indicator" onClick={handleClickToNavigate3}>
              <div className="indicator-text">3</div>
            </div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="indicator" onClick={handleClickToNavigate4}>
              <div className="indicator-text">4</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PageIndicator;
