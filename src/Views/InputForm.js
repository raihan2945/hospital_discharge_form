import { Form, Label, Input, FormGroup, Row, Col, Button } from "reactstrap";
import React, { useEffect, useState, useRef, useId } from "react";
import { useForm, Controller } from "react-hook-form";
// import DatePicker from "react-bootstrap-date-picker";
import { useReactToPrint } from "react-to-print";

import { v1 as uuidv1 } from 'uuid';

import Select from "react-select-plus";
import "react-select-plus/dist/react-select-plus.css";

// @date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PrintPreview from "./PrintPreview";

import _uniqueId from "lodash/uniqueId";

const InputForm = () => {
  // ---states

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [initialDate, selectDate] = useState();

  const [discharegeId, setDischargeId] = useState(randomNumberInRange(1, 10));

  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patinetGender, setPatientGender] = useState("");
  const [age, setAge] = useState();
  const [id, setId] = useState();
  const [contactPersonName, setContactPersonName] = useState();
  const [contactPersonMobile, setContactPersonMobile] = useState();
  const [wordNo, setWordNo] = useState();
  const [modeOfAdmission, setModeOfAdmission] = useState();
  const [dateOfAdmission, setDateOfAdmission] = useState();
  const [dateOfDischarge, setDateOfDischarge] = useState();
  const [primaryConsultant, setPrimaryConsultant] = useState();
  const [primaryConsultantDepartment, setPrimaryConsultantDepartment] =
    useState();
  const [othersConsultant, setOthersConsultant] = useState();
  const [othersConsultantDepartment, setOthersConsultantDepartment] =
    useState();
  const [dcs, setDcs] = useState();
  const [chiefComplaintDate, setChiefComplaintDate] = useState();
  const [chiefComplaint, setChiefComplaint] = useState([]);
  const [diagnosisOption, setDiagnosisOption] = useState([]);
  // const [diagnosisValue, setDiagnosisValue] = useState();
  const [commentBox, setCommentBox] = useState();

  let defaultMedication = [
    {
      brandName: "",
      doses: "",
      duration: "",
      note: "",
    },
  ];
  const [dischargeMedication, setDischareMedication] =
    useState(defaultMedication);

  const defalutInvestigation = [
    {
      name: "",
      value: "",
      ml: "",
    },
  ];
  const [investigation, setInvestigation] = useState([]);

  const [followUp, setFollowUp] = useState([]);
  const [followUpDate, setFollowUpDate] = useState();
  const [dietaryAdvice, setDietaryAdvice] = useState();

  // const [contactPersonName, setContactPersonName] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const ref = useRef();

  const onSubmit = (data) => {
    alert("submit");

    console.log("data is :", data);
  };

  // const d_id = useId();

  // useEffect(() => {
  //   setDischargeId(d_id);
  // }, []);

  // ------------MEDICATION-----------

  const changeMedication = (e, property, index) => {
    // console.log("text is : ", e, index);
    const newDischargeMedication = [...dischargeMedication];

    if (property === "brandName") {
      newDischargeMedication[index].brandName = e;
      setDischareMedication(newDischargeMedication);
    } else if (property === "doses") {
      newDischargeMedication[index].doses = e;
      setDischareMedication(newDischargeMedication);
    } else if (property === "duration") {
      newDischargeMedication[index].duration = e;
      setDischareMedication(newDischargeMedication);
    } else if (property === "note") {
      newDischargeMedication[index].note = e;
      setDischareMedication(newDischargeMedication);
    }
  };
  const addMedication = () => {
    defaultMedication = [
      ...dischargeMedication,
      {
        brandName: "",
        doses: "",
        duration: "",
        note: "",
      },
    ];
    setDischareMedication(defaultMedication);
  };

  // ----------INVESTIGATION---------

  const addInvestigation = (input) => {
    setInvestigation([
      ...investigation,
      {
        name: input,
        value: "",
        ml: "",
      },
    ]);
  };

  const changeInvestigation = (e, property, index) => {
    // console.log("text is : ", e, index);
    const newInvestigation = [...investigation];

    if (property === "name") {
      newInvestigation[index].name = e;
      setInvestigation(newInvestigation);
    } else if (property === "value") {
      newInvestigation[index].value = e;
      setInvestigation(newInvestigation);
    } else if (property === "ml") {
      newInvestigation[index].ml = e;
      setInvestigation(newInvestigation);
    }
  };

  // console.log("Dischage Medicare is  : ", dischargeMedication);
  // console.log("chief complaint is  : ", chiefComplaint);

  // ----------Print-----------
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div
        className="container"
        style={{
          border: "1px solid #C2C2CA",
          borderRadius: "5px",
          padding: "1rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
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
            style={{ width: "70%", height: "auto", objectFit: "contain" }}
            src="images/header.png"
          />
          <img
            style={{ width: "5%", height: "auto", objectFit: "contain" }}
            src="images/bangladesh_logo.png"
          />
        </div>

        <h4 style={{ marginTop: "1.5rem" }}>Discharge Summery</h4>

        <hr style={{ margin: "1rem 0rem" }} />

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={12}>
              <FormGroup>
                <div style={{ textAlign: "start", margin: ".5rem 0rem", display:'flex', gap:'1rem'}}>
                  <label style={{ textAlign: "start" }}>Discharge ID :</label>
                  <p style={{fontWeight:"bold"}}>{discharegeId}</p>
                </div>

                {/* <Input
                  id="discharege_id"
                  name="discharege_id"
                  // placeholder="12345"
                  // value={discharegeId}
                  placeholder={discharegeId}
                  type="discharege_id"
                  // disabled
                  // {...register("discharege_id")}
                  // value={patientName}
                /> */}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Patient Name :</label>
                </div>

                <Input
                  id="patient_name"
                  name="patient_name"
                  placeholder="Name"
                  type="text"
                  // {...register("patient_name")}
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Patient Phone :</label>
                </div>

                <Input
                  id="patient_phone"
                  name="Phone"
                  placeholder="patient_phone"
                  type="text"
                  // {...register("patient_phone")}
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                />
              </FormGroup>
            </Col>

            {/* ----SELECT --------- */}
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Sex :</label>
                </div>

                <select
                  value={patinetGender}
                  onChange={(e) => setPatientGender(e.target.value)}
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Age:</label>
                </div>
                <Input
                  id="age"
                  name="age"
                  placeholder="Age"
                  type="number"
                  // {...register("patient_phone")}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>ID :</label>
                </div>

                <Input
                  id="id"
                  name="id"
                  placeholder="id"
                  type="text"
                  // {...register("id")}
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Word/Cabin No :</label>
                </div>

                <Input
                  id="word_cabin_no"
                  name="word_cabin_no"
                  placeholder="Word/Cabin No"
                  type="text"
                  // {...register("word_cabin_no")}
                  value={wordNo}
                  onChange={(e) => setWordNo(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>
                    Contact Person Name:
                  </label>
                </div>

                <Input
                  id="contact_perso_namen"
                  name="contact_person_name"
                  placeholder="Contact Person Name"
                  type="text"
                  // {...register("contact_person_name")}
                  value={contactPersonName}
                  onChange={(e) => setContactPersonName(e.target.value)}
                />
              </FormGroup>
            </Col>
            {/* -----------select------- */}
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>
                    Mode of Admission :
                  </label>
                </div>

                <select
                  value={modeOfAdmission}
                  onChange={(e) => setModeOfAdmission(e.target.value)}
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="Regular">Regular</option>
                  <option value="Emergenct">Emergency</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>
                    Contact Person Mobile:
                  </label>
                </div>

                <Input
                  id="contact_person"
                  name="contact_person"
                  placeholder="Mobile No"
                  type="text"
                  // {...register("contact_person")}
                  value={contactPersonMobile}
                  onChange={(e) => setContactPersonMobile(e.target.value)}
                />
              </FormGroup>
            </Col>

            {/* --------------------------------- */}
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>
                    Date of Admission :
                  </label>
                </div>

                <DatePicker
                  id="datepicker"
                  selected={dateOfAdmission}
                  onChange={(e) => setDateOfAdmission(e)}
                  // dateFormat="yyyy/MM/dd"
                  dateFormat="dd/MM/yyyy"
                />
              </FormGroup>
            </Col>
            {/* --------------------------------- */}
            <Col md={12}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>
                    Date of Discharge :
                  </label>
                </div>

                <DatePicker
                  id="datepicker"
                  selected={dateOfDischarge}
                  onChange={(e) => setDateOfDischarge(e)}
                  dateFormat="dd/MM/yyyy"
                />
              </FormGroup>
            </Col>
            {/* --------------------------------- */}
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>
                    Primary Consultant:
                  </label>
                </div>

                <Input
                  id="word_cabin_no"
                  name="word_cabin_no"
                  placeholder="Primary Consultant"
                  type="text"
                  // {...register("word_cabin_no")}
                  value={primaryConsultant}
                  onChange={(e) => setPrimaryConsultant(e.target.value)}
                />
              </FormGroup>
            </Col>
            {/* --------------------------------- */}
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Department :</label>
                </div>

                <Input
                  id="department"
                  name="word_cabin_no"
                  placeholder="Department"
                  type="text"
                  // {...register("word_cabin_no")}
                  value={primaryConsultantDepartment}
                  onChange={(e) =>
                    setPrimaryConsultantDepartment(e.target.value)
                  }
                />
              </FormGroup>
            </Col>
            {/* --------------------------------- */}
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>
                    Others Consultants:
                  </label>
                </div>

                <Input
                  id="word_cabin_no"
                  name="word_cabin_no"
                  placeholder="Others Consultant"
                  type="text"
                  // {...register("word_cabin_no")}
                  value={othersConsultant}
                  onChange={(e) => setOthersConsultant(e.target.value)}
                />
              </FormGroup>
            </Col>
            {/* --------------------------------- */}
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Department :</label>
                </div>

                <Input
                  id="department"
                  name="word_cabin_no"
                  placeholder="Department"
                  type="text"
                  // {...register("word_cabin_no")}
                  value={othersConsultantDepartment}
                  onChange={(e) =>
                    setOthersConsultantDepartment(e.target.value)
                  }
                />
              </FormGroup>
            </Col>
            {/* --------------------------------- */}
            <Col md={12}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>
                    Diagnosis/Procedure/Surgery :
                  </label>
                </div>

                <Input
                  id="department"
                  name="word_cabin_no"
                  placeholder="Primary Consult"
                  type="text"
                  // {...register("word_cabin_no")}
                  value={dcs}
                  onChange={(e) => setDcs(e.target.value)}
                />
              </FormGroup>
            </Col>
            {/* --------------------------------- */}
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Chief Complaint:</label>
                </div>

                <Select.Creatable
                  multi={true}
                  name="form-field-name"
                  value={chiefComplaint}
                  onChange={(value) => setChiefComplaint(value)}
                  options={[
                    { value: "One", label: "One" },
                    { value: "Two", label: "Two" },
                  ]}
                />
              </FormGroup>
            </Col>
            {/* --------------------------------- */}
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Date :</label>
                </div>

                <DatePicker
                  id="datepicker"
                  selected={chiefComplaintDate}
                  onChange={setChiefComplaintDate}
                  formate="dd-mm-yyyy"
                />
              </FormGroup>
            </Col>
            {/* --------------------------------- */}
            <Col md={12}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Diagnosis :</label>
                </div>

                <Select.Creatable
                  multi={true}
                  name="form-field-name"
                  value={diagnosisOption}
                  onChange={(value) => setDiagnosisOption(value)}
                  options={[
                    { value: "IBD", label: "IBD" },
                    { value: "GI", label: "GI" },
                    { value: "CD", label: "CD" },
                    { value: "Bleeding", label: "Bleeding" },
                    { value: "BOV", label: "BOV" },
                    { value: "AR", label: "AR" },
                  ]}
                />

                {/* <Input
                  id="department"
                  name="word_cabin_no"
                  placeholder="Diagnosis"
                  type="text"
                  value={diagnosisText}
                  onChange={(e) => setDiagnosisText(e.target.value)}
                /> */}
              </FormGroup>
            </Col>
            {/* --------------------------------- */}
            {/* <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}></label>
                </div>

                <ReactSearchAutocomplete
                  items={[
                    {
                      id: 0,
                      name: "IBD",
                    },
                    {
                      id: 1,
                      name: "CD",
                    },
                    {
                      id: 2,
                      name: "BOV",
                    },
                    {
                      id: 3,
                      name: "AR",
                    },
                  ]}
                  onSelect={(item) => setDiagnosisValue(item.name)}
                  onClear={() => setDiagnosisValue(null)}
                  autoFocus
                  formatResult={(item) => (
                    <span style={{ display: "block", textAlign: "left" }}>
                      {item.name}
                    </span>
                  )}
                  showIcon={false}
                  styling={{
                    borderRadius: "5px",
                    height: "36px",
                  }}
                />
              </FormGroup>
            </Col> */}
            {/* --------------------------------- */}
            <Col md={12}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Comment :</label>
                </div>

                <Input
                  id="department"
                  name="word_cabin_no"
                  placeholder="Comment"
                  type="textarea"
                  // {...register("word_cabin_no")}
                  value={commentBox}
                  onChange={(e) => setCommentBox(e.target.value)}
                />
              </FormGroup>
            </Col>

            {/* ------------------------------------------ */}
          </Row>

          {/* Discharge Medication */}
          <div style={{ border: ".5px solid #CED4DA", padding: "1rem" }}>
            <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
              <label style={{ textAlign: "start", fontWeight: "600" }}>
                Discharge Medication :
              </label>
            </div>
            {dischargeMedication &&
              dischargeMedication.map((m, index) => {
                return (
                  <Row style={{ marginTop: ".5rem" }}>
                    <Col md={3}>
                      <div
                        style={{ textAlign: "start", marginBottom: ".5rem" }}
                      >
                        <label style={{ textAlign: "start" }}>
                          Brand/Geneic Name :
                        </label>
                      </div>
                      <Input
                        id="department"
                        name="word_cabin_no"
                        placeholder="Brand/Geneic Name"
                        type="input"
                        // {...register("word_cabin_no")}
                        defaultValue={m.brandName}
                        onChange={(e) =>
                          changeMedication(e.target.value, "brandName", index)
                        }
                      />
                    </Col>
                    <Col md={3}>
                      <div
                        style={{ textAlign: "start", marginBottom: ".5rem" }}
                      >
                        <label style={{ textAlign: "start" }}>Doses :</label>
                      </div>
                      <Input
                        id="doses"
                        name="doses"
                        placeholder="Doses"
                        type="input"
                        // {...register("word_cabin_no")}
                        value={m.doses}
                        onChange={(e) =>
                          changeMedication(e.target.value, "doses", index)
                        }
                      />
                    </Col>
                    <Col md={3}>
                      <div
                        style={{ textAlign: "start", marginBottom: ".5rem" }}
                      >
                        <label style={{ textAlign: "start" }}>Duration :</label>
                      </div>
                      <Input
                        id="department"
                        name="word_cabin_no"
                        placeholder="Brand/Geneic Name"
                        type="input"
                        // {...register("word_cabin_no")}
                        value={m.duration}
                        onChange={(e) =>
                          changeMedication(e.target.value, "duration", index)
                        }
                      />
                    </Col>
                    <Col md={3}>
                      <div
                        style={{ textAlign: "start", marginBottom: ".5rem" }}
                      >
                        <label style={{ textAlign: "start" }}>Note :</label>
                      </div>
                      <Input
                        id="department"
                        name="word_cabin_no"
                        placeholder="Brand/Geneic Name"
                        type="input"
                        // {...register("word_cabin_no")}
                        value={m.note}
                        onChange={(e) =>
                          changeMedication(e.target.value, "note", index)
                        }
                      />
                    </Col>
                  </Row>
                );
              })}

            <Row style={{ marginTop: "1rem" }}>
              <Col md={12}>
                <Button onClick={() => addMedication()}>+ ADD NEW</Button>
              </Col>
            </Row>
          </div>

          {/* ------------------------------------------------------------------------- */}
          {/* Discharge Medication */}
          <div
            style={{
              border: "1px solid #CED4DA",
              padding: "1rem",
              marginTop: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.03) 0px 1px 4px",
            }}
          >
            <Row style={{ marginBottom: ".5rem" }}>
              <Col sm={4} md={2}>
                <div style={{ textAlign: "start", verticalAlign: "center" }}>
                  <label style={{ textAlign: "start", fontWeight: "600" }}>
                    Investigation :
                  </label>
                </div>
              </Col>
              <Col sm={8} md={10}>
                <select
                  value={modeOfAdmission}
                  onChange={(e) => addInvestigation(e.target.value)}
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option disabled selected>
                    Select a value
                  </option>
                  <option value="ARC 1">ARC 1</option>
                  <option value="ARC 2">ARC 2</option>
                </select>
              </Col>
            </Row>
            {investigation?.map((inv, index) => {
              return (
                <Row style={{ marginTop: ".5rem" }}>
                  <Col md={4}>
                    <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                      <label style={{ textAlign: "start" }}>ARC :</label>
                    </div>
                    <Input
                      id="department"
                      name="word_cabin_no"
                      placeholder="ARC"
                      type="input"
                      value={inv.name}
                      onChange={(e) =>
                        changeInvestigation(e.target.value, "name", index)
                      }
                    />
                  </Col>
                  <Col md={4}>
                    <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                      <label style={{ textAlign: "start" }}>Value :</label>
                    </div>
                    <Input
                      id="department"
                      name="word_cabin_no"
                      placeholder="Value"
                      type="input"
                      value={inv.value}
                      onChange={(e) =>
                        changeInvestigation(e.target.value, "value", index)
                      }
                    />
                  </Col>
                  <Col md={4}>
                    <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                      <label style={{ textAlign: "start" }}>ML :</label>
                    </div>
                    <Input
                      id="department"
                      name="word_cabin_no"
                      placeholder="ML"
                      type="input"
                      value={inv.ml}
                      onChange={(e) =>
                        changeInvestigation(e.target.value, "ml", index)
                      }
                    />
                  </Col>
                </Row>
              );
            })}

            {/* <Row style={{ marginTop: "1rem" }}>
              <Col md={12}>
                <Button>+ ADD NEW</Button>
              </Col>
            </Row> */}
          </div>

          <Row style={{ marginTop: "1rem" }}>
            {/* --------------------------------- */}
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Follow Up :</label>
                </div>

                <Input
                  id="follow_up"
                  name="follow_up"
                  placeholder="Follow Up"
                  type="text"
                  // {...register("word_cabin_no")}
                  value={followUp}
                  onChange={(e) => setFollowUp(e.target.value)}
                />
              </FormGroup>
            </Col>
            {/* --------------------------------- */}
            <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Date :</label>
                </div>

                <DatePicker
                  id="datepicker"
                  selected={followUpDate}
                  onChange={setFollowUpDate}
                  formate="dd-mm-yyyy"
                />
              </FormGroup>
            </Col>
            {/* --------------------------------- */}
            <Col md={12}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Dietary Advice :</label>
                </div>

                <Input
                  id="Dietary Advice"
                  name="Dietary Advice"
                  placeholder="Dietary Advice"
                  type="textarea"
                  // {...register("word_cabin_no")}
                  value={dietaryAdvice}
                  onChange={(e) => setDietaryAdvice(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Button color="primary" style={{ width: "100%" }} type="submit">
                Save
              </Button>
            </Col>
            <Col md={6}>
              <Button onClick={() => handlePrint()} style={{ width: "100%" }}>
                Print
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div style={{ display: "none" }}>
        <PrintPreview
          initialDate={initialDate}
          discharegeId={discharegeId}
          patientName={patientName}
          patientPhone={patientPhone}
          patinetGender={patinetGender}
          age={age}
          id={id}
          contactPersonName={contactPersonName}
          contactPersonMobile={contactPersonMobile}
          wordNo={wordNo}
          modeOfAdmission={modeOfAdmission}
          // dateOfAdmission={dateOfAdmission}
          // dateOfDischarge={dateOfDischarge}
          primaryConsultant={primaryConsultant}
          primaryConsultantDepartment={primaryConsultantDepartment}
          othersConsultant={othersConsultant}
          othersConsultantDepartment={othersConsultantDepartment}
          dcs={dcs}
          // chiefComplaint ={chiefComplaint}
          chiefComplaintDate={chiefComplaintDate}
          // diagnosisText ={diagnosisText}
          // diagnosisValue ={diagnosisValue}
          commentBox={commentBox}
          defaultMedication={defaultMedication}
          dischargeMedication={dischargeMedication}
          investigation={investigation}
          followUp={followUp}
          followUpDate={followUpDate}
          dietaryAdvice={dietaryAdvice}
          ref={componentRef}
        ></PrintPreview>
      </div>
    </>
  );
};

export default InputForm;
