import { Form, Label, Input, FormGroup, Row, Col, Button } from "reactstrap";
import React, { useEffect, useState, useRef, useId } from "react";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";

//Data
import AllMedicine from "../data/MedicineData2.json";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { DebounceInput } from "react-debounce-input";

// import DatePicker from "react-bootstrap-date-picker";
import "./input_form.css";

import { useReactToPrint } from "react-to-print";
import { mainInvestigations, subInvestigations } from "../data/Investigations2";

import { v1 as uuidv1 } from "uuid";

import Select from "react-select-plus";
import "react-select-plus/dist/react-select-plus.css";
import CreatableSelect from "react-select/creatable";
import RSelect, { components } from "react-select";

// @date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PrintPreview from "./PrintPreview";

import _uniqueId from "lodash/uniqueId";

const allDepartments = [
  {
    id: 1,
    name: "Medical Gastroenterology",
    unit: [
      {
        id: "u1",
        name: "Unit Red",
        consultant: "",
      },
      {
        id: "u2",
        name: "Unit Green",
        consultant: "",
      },
      {
        id: "u3",
        name: "Unit Blue",
        consultant: "",
      },
      {
        id: "u4",
        name: "Unit Red",
        consultant: "",
      },
      {
        id: "u5",
        name: "Unit Orange",
        consultant: "",
      },
      {
        id: "u5",
        name: "Unit Yellow",
        consultant: "",
      },
      {
        id: "u5",
        name: "Unit Violet",
        consultant: "",
      },
    ],
  },
  {
    id: 2,
    name: "Surgical Gastroenterology",
    unit: [
      {
        id: "u1",
        name: "SU-i",
        consultant: "",
      },
      {
        id: "u2",
        name: "SU-ii",
        consultant: "",
      },
      {
        id: "u3",
        name: "SU-iii",
        consultant: "",
      },
    ],
  },
  {
    id: 3,
    name: "Pediatric Medical Gastroenterology",
    unit: [],
  },
  {
    id: 4,
    name: "Pediatric Surgical Gastroenterology",
    unit: [],
  },
];

const allProcedure = [
  {
    id: 1,
    name: "Endoscopy",
  },
  {
    id: 2,
    name: "Colonoscopy",
  },
  {
    id: 3,
    name: "ERCP",
  },
  {
    id: 4,
    name: "Pneumatic Ballon Dilatation",
  },
  {
    id: 5,
    name: "Others",
  },
];

const InputForm = () => {
  // console.log("all medicine is : ", AllMedicine);
  // ---states

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [initialDate, selectDate] = useState();

  const [discharegeId, setDischargeId] = useState(randomNumberInRange(1, 10));

  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nid, setNid] = useState();
  const [patinetGender, setPatientGender] = useState("");
  const [age, setAge] = useState();
  const [id, setId] = useState();
  const [contactPersonName, setContactPersonName] = useState();
  const [contactPersonMobile, setContactPersonMobile] = useState();
  const [wordNo, setWordNo] = useState();
  const [modeOfAdmission, setModeOfAdmission] = useState();
  const [dateOfAdmission, setDateOfAdmission] = useState();
  const [dateOfDischarge, setDateOfDischarge] = useState();
  const [physicalScience, setPhysicalScience] = useState([]);
  const [primaryUnit, setPrimaryUnit] = useState();
  const [primaryConsultant, setPrimaryConsultant] = useState();
  const [primaryConsultantDepartment, setPrimaryConsultantDepartment] =
    useState();
  const [othersConsultant, setOthersConsultant] = useState();
  const [othersConsultantDepartment, setOthersConsultantDepartment] =
    useState();
  const [dcs, setDcs] = useState();
  const [chiefComplaintDate, setChiefComplaintDate] = useState();
  const [comorbidity, setComorbidity] = useState();
  const [diagnosisOption, setDiagnosisOption] = useState();
  const [otherDiognosis, setOtherDiognosis] = useState();
  const [commentBox, setCommentBox] = useState();

  let defaultDrugTreatment = [
    {
      brandName: "",
      doses: "",
      strength: "",
      duration: "",
      prandial_advice: "",
      note: "",
    },
  ];
  const [drugTreatment, setDrugTreatment] = useState(defaultDrugTreatment);

  let defaultMedication = [
    {
      brandName: "",
      doses: "",
      strength: "",
      duration: "",
      prandial_advice: "",
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
  const [procedure, setProcedure] = useState([]);
  const [procedureDate, setProcedureDate] = useState();
  const [procedureReport, setProcedureReport] = useState();
  const [procedureNote, setProcedureNote] = useState();
  const [moodOfDischarge, setMoodOfDischarge] = useState([]);
  const [followUpDate, setFollowUpDate] = useState();
  const [advice, setAdvice] = useState();
  const [dietaryAdvice, setDietaryAdvice] = useState([]);

  // const [contactPersonName, setContactPersonName] = useState();

  let newDate =
    new Date(dateOfDischarge).getTime() - new Date(dateOfAdmission).getTime();
  var Difference_In_Days = newDate / (1000 * 3600 * 24);

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
    } else if (property === "strength") {
      newDischargeMedication[index].strength = e;
      setDischareMedication(newDischargeMedication);
    } else if (property === "duration") {
      newDischargeMedication[index].duration = e;
      setDischareMedication(newDischargeMedication);
    } else if (property === "prandial_advice") {
      newDischargeMedication[index].prandial_advice = e;
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
        strength: "",
        duration: "",
        prandial_advice: "",
        note: "",
      },
    ];
    setDischareMedication(defaultMedication);
  };
  const removeDischareMedication = (index) => {
    const newI = [...dischargeMedication];
    newI.splice(index, 1);
    setDischareMedication(newI);
  };

  //Drug treatment

  const changeDrugTreatment = (e, property, index) => {
    // console.log("text is : ", e, index);
    const newDischargeMedication = [...drugTreatment];

    if (property === "brandName") {
      newDischargeMedication[index].brandName = e;
      setDrugTreatment(newDischargeMedication);
    } else if (property === "doses") {
      newDischargeMedication[index].doses = e;
      setDrugTreatment(newDischargeMedication);
    } else if (property === "strength") {
      newDischargeMedication[index].strength = e;
      setDrugTreatment(newDischargeMedication);
    } else if (property === "duration") {
      newDischargeMedication[index].duration = e;
      setDrugTreatment(newDischargeMedication);
    } else if (property === "prandial_advice") {
      newDischargeMedication[index].prandial_advice = e;
      setDrugTreatment(newDischargeMedication);
    } else if (property === "note") {
      newDischargeMedication[index].note = e;
      setDrugTreatment(newDischargeMedication);
    }
  };
  const addDrugTreatment = () => {
    defaultDrugTreatment = [
      ...drugTreatment,
      {
        brandName: "",
        doses: "",
        strength: "",
        duration: "",
        prandial_advice: "",
        note: "",
      },
    ];

    // alert("im called")

    setDrugTreatment(defaultDrugTreatment);
  };
  const removeDrugTreatment = (index) => {
    const newI = [...drugTreatment];
    newI.splice(index, 1);
    setDrugTreatment(newI);
  };

  // ----------INVESTIGATION---------

  // const addInvestigation = async (input) => {
  //   console.log("selected investigation is: ", input);

  //   // const sInvestigation = await mainInvestigations.find((i) => i.id == input);

  //   setInvestigation(
  //     input.map((v) => {
  //       return {
  //         pValue: {
  //           id: v.value,
  //           name: v.label,
  //         },
  //         name: "",
  //         value: "",
  //         date: "",
  //       };
  //     })
  //   );

  //   // setInvestigation([
  //   //   ...investigation,
  //   //   {
  //   //     pValue: {
  //   //       id: sInvestigation.id,
  //   //       name: sInvestigation.name,
  //   //     },
  //   //     name: "",
  //   //     value: "",
  //   //     date: "",
  //   //   },
  //   // ]);
  // };

  const addInvestigation = async (input) => {
    // console.log("selected investigation is: ", input);

    const sInvestigation = await mainInvestigations.find(
      (i) => i.value == input
    );

    console.log("sInvetigation is : ", sInvestigation);

    const allInvestions = await subInvestigations.filter(
      (i) => i.pId == sInvestigation.value
    );
    const newinvestig = await allInvestions.map((inv) => ({
      pValue: {
        id: sInvestigation.value,
        name: sInvestigation.label,
      },
      name: inv.name,
      value: "",
      date: new Date(),
    }));

    console.log("all sub investigation is : ", newinvestig);

    setInvestigation([...investigation, ...newinvestig]);

    console.log("investigatins is :==========", investigation);

    // allInvestions.map((inv) => setInvestigation([
    //     ...investigation,
    //     {
    //       pValue: {
    //         id: sInvestigation.value,
    //         name: sInvestigation.label,
    //       },
    //       name: inv.name,
    //       value: "",
    //       date: new Date(),
    //     },
    //   ])
    // );

    // setInvestigation([
    //   ...investigation,
    //   {
    //     pValue: {
    //       id: sInvestigation.value,
    //       name: sInvestigation.label,
    //     },
    //     name: "",
    //     value: "",
    //     date: new Date(),
    //   },
    // ]);
  };

  const removeInvestigation = (index) => {
    const newI = [...investigation];
    newI.splice(index, 1);
    setInvestigation(newI);
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
    } else if (property === "date") {
      newInvestigation[index].date = e;
      setInvestigation(newInvestigation);
    }
  };

  // ----------Procedure---------

  const addProcedure = async (input) => {
    const newProcedure = [
      ...procedure,
      {
        name: input,
        note: "",
        report: "",
        date: "",
      },
    ];

    setProcedure(newProcedure);
  };

  const removeProcedure = (index) => {
    const newI = [...procedure];
    newI.splice(index, 1);
    setProcedure(newI);
  };

  const changeProcedure = (e, property, index) => {
    // console.log("text is : ", e, index);
    const newProcedure = [...procedure];

    if (property === "name") {
      newProcedure[index].name = e;
      setProcedure(newProcedure);
    } else if (property === "note") {
      newProcedure[index].note = e;
      setProcedure(newProcedure);
    } else if (property === "report") {
      newProcedure[index].report = e;
      setProcedure(newProcedure);
    } else if (property === "date") {
      newProcedure[index].date = e;
      setProcedure(newProcedure);
    }
  };

  // console.log("Dischage Medicare is  : ", dischargeMedication);
  // console.log("drugTreatmento is  : ", drugTreatment);

  // ================SUGESSION INPUT======================

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  const formatResult = (item, index) => {
    // console.log(console.log("item is : ", item, "index is : ", index));
    return (
      <div
        className="result-wrapper"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <span
          className="result-span"
          style={{ fontSize: ".9rem", fontWeight: 600, color: "#48503f" }}
        >
          {item.brand_name}
        </span>
        {/* <span className="result-span">{item.Strength}</span> */}
      </div>
    );
  };

  // console.log("dietary advice is is : ", dietaryAdvice)

  // ======================================

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
        {/* <div
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
        </div> */}

        <h4 style={{fontSize:"1.7rem",fontWeight:"700", textTransform:"uppercase"}}>Discharge Certificate</h4>

        <hr style={{ margin: "1.5rem 0rem" }} />

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            {/* --------------------------------- */}

            <Col md={6}>
              <FormGroup>
                <div
                  style={{
                    textAlign: "start",
                    margin: ".5rem 0rem",
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <label style={{ textAlign: "start" }}>Discharge ID :</label>
                  <p style={{ fontWeight: "bold", margin:0}}>{discharegeId}</p>
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
                <div
                  style={{
                    textAlign: "start",
                    marginBottom: ".5rem",
                  }}
                >
                  <label style={{ textAlign: "start" }}>
                    Mode of Discharge :
                  </label>
                </div>

                <select
                  value={moodOfDischarge}
                  onChange={(e) => setMoodOfDischarge(e.target.value)}
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="">Select an option</option>
                  <option value="Discharge to home">Dishcharge to Home</option>
                  <option value="Referred to other hospital">
                    Referred to other hospital
                  </option>
                  <option value="Referred to other dipertment">
                    Referred to other department
                  </option>
                  <option value="Discharge on request">
                    Discharge on request
                  </option>
                  <option value="Discharge against medical advice">
                    Discharge against medical advice
                  </option>
                </select>
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
                  placeholder="Phone"
                  type="text"
                  // {...register("patient_phone")}
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                />
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
                  <label style={{ textAlign: "start" }}>
                    Ward/Bed/Cabin No :
                  </label>
                </div>

                <Input
                  id="word_cabin_no"
                  name="word_cabin_no"
                  placeholder="Ward/Bed/Cabin No"
                  type="text"
                  // {...register("word_cabin_no")}
                  value={wordNo}
                  onChange={(e) => setWordNo(e.target.value)}
                />
              </FormGroup>
            </Col>

            <div
              style={{
                opacity: !patientName || !age || !wordNo ? 0.4 : "",
                pointerEvents: !patientName || !age || !wordNo ? "none" : "",
              }}
            >
              <Row>
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
                      <label style={{ textAlign: "start" }}>
                        Hospital ID :
                      </label>
                    </div>

                    <Input
                      id="id"
                      name="id"
                      placeholder="Hospital ID"
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
                      <label style={{ textAlign: "start" }}>NID :</label>
                    </div>

                    <Input
                      id="nid"
                      name="nid"
                      placeholder="NID"
                      type="text"
                      // {...register("patient_phone")}
                      value={nid}
                      onChange={(e) => setNid(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                      <label style={{ textAlign: "start" }}>Email :</label>
                    </div>

                    <Input
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      // {...register("patient_phone")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                      <label style={{ textAlign: "start" }}>
                        Name of Contact Person :
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
                      <option value="Regular">OPD</option>
                      <option value="Emergency">Emergency</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col md={12}>
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

                <Col md={4}>
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
                <Col md={4}>
                  <FormGroup>
                    <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                      <label style={{ textAlign: "start" }}>
                        Date of Discharge :
                      </label>
                    </div>

                    <DatePicker
                      disabled={!dateOfAdmission}
                      id="datepicker"
                      selected={dateOfDischarge}
                      onChange={(e) => setDateOfDischarge(e)}
                      dateFormat="dd/MM/yyyy"
                      excludeDates={[dateOfAdmission]}
                      minDate={new Date(dateOfAdmission)}
                    />
                  </FormGroup>
                </Col>

                {/* --------------------------------- */}
                <Col md={4}>
                  <FormGroup>
                    <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                      <label style={{ textAlign: "start" }}>Total Days :</label>
                    </div>

                    <Input
                      disabled
                      id="word_cabin_no"
                      name="word_cabin_no"
                      // placeholder="Others Consultant"
                      type="text"
                      // {...register("word_cabin_no")}
                      value={Difference_In_Days && Number(Difference_In_Days)}
                      // onChange={(e) => setOthersConsultant(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                {/* --------------------------------- */}
                <Col md={12}>
                  <FormGroup>
                    <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                      <label style={{ textAlign: "start" }}>
                        Presenting Complains :
                      </label>
                    </div>

                    <CreatableSelect
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          // borderColor: state.isFocused ? 'grey' : 'red',
                          textAlign: "left",
                        }),
                      }}
                      hideSelectedOptions={false}
                      closeMenuOnSelect={false}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      isMulti={true}
                      name="form-field-name"
                      isClearable
                      value={physicalScience}
                      onChange={(value) => setPhysicalScience(value)}
                      options={[
                        { value: "Celiac Disease", label: "Celiac Disease" },
                        {
                          value: "Irritable Bowel Syndrome (IBS)",
                          label: "Irritable Bowel Syndrome (IBS)",
                        },
                        {
                          value: "Lactose Intolerance",
                          label: "Lactose Intolerance",
                        },
                        {
                          value: "Chronic Diarrhea",
                          label: "Chronic Diarrhea",
                        },
                        { value: "Constipation", label: "Constipation" },
                        {
                          value: "Gastroesophageal Reflux Disease (GERD)",
                          label: "Gastroesophageal Reflux Disease (GERD)",
                        },
                        {
                          value: "Peptic Ulcer Disease",
                          label: "Peptic Ulcer Disease",
                        },
                        {
                          value: "Ulcerative Colitis",
                          label: "Ulcerative Colitis",
                        },
                        { value: "Gallstones", label: "Gallstones" },
                        {
                          value: "Acute and Chronic Pancreatitis",
                          label: "Acute and Chronic Pancreatitis",
                        },
                        { value: "Liver Disease", label: "Liver Disease" },
                        { value: "Diverticulitis", label: "Diverticulitis" },
                      ]}
                    />
                  </FormGroup>
                </Col>
                {/* --------------------------------- */}

                <Col md={12}>
                  <div
                    className=""
                    style={{
                      border: "1px solid #00CCFF",
                      padding: "1rem",
                      borderRadius: "5px",
                      marginBottom: "1rem",
                      backgroundColor: "#f5fdff",
                    }}
                  >
                    <Row>
                      {/* <h1>hello</h1> */}
                      <div style={{ marginBottom: ".5rem" }}>
                        <h6>Select Department & Consultant : </h6>
                      </div>
                      <Col md={primaryConsultantDepartment?.unit ? 6 : 12}>
                        <FormGroup>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label style={{ textAlign: "start" }}>
                              Department :
                            </label>
                          </div>

                          <select
                            // value={primaryConsultantDepartment?.name}
                            onChange={(e) => {
                              const dep = allDepartments.find(
                                (d) => d.id == e.target.value
                              );
                              setPrimaryConsultantDepartment(dep);
                            }}
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Department</option>
                            {allDepartments?.map((d) => {
                              return <option value={d?.id}> {d?.name}</option>;
                            })}
                          </select>
                        </FormGroup>
                      </Col>
                      {/* --------------------------------- */}

                      {primaryConsultantDepartment?.unit && (
                        <Col md={6}>
                          <FormGroup>
                            <div
                              style={{
                                textAlign: "start",
                                marginBottom: ".5rem",
                              }}
                            >
                              <label style={{ textAlign: "start" }}>
                                Unit :
                              </label>
                            </div>

                            <select
                              // value={primaryConsultantDepartment?.name}
                              onChange={(e) => {
                                const unit =
                                  primaryConsultantDepartment.unit.find(
                                    (d) => d.id == e.target.value
                                  );
                                console.log("unit is : ", unit);
                                setPrimaryUnit(unit);
                              }}
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Select Unit</option>
                              {primaryConsultantDepartment?.unit?.map((d) => {
                                return (
                                  <option value={d?.id}> {d?.name}</option>
                                );
                              })}
                            </select>
                          </FormGroup>
                        </Col>
                      )}
                      {/* --------------------------------- */}
                      {primaryConsultantDepartment?.unit && (
                        <Col md={12}>
                          <FormGroup>
                            <div
                              style={{
                                textAlign: "start",
                                marginBottom: ".5rem",
                              }}
                            >
                              <label style={{ textAlign: "start" }}>
                                Primary Consultant:
                              </label>
                            </div>

                            {/* <select
                          value={primaryConsultant}
                          onChange={(e) => setPrimaryConsultant(e.target.value)}
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Primary Consultant</option>
                          {primaryUnit?.consultant?.map((c) => {
                            return <option value={c.name}>{c.name}</option>;
                          })}
                        </select> */}

                            <Input
                              id="word_cabin_no"
                              name="word_cabin_no"
                              placeholder="Others Consultant"
                              type="text"
                              // {...register("word_cabin_no")}
                              value={primaryConsultant}
                              onChange={(e) =>
                                setPrimaryConsultant(e.target.value)
                              }
                            />
                          </FormGroup>
                        </Col>
                      )}
                    </Row>
                  </div>
                </Col>

                {/* --------------------------------- */}
                <Col md={12}>
                  <FormGroup>
                    <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                      <label style={{ textAlign: "start" }}>
                        Other Consultant :
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

                <Col md={12}>
                  <FormGroup>
                    <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                      <label style={{ textAlign: "start" }}>
                        Comorbidity :
                      </label>
                    </div>

                    <CreatableSelect
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          // borderColor: state.isFocused ? 'grey' : 'red',
                          textAlign: "left",
                        }),
                      }}
                      hideSelectedOptions={false}
                      closeMenuOnSelect={false}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      isMulti={true}
                      name="form-field-name"
                      isClearable
                      value={comorbidity}
                      onChange={(value) => setComorbidity(value)}
                      options={[
                        { value: "DM", label: "DM" },
                        { value: "Hypertension", label: "Hypertension" },
                        { value: "IHD", label: "IHD" },
                        { value: "CKD", label: "CKD" },
                        {
                          value: "Bronchial asthma",
                          label: "Bronchial asthma",
                        },
                        { value: "COPD", label: "COPD" },
                      ]}
                    />

                    {/* <Input
                      id="department"
                      name="word_cabin_no"
                      placeholder="Comorbidility"
                      type="text"
                      value={comorbidity}
                      onChange={(e) => setComorbidity(e.target.value)}
                    /> */}
                  </FormGroup>
                </Col>
                {/* --------------------------------- */}
                <Col md={6}>
                  <FormGroup>
                    <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                      <label style={{ textAlign: "start" }}>
                        Primary Diagnosis :
                      </label>
                    </div>

                    {/* <CreatableSelect
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      // borderColor: state.isFocused ? 'grey' : 'red',
                      textAlign: "left",
                    }),
                  }}
                  hideSelectedOptions={false}
                  closeMenuOnSelect={false}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  isMulti={true}
                  name="form-field-name"
                  isClearable
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
                /> */}

                    <Input
                      id="department"
                      name="word_cabin_no"
                      placeholder="Principal Diagnosis"
                      type="text"
                      value={diagnosisOption}
                      onChange={(e) => setDiagnosisOption(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                      <label style={{ textAlign: "start" }}>
                        Others Diagnosis:
                      </label>
                    </div>

                    <Input
                      id="word_cabin_no"
                      name="word_cabin_no"
                      placeholder="Others Consultant"
                      type="text"
                      // {...register("word_cabin_no")}
                      value={otherDiognosis}
                      onChange={(e) => setOtherDiognosis(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                      <label style={{ textAlign: "start" }}>
                        Case summary:
                      </label>
                    </div>

                    <Input
                      id="department"
                      name="word_cabin_no"
                      placeholder="Case summary"
                      type="textarea"
                      // {...register("word_cabin_no")}
                      value={commentBox}
                      onChange={(e) => setCommentBox(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>

              {/* Investigation */}
              <div
                style={{
                  border: "1px solid #CED4DA",
                  padding: "1rem",
                  boxShadow: "rgba(0, 0, 0, 0.03) 0px 1px 4px",
                  backgroundColor: "#cce4f5",
                }}
              >
                <Row style={{ marginBottom: ".5rem" }}>
                  <Col sm={4} md={2}>
                    <div
                      style={{ textAlign: "start", verticalAlign: "center" }}
                    >
                      <label style={{ textAlign: "start", fontWeight: "600" }}>
                        Investigation :
                      </label>
                    </div>
                  </Col>
                  <Col sm={8} md={10}>
                    {/* <CreatableSelect
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      // borderColor: state.isFocused ? 'grey' : 'red',
                      textAlign: "left",
                    }),
                  }}
                  dfaultValue={[]}
                  // onChange={(e) => addInvestigation(e.target.value)}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={(options) => {
                    if (Array.isArray(options)) {
                      addInvestigation(options.map((opt) => opt));
                    }
                  }}
                  class="form-select"
                  aria-label="Default select example"
                  options={mainInvestigations}
                  // <option disabled selected>
                  //   Select a value
                  // </option>
                  // {mainInvestigations?.map((mIn) => {
                  //   return <option value={mIn.id}>{mIn.name}</option>;
                  // })}
                /> */}

                    <select
                      value={modeOfAdmission}
                      onChange={(e) => addInvestigation(e.target.value)}
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option disabled selected>
                        Select a value
                      </option>
                      {mainInvestigations?.map((mIn) => {
                        return <option value={mIn.value}>{mIn.label}</option>;
                      })}
                      {/* <option value="ARC 2">ARC 2</option> */}
                    </select>
                  </Col>
                </Row>
                {investigation?.map((inv, index) => {
                  return (
                    <Row style={{ marginTop: ".5rem" }}>
                      <Col md={4}>
                        <div
                          style={{ textAlign: "start", marginBottom: ".5rem" }}
                        >
                          <label
                            style={{ textAlign: "start", fontSize: ".9rem" }}
                          >
                            {inv?.pValue?.name} :
                          </label>
                        </div>

                        <select
                          value={inv?.name}
                          onChange={(e) =>
                            changeInvestigation(e.target.value, "name", index)
                          }
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select a value</option>
                          {subInvestigations
                            .filter((i) => i?.pId == inv?.pValue?.id)
                            .map((v) => {
                              return <option value={v?.name}>{v?.name}</option>;
                            })}
                          {/* {mainInvestigations?.map((mIn) => {
                        return <option value={mIn.id}>{mIn.name}</option>;
                      })} */}
                          {/* <option value="ARC 2">ARC 2</option> */}
                        </select>
                        {/* <Input
                      id="department"
                      name="word_cabin_no"
                      placeholder="ARC"
                      type="input"
                      value={inv.name}
                      onChange={(e) =>
                        changeInvestigation(e.target.value, "name", index)
                      }
                    /> */}
                      </Col>
                      <Col md={4}>
                        <div
                          style={{ textAlign: "start", marginBottom: ".5rem" }}
                        >
                          <label
                            style={{ textAlign: "start", fontSize: ".9rem" }}
                          >
                            Value :
                          </label>
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
                      <Col md={3}>
                        <div
                          style={{ textAlign: "start", marginBottom: ".5rem" }}
                        >
                          <label
                            style={{ textAlign: "start", fontSize: ".9rem" }}
                          >
                            Date :
                          </label>
                        </div>

                        <DatePicker
                          id="datepicker"
                          selected={inv.date}
                          onChange={(e) =>
                            changeInvestigation(e, "date", index)
                          }
                          dateFormat="dd/MM/yyyy"
                        />
                      </Col>
                      <Col md={1}>
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <i
                            onClick={() => removeInvestigation(index)}
                            class="fas fa-trash"
                            style={{
                              marginTop: "30px",
                              cursor: "pointer",
                              color: "red",
                            }}
                          ></i>
                        </div>
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

              {/* Procedure Oparation performed */}
              {/* ------------------------------------------------------------------------- */}

              <div
                style={{
                  marginTop: ".5rem",
                  border: "1px solid #CED4DA",
                  padding: "1rem",
                  boxShadow: "rgba(0, 0, 0, 0.03) 0px 1px 4px",
                  backgroundColor: "#f0f7fc",
                }}
              >
                <Row style={{ marginBottom: ".5rem" }}>
                  <Col sm={4} md={4}>
                    <div
                      style={{ textAlign: "start", verticalAlign: "center" }}
                    >
                      <label style={{ textAlign: "start", fontWeight: "600" }}>
                        Procedure / Operation performed :
                      </label>
                    </div>
                  </Col>
                  <Col sm={8} md={8}>
                    <select
                      // value={pro}
                      onChange={(e) => addProcedure(e.target.value)}
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option disabled selected>
                        Select a value
                      </option>
                      {allProcedure?.map((p) => {
                        return <option value={p.name}>{p.name}</option>;
                      })}
                      {/* <option value="ARC 2">ARC 2</option> */}
                    </select>
                  </Col>
                </Row>

                {procedure?.map((proc, index) => {
                  return (
                    <Row style={{ alignItems: "center" }}>
                      <Col md={3}>
                        <FormGroup>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label style={{ textAlign: "start" }}>
                              Name :{" "}
                            </label>
                          </div>
                          <input
                            className="form-control"
                            disabled
                            value={proc?.name}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={3}>
                        <FormGroup>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label style={{ textAlign: "start" }}>Note :</label>
                          </div>

                          <Input
                            id="follow_up"
                            name="follow_up"
                            // placeholder="Follow Up"
                            type="text"
                            // {...register("word_cabin_no")}
                            value={proc?.note}
                            onChange={(e) =>
                              changeProcedure(e.target.value, "note", index)
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col md={3}>
                        <FormGroup>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label style={{ textAlign: "start" }}>
                              Report :
                            </label>
                          </div>

                          <Input
                            id="follow_up"
                            name="follow_up"
                            // placeholder="Follow Up"
                            type="text"
                            // {...register("word_cabin_no")}
                            value={proc?.report}
                            onChange={(e) =>
                              changeProcedure(e.target.value, "report", index)
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col md={2}>
                        <FormGroup>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label style={{ textAlign: "start" }}>Date :</label>
                          </div>

                          {/* <DatePicker
                            id="datepicker"
                            selected={procedureDate}
                            onChange={setProcedureDate}
                            formate="dd-mm-yyyy"
                          /> */}
                          <input
                            type="date"
                            className="form-control"
                            value={proc?.date}
                            onChange={(e) =>
                              changeProcedure(e.target.value, "date", index)
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col md={1}>
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "-1rem",
                          }}
                        >
                          <i
                            onClick={() => removeProcedure(index)}
                            class="fas fa-trash"
                            style={{
                              marginTop: "30px",
                              cursor: "pointer",
                              color: "red",
                            }}
                          ></i>
                        </div>
                      </Col>
                    </Row>
                  );
                })}
              </div>

              {/* Drug treatment during hospital */}
              <div
                style={{
                  border: ".5px solid #CED4DA",
                  padding: "1rem",
                  marginBottom: "1rem",
                  marginTop: "1rem",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start", fontWeight: "600" }}>
                    Drug treatment during hospital :
                  </label>
                </div>
                {drugTreatment &&
                  drugTreatment.map((m, index) => {
                    return (
                      <Row style={{ marginTop: ".5rem" }}>
                        <Col md={3}>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label
                              style={{ textAlign: "start", fontSize: ".9rem" }}
                            >
                              Brand/Generic Name:
                            </label>
                          </div>
                          <ReactSearchAutocomplete
                            items={AllMedicine}
                            fuseOptions={{
                              keys: ["brand_name", "generic_name"],
                            }} // Search on both fields
                            resultStringKeyName="brand_name" // String to display in the results
                            onSearch={handleOnSearch}
                            onHover={handleOnHover}
                            onSelect={(item) => {
                              let newArray = [...drugTreatment];
                              newArray[index].brandName = item?.brand_name;
                              setDrugTreatment(newArray);
                            }}
                            onFocus={handleOnFocus}
                            onClear={handleOnClear}
                            showIcon={false}
                            minChars={2}
                            maxResults={6}
                            formatResult={(item) => formatResult(item, index)}
                            styling={{
                              height: "34px",
                              border: "1px solid darkgreen",
                              borderRadius: "4px",
                              backgroundColor: "white",
                              boxShadow: "none",
                              hoverBackgroundColor: "#CCE4F5",
                              color: "#1E1E1E",
                              fontSize: "12px",
                              // fontFamily: "Courier",
                              iconColor: "green",
                              lineColor: "lightgreen",
                              placeholderColor: "darkgreen",
                              clearIconMargin: "3px 8px 0 0",
                              zIndex: 1000 - Number(index),
                            }}
                          />
                        </Col>
                        <Col md={2}>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label
                              style={{ textAlign: "start", fontSize: ".9rem" }}
                            >
                              Strength:
                            </label>
                          </div>
                          <Input
                            id="doses"
                            name="doses"
                            placeholder="Strength"
                            type="input"
                            // {...register("word_cabin_no")}
                            value={m?.strength}
                            onChange={(e) =>
                              changeDrugTreatment(
                                e.target.value,
                                "strength",
                                index
                              )
                            }
                          />
                        </Col>
                        <Col md={2}>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label
                              style={{ textAlign: "start", fontSize: ".9rem" }}
                            >
                              Doses:
                            </label>
                          </div>
                          <Input
                            id="doses"
                            name="doses"
                            placeholder="Doses"
                            type="input"
                            // {...register("word_cabin_no")}
                            value={m.doses}
                            onChange={(e) =>
                              changeDrugTreatment(
                                e.target.value,
                                "doses",
                                index
                              )
                            }
                          />
                        </Col>
                        <Col md={2}>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label
                              style={{ textAlign: "start", fontSize: ".9rem" }}
                            >
                              Duration:
                            </label>
                          </div>
                          <Input
                            id="department"
                            name="duration"
                            placeholder="Duration"
                            type="input"
                            // {...register("word_cabin_no")}
                            value={m.duration}
                            onChange={(e) =>
                              changeDrugTreatment(
                                e.target.value,
                                "duration",
                                index
                              )
                            }
                          />
                        </Col>
                        <Col md={3} style={{ position: "relative" }}>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label
                              style={{ textAlign: "start", fontSize: ".9rem" }}
                            >
                              Prandial advice:
                            </label>
                          </div>
                          <select
                            value={m?.prandial_advice}
                            onChange={(e) =>
                              changeDrugTreatment(
                                e.target.value,
                                "prandial_advice",
                                index
                              )
                            }
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option value="Before meal">Before meal</option>
                            <option value="After meal">After meal</option>
                          </select>
                          <div
                            style={{ position: "absolute", top: 2, right: 12 }}
                          >
                            <i
                              onClick={() => removeDrugTreatment(index)}
                              class="fas fa-times"
                              style={{ color: "red", cursor: "pointer" }}
                            ></i>
                          </div>
                        </Col>
                        <Col md={3} style={{ position: "relative" }}>
                          {/* <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label
                              style={{ textAlign: "start", fontSize: ".9rem" }}
                            >
                              Note:
                            </label>
                          </div>
                          <Input
                            id="department"
                            name="word_cabin_no"
                            placeholder="Note"
                            type="input"
                            // {...register("word_cabin_no")}
                            value={m.note}
                            onChange={(e) =>
                              changeDrugTreatment(e.target.value, "note", index)
                            }
                          /> */}
                        </Col>
                      </Row>
                    );
                  })}

                <Row style={{ marginTop: "1rem" }}>
                  <Col md={12}>
                    <Button onClick={() => addDrugTreatment()}>
                      + ADD NEW
                    </Button>
                  </Col>
                </Row>
              </div>

              {/* Discharge Medication */}
              <div
                style={{
                  border: ".5px solid #CED4DA",
                  padding: "1rem",
                  backgroundColor: "#F5FDFF",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                  <label style={{ textAlign: "center", fontWeight: "600" }}>
                    Discharge Medication (পরবর্তী চিকিৎসা ) :
                  </label>
                </div>
                {dischargeMedication &&
                  dischargeMedication.map((m, index) => {
                    return (
                      <Row style={{ marginTop: ".5rem" }}>
                        <Col md={2}>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label
                              style={{ textAlign: "start", fontSize: ".9rem" }}
                            >
                              Brand/Generic Name:
                            </label>
                          </div>

                          <ReactSearchAutocomplete
                            items={AllMedicine}
                            formatResult={(item) => formatResult(item, index)}
                            fuseOptions={{
                              keys: ["brand_name", "generic_name"],
                            }} // Search on both fields
                            resultStringKeyName="brand_name" // String to display in the results
                            onSearch={handleOnSearch}
                            onHover={handleOnHover}
                            onSelect={(item) => {
                              let newArray = [...dischargeMedication];
                              newArray[index].brandName = item?.brand_name;
                              setDischareMedication(newArray);
                            }}
                            onFocus={handleOnFocus}
                            onClear={handleOnClear}
                            minChars={2}
                            maxResults={6}
                            showIcon={false}
                            styling={{
                              height: "34px",
                              border: "1px solid darkgreen",
                              borderRadius: "4px",
                              backgroundColor: "white",
                              boxShadow: "none",
                              hoverBackgroundColor: "#CCE4F5",
                              color: "#1E1E1E",
                              fontSize: "12px",
                              // fontFamily: "Courier",
                              iconColor: "green",
                              lineColor: "lightgreen",
                              placeholderColor: "darkgreen",
                              clearIconMargin: "3px 8px 0 0",
                              zIndex: 500 - Number(index),
                            }}
                          />

                          {/* <Input
                        id="department"
                        name="word_cabin_no"
                        placeholder="Brand/Geneic Name"
                        type="input"
                        // {...register("word_cabin_no")}
                        defaultValue={m.brandName}
                        onChange={(e) =>
                          changeMedication(e.target.value, "brandName", index)
                        }
                      /> */}
                        </Col>
                        <Col md={1}>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label
                              style={{ textAlign: "start", fontSize: ".9rem" }}
                            >
                              Strength:
                            </label>
                          </div>
                          <Input
                            id="doses"
                            name="doses"
                            placeholder="Strength"
                            type="input"
                            // {...register("word_cabin_no")}
                            value={m?.strength}
                            onChange={(e) =>
                              changeMedication(
                                e.target.value,
                                "strength",
                                index
                              )
                            }
                          />
                        </Col>
                        <Col md={2}>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label
                              style={{ textAlign: "start", fontSize: ".9rem" }}
                            >
                              Doses:
                            </label>
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
                        <Col md={2}>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label
                              style={{ textAlign: "start", fontSize: ".9rem" }}
                            >
                              Duration:
                            </label>
                          </div>
                          <Input
                            id="department"
                            name="duration"
                            placeholder="Duration"
                            type="input"
                            // {...register("word_cabin_no")}
                            value={m.duration}
                            onChange={(e) =>
                              changeMedication(
                                e.target.value,
                                "duration",
                                index
                              )
                            }
                          />
                        </Col>
                        <Col md={2}>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label
                              style={{ textAlign: "start", fontSize: ".9rem" }}
                            >
                              Prandial advice:
                            </label>
                          </div>
                          <select
                            value={m?.prandial_advice}
                            onChange={(e) =>
                              changeMedication(
                                e.target.value,
                                "prandial_advice",
                                index
                              )
                            }
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option value="Before meal">Before meal</option>
                            <option value="After meal">After meal</option>
                          </select>
                        </Col>
                        <Col md={3} style={{ position: "relative" }}>
                          <div
                            style={{
                              textAlign: "start",
                              marginBottom: ".5rem",
                            }}
                          >
                            <label
                              style={{ textAlign: "start", fontSize: ".9rem" }}
                            >
                              Note:
                            </label>
                          </div>
                          <Input
                            id="department"
                            name="word_cabin_no"
                            placeholder="Note"
                            type="input"
                            // {...register("word_cabin_no")}
                            value={m.note}
                            onChange={(e) =>
                              changeMedication(e.target.value, "note", index)
                            }
                          />
                          <div
                            style={{ position: "absolute", top: 2, right: 12 }}
                          >
                            <i
                              onClick={() => removeDischareMedication(index)}
                              class="fas fa-times"
                              style={{ color: "red", cursor: "pointer" }}
                            ></i>
                          </div>
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
                      <label style={{ textAlign: "start" }}>Advice :</label>
                    </div>

                    <Input
                      id="Advice"
                      name="Advice"
                      placeholder="Advice"
                      type="text"
                      // {...register("word_cabin_no")}
                      value={advice}
                      onChange={(e) => setAdvice(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                      <label style={{ textAlign: "start" }}>
                        Dietary Advice :
                      </label>
                    </div>

                    <CreatableSelect
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          // borderColor: state.isFocused ? 'grey' : 'red',
                          textAlign: "left",
                        }),
                      }}
                      hideSelectedOptions={false}
                      closeMenuOnSelect={false}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      isMulti={true}
                      name="form-field-name"
                      isClearable
                      value={dietaryAdvice}
                      onChange={(value) => setDietaryAdvice(value)}
                      options={[
                        {
                          value: "দুধ ও দুধ জাতীয় খাবার খাবেন না",
                          label: " দুধ ও দুধ জাতীয় খাবার খাবেন না",
                        },
                        {
                          value: "শাক জাতীয় খাবার খাবেন না",
                          label: "শাক জাতীয় খাবার খাবেন না",
                        },
                        // {
                        //   value: "ভাজা-পোঁড়া খাবার কম খাবেন",
                        //   label: "ভাজা-পোঁড়া খাবার কম খাবেন",
                        // },
                        // {
                        //   value: "গমের তৈরি খাবার খাবেন না",
                        //   label: "গমের তৈরি খাবার খাবেন না",
                        // },
                        // {
                        //   value: "কোন বনাজী ও ভেষজ ওষুধ খাবেন না",
                        //   label: "কোন বনাজী ও ভেষজ ওষুধ খাবেন না",
                        // },
                        {
                          value: "চর্বি জাতীয় খাবার খাবেন না",
                          label: "চর্বি জাতীয় খাবার খাবেন না",
                        },
                        {
                          value: "মিষ্টি ও চিনি জাতীয় খাবার খাবেন না",
                          label: "মিষ্টি ও চিনি জাতীয় খাবার খাবেন না",
                        },
                      ]}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Button
                    color="primary"
                    style={{ width: "100%" }}
                    type="submit"
                  >
                    Save
                  </Button>
                </Col>
                <Col md={6}>
                  <Button
                    onClick={() => handlePrint()}
                    style={{ width: "100%" }}
                  >
                    Print
                  </Button>
                </Col>
              </Row>
            </div>

            {/* --------------------------------- */}
            {/* <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Department :</label>
                </div>

                <Input
                  id="department"
                  name="word_cabin_no"
                  placeholder="Name"
                  type="text"
                  // {...register("word_cabin_no")}
                  value={othersConsultantDepartment}
                  onChange={(e) =>
                    setOthersConsultantDepartment(e.target.value)
                  }
                />
              </FormGroup>
            </Col> */}

            {/* --------------------------------- */}
            {/* <Col md={6}>
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
            </Col> */}
            {/* --------------------------------- */}
            {/* <Col md={6}>
              <FormGroup>
                <div style={{ textAlign: "start", marginBottom: ".5rem" }}>
                  <label style={{ textAlign: "start" }}>Date :</label>
                </div>

                <DatePicker
                  id="datepicker"
                  selected={chiefComplaintDate}
                  onChange={(e) => setChiefComplaintDate(e)}
                  dateFormat="dd/MM/yyyy"
                  // formate="dd-mm-yyyy"
                />
              </FormGroup>
            </Col> */}
            {/* --------------------------------- */}

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
          </Row>
          {/* ------------------------------------------ */}

          {/* --------------------------------- */}
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
          dateOfAdmission={
            dateOfAdmission &&
            `${dateOfAdmission?.getDate()}/${dateOfAdmission?.getMonth()}/${dateOfAdmission?.getYear()}`
          }
          dateOfDischarge={
            dateOfDischarge &&
            `${dateOfDischarge?.getDate()}/${dateOfDischarge?.getMonth()}/${dateOfDischarge?.getYear()}`
          }
          totalDays={Difference_In_Days}
          physicalScience={physicalScience}
          primaryConsultantDepartment={primaryConsultantDepartment?.name}
          primaryConsultant={primaryConsultant}
          othersConsultant={othersConsultant}
          othersConsultantDepartment={othersConsultantDepartment}
          comorbidity={comorbidity}
          dcs={dcs}
          diagnosisOption={diagnosisOption}
          otherDiognosis={otherDiognosis}
          // chiefComplaint ={chiefComplaint}
          // chiefComplaintDate={chiefComplaintDate}
          // diagnosisText ={diagnosisText}
          // diagnosisValue ={diagnosisValue}
          moodOfDischarge={moodOfDischarge}
          drugTreatment={drugTreatment}
          commentBox={commentBox}
          defaultMedication={defaultMedication}
          dischargeMedication={dischargeMedication}
          investigation={investigation}
          procedure={procedure}
          followUp={followUp}
          followUpDate={moment(followUpDate).format("MMM Do YY")}
          advice={advice}
          dietaryAdvice={dietaryAdvice}
          ref={componentRef}
        ></PrintPreview>
      </div>
    </>
  );
};

export default InputForm;
