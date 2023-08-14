import React from "react";

const PrintPreview = React.forwardRef((props, ref) => {
  const {
    initialDate,
    discharegeId,
    patientName,
    patientPhone,
    patinetGender,
    age,
    id,
    contactPersonName,
    contactPersonMobile,
    wordNo,
    modeOfAdmission,
    dateOfAdmission,
    dateOfDischarge,
    totalDays,
    physicalScience,
    primaryConsultant,
    primaryConsultantDepartment,
    othersConsultant,
    othersConsultantDepartment,
    comorbidity,
    dcs,
    diagnosisOption,
    otherDiognosis,
    drugTreatment,
    chiefComplaint,
    chiefComplaintDate,
    diagnosisText,
    diagnosisValue,
    moodOfDischarge,
    commentBox,
    dischargeMedication,
    investigation,
    followUp,
    followUpDate,
    dietaryAdvice,
  } = props;

  // console.log("patient name : ", patientName);

  return (
    <>
      <div
        ref={ref}
        className="container"
        style={{
          //   border: "1px solid #C2C2CA",
          borderRadius: "5px",
          padding: ".5rem 2rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          maxWidth: "885px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <img
              style={{ width: "5%", height: "auto", objectFit: "contain" }}
              src="images/SRNGIH_Logo.png"
            />
            <img
              style={{ width: "60%", height: "auto", objectFit: "contain" }}
              src="images/header.png"
            />
            <img
              style={{ width: "5%", height: "auto", objectFit: "contain" }}
              src="images/bangladesh_logo.png"
            />
          </div>

          <hr style={{ margin: ".4rem 0rem" }} />
          <div>
            <div className="row">
              <div className="col-md-12" style={{ textAlign: "end" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "flex-start",
                  }}
                >
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      Discharge ID :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      1234
                    </p>
                  </div>
                </div>
              </div>
              <hr style={{ margin: ".2rem 0rem" }} />
              {/* ------------------------------------------------ */}
              <div className="col-md-6" style={{ textAlign: "start" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: ".9rem",
                      }}
                    >
                      Patient Name :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: ".9rem",
                      }}
                    >
                      {patientName}
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------ */}
              <div className="col-md-6" style={{ textAlign: "start" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: ".9rem",
                      }}
                    >
                      Patient Phone No :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: ".9rem",
                      }}
                    >
                      {patientPhone}
                    </p>
                  </div>
                </div>
              </div>
              <hr style={{ margin: "0rem", opacity: "0.05" }} />
              {/* ------------------------------------------------ */}
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Sex :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {patinetGender}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Age :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {age}
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------ */}
              <hr style={{ margin: "0rem", opacity: "0.05" }} />
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Id :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {id}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Word/Cabin No :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {wordNo}
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------ */}
              <hr style={{ margin: "0rem", opacity: "0.05" }} />
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Contact Person Name :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {contactPersonName}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Mode of Admission :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {modeOfAdmission}
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------ */}
              <hr style={{ margin: "0rem", opacity: "0.05" }} />
              <div className="col-md-12" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Contact Person Mobile :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {contactPersonMobile}
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------ */}
              <hr style={{ margin: "0rem", opacity: "0.05" }} />
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Date of Admission :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {dateOfAdmission}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Date of Discharge :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {dateOfDischarge}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Total Days :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {totalDays}
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------ */}
              <hr style={{ margin: "0rem", opacity: "0.05" }} />
              <div className="col-md-12" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Physical symptoms :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {physicalScience?.map((item, index) => {
                        return (
                          <span>
                            {index !== 0 && ","} {item?.label}{" "}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------ */}
              <hr style={{ margin: "0rem", opacity: "0.05" }} />
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Primary Consultant :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {primaryConsultant}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Department :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {primaryConsultantDepartment}
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------ */}
              <hr style={{ margin: "0rem", opacity: "0.05" }} />
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Other Consultants:
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {othersConsultant}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {/* Department : */}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {/* {othersConsultantDepartment} */}
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------ */}
              <hr style={{ margin: "0rem", opacity: "0.05" }} />
              <div className="col-md-12" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Comorbidity :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {comorbidity}
                      {/* {comorbidity?.map((item, index) => {
                        return (
                          <span>
                            {index !== 0 && ","} {item?.label}{" "}
                          </span>
                        );
                      })} */}
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------ */}
              <hr style={{ margin: "0rem", opacity: "0.05" }} />
              <div className="col-md-12" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Principle Diagnosis :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {diagnosisOption}
                      {/* {diagnosisOption?.map((item, index) => {
                        return (
                          <span>
                            {index !== 0 && ","} {item?.label}{" "}
                          </span>
                        );
                      })} */}
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------ */}
              <hr style={{ margin: "0rem", opacity: "0.05" }} />
              <div className="col-md-12" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Other Diognosis :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {otherDiognosis}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Case Summery :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                      }}
                    >
                      {commentBox}
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------ */}
              <hr style={{ margin: "0rem", opacity: "0.05" }} />
              {/* <div className="col-md-12" style={{}}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div>
                <p
                  style={{ margin: "0", fontWeight: "500", fontSize: "1rem" }}
                >
                  Diagnosis :
                </p>
              </div>
              <div>
                <p
                  style={{ margin: "0", fontWeight: "400", fontSize: "1rem" }}
                >
                  {diagnosisText}
                </p>
              </div>
            </div>
          </div> */}
              {/* <div className="col-md-6" style={{}}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div>
                <p
                  style={{ margin: "0", fontWeight: "500", fontSize: "1rem" }}
                >
                  :
                </p>
              </div>
              <div>
                <p
                  style={{ margin: "0", fontWeight: "400", fontSize: "1rem" }}
                >
                {diagnosisValue}
                </p>
              </div>
            </div>
          </div> */}
              {/* ------------------------------------------------ */}
              {/* <hr style={{ margin: " 0rem", opacity: "0.00" }} />
          <div className="col-md-12" style={{}}>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                border: "1px solid #E4E4EC",
                padding: ".5rem .5rem",
              }}
            >
              <div>
                <p
                  style={{ margin: "0", fontWeight: "500", fontSize: "1rem" }}
                >
                  Comment:
                </p>
              </div>
              <div>
                <p
                  style={{
                    margin: "0",
                    fontWeight: "400",
                    fontSize: "1rem",
                    textAlign: "start",
                  }}
                >
                  {commentBox}
                </p>
              </div>
            </div>
          </div> */}

              {/* ------------------------------------------------ */}
              {Array.isArray(investigation) && investigation?.length > 0 && (
                <>
                  <hr style={{ margin: ".2rem 0rem", opacity: "0" }} />
                  <h6 style={{ textAlign: "center" }}>Investigation :</h6>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            Name :
                          </p>
                        </th>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            {" "}
                            Value{" "}
                          </p>
                        </th>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            {" "}
                            Date{" "}
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {investigation?.map((m) => {
                        return (
                          m?.name && (
                            <tr>
                              <td style={{ textAlign: "start" }}>
                                {" "}
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {m?.name}{" "}
                                </p>
                              </td>
                              <td style={{ textAlign: "start" }}>
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {m?.value}{" "}
                                </p>
                              </td>
                              <td style={{ textAlign: "start" }}>
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {`m?.date`}{" "}
                                </p>
                              </td>{" "}
                            </tr>
                          )
                        );
                      })}
                    </tbody>
                  </table>
                </>
              )}
              {/* ------------------------------------------------ */}
              {Array.isArray(drugTreatment) && drugTreatment?.length > 0 && (
                <>
                  <hr style={{ margin: ".2rem 0rem", opacity: "0" }} />
                  <h6 style={{ textAlign: "center" }}>
                    Drug treatment during hospital :
                  </h6>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            {" "}
                            Brand/Geneic Name :
                          </p>
                        </th>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            {" "}
                            Strength
                          </p>
                        </th>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            {" "}
                            Doses{" "}
                          </p>
                        </th>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            {" "}
                            Duration{" "}
                          </p>
                        </th>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            {" "}
                            Prandial advice{" "}
                          </p>
                        </th>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            {" "}
                            Note{" "}
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {drugTreatment?.map((m) => {
                        return (
                          m?.brandName && (
                            <tr>
                              <td style={{ textAlign: "start" }}>
                                {" "}
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {m.brandName}{" "}
                                </p>
                              </td>
                              <td style={{ textAlign: "start" }}>
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {m.strength}{" "}
                                </p>
                              </td>
                              <td style={{ textAlign: "start" }}>
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {m.doses}{" "}
                                </p>
                              </td>
                              <td style={{ textAlign: "start" }}>
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {m.duration}{" "}
                                </p>
                              </td>
                              <td style={{ textAlign: "start" }}>
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {m.prandial_advice}{" "}
                                </p>
                              </td>
                              <td style={{ textAlign: "start" }}>
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {m.note}
                                </p>
                              </td>
                            </tr>
                          )
                        );
                      })}
                    </tbody>
                  </table>
                </>
              )}
              {/* ------------------------------------------------ */}
              {Array.isArray(dischargeMedication) &&
                dischargeMedication.length > 0 && (
                  <>
                    <hr style={{ margin: ".2rem 0rem", opacity: "0" }} />
                    <h6 style={{ textAlign: "center" }}>
                      Dischage Medication :
                    </h6>
                    <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            {" "}
                            Brand/Geneic Name :
                          </p>
                        </th>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            {" "}
                            Strength
                          </p>
                        </th>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            {" "}
                            Doses{" "}
                          </p>
                        </th>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            {" "}
                            Duration{" "}
                          </p>
                        </th>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            {" "}
                            Prandial advice{" "}
                          </p>
                        </th>
                        <th scope="col" style={{ textAlign: "start" }}>
                          <p style={{ fontSize: ".9rem", margin: "0" }}>
                            {" "}
                            Note{" "}
                          </p>
                        </th>
                      </tr>
                    </thead>
                      <tbody>
                        {dischargeMedication?.map((m) => {
                          return (
                            m?.brandName && (
                              <tr>
                              <td style={{ textAlign: "start" }}>
                                {" "}
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {m.brandName}{" "}
                                </p>
                              </td>
                              <td style={{ textAlign: "start" }}>
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {m.strength}{" "}
                                </p>
                              </td>
                              <td style={{ textAlign: "start" }}>
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {m.doses}{" "}
                                </p>
                              </td>
                              <td style={{ textAlign: "start" }}>
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {m.duration}{" "}
                                </p>
                              </td>
                              <td style={{ textAlign: "start" }}>
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {m.prandial_advice}{" "}
                                </p>
                              </td>
                              <td style={{ textAlign: "start" }}>
                                <p style={{ fontSize: ".9rem", margin: "0" }}>
                                  {m.note}
                                </p>
                              </td>
                            </tr>
                            )
                          );
                        })}
                      </tbody>
                    </table>
                  </>
                )}
              {/* ------------------------------------------------ */}
              <hr style={{ margin: "0rem 0rem", opacity: "0.00" }} />
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Procedure / Operation performed :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      {dcs}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Mode of Dischage:
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      {moodOfDischarge}
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------ */}
              <hr style={{ margin: "0rem 0rem", opacity: "0.00" }} />
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Follow Up:
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      {followUp}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{}}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Date:
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      {followUpDate}
                    </p>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------ */}
              <hr style={{ margin: "0rem 0rem", opacity: "0.2" }} />
              <div className="col-md-12" style={{}}>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "500",
                        fontSize: "1rem",
                        width: "max-content",
                      }}
                    >
                      Dietary Advice :
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "400",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      {dietaryAdvice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------ */}

          <div
            style={{
              // width: "100%",
              textAlign: "center",
              borderTop: "1px solid #6C757D",
              marginTop: "2rem",
              padding: ".2rem 0rem",
            }}
          >
            <h6 style={{ fontSize: ".9rem" }}>
              ABOUT SHEIKH RUSSEL NATIONAL GASTROLIVER INSTITUTE & HOSPITAL
            </h6>
            <p style={{ fontSize: ".8rem", margin: "0" }}>
              info@sheikhrusselgastroliver.gov.bd
            </p>
            <p style={{ fontSize: ".8rem", margin: "0" }}>
              www.sheikhrusselgastroliver.gov.bd
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

export default PrintPreview;
