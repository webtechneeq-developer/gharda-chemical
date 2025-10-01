import React, { useState, useEffect } from "react";
import "./ContentBank.css";
// import {
//   ContentBankCard,
//   ContentBankCardGeneral,
// } from "./contentBankComponents/contentBankCard";
import HeroBanner from "./contentBankComponents/heroBanner";
import Feed from "../BlogEditor/components/SingleFeedPost";

// const companyPolicy = {
//   title: "Company Policies",
//   listItems: [
//     "Leave Policy",
//     "Loan Policy",
//     "Domestic Travel Policy",
//     "Domestic Travel Reimbursement",
//     "International Travel Policy",
//     "International Travel Reimbursement",
//     "Petrol Reimbursement",
//     "Car Policy",
//     "Conveyance Policy",
//     "Mobile Bill Reimbursement Policy",
//     "Mobile Handset Policy",
//     "Annual Health Checkup Policy",
//     "Laptop Policy",
//     "Driver Allowance Policy",
//     "Working Hours and Attendance Policy",
//     "Code of Conduct Policy",
//     "IJB Policy",
//     "Capex Policy",
//     "Inventory Policy",
//     "Credit Policy",
//   ],
// };

// const RnDManual = {
//   title: "R&D Manuals",
//   listItems: ["Apex Manual", "IMS R&D MANUAL 2024-25", "Procedure manual"],
// };

// const HOITPolicy = {
//   title: "HO - IT Policies",
//   listItems: [
//     "Acceptable Use Policy",
//     "Access Managment policy",
//     "Asset Managment Policy",
//     "Change Managment policy",
//     "Configuration Managment policy",
//     "Cryptography policy",
//     "Data Backup and Retention Policy",
//     "Email Policy",
//     "Environment, Health & Safety Policies Compendium",
//     "Hardline policy",
//     "Internet usage policy",
//     "IT Incident Response Policy",
//     "IT Security Risk Assessment Policy",
//     "Log Managment policy",
//     "Network and Teleworking & cloud service policy",
//     "Password Managment policy",
//     "Patch Managment policy",
//     "Remote Access Policy",
//   ],
// };

// const PoliciesandGuidelines = {
//   title: "Policies and Guidelines",
//   listItems: [
//     "Procurement Policy Manual",
//     "Vendor Selection Guidelines",
//     "Code of Conduct for Vendors & Contractors",
//     "CapEx & OpEx Procurement Rules",
//   ],
// };
// const StandardOperatingProcedures = {
//   title: "Procurement - Standard Operating Procedures (SOPs)",
//   listItems: [
//     "Purchase Requisition (PR) Process SOP",
//     "Purchase Order (PO) Generation SOP",
//     "Vendor Registration & Onboarding SOP",
//     "Material Receipt & Inspection SOP",
//     "Contract Management SOP",
//     "Procurement for Services SOP (AMC, Consultancy, etc.)",
//     "Emergency Procurement Procedure",
//   ],
// };
// const FormsTemplates = {
//   title: "Forms & Templates",
//   listItems: [
//     "Purchase Requisition Form",
//     "Vendor Registration Form",
//     "PO Amendment Request Form",
//     "Non-Disclosure Agreement (NDA) Template",
//     "Standard Purchase Order Format",
//     "Asset/Inventory Indent Form",
//     "Advance Payment Request Form",
//     "CapEx Approval Form",
//     "Bid Evaluation Template",
//   ],
// };
// const ChecklistsReferenceDocuments = {
//   title: "Checklists & Reference Documents",
//   listItems: [
//     "Procurement Process Checklist",
//     "Vendor Document Submission Checklist",
//     "List of Approved Vendors",
//     "Category-wise Procurement Contacts (key buyers per category)",
//     "HSN/SAC Code Reference List",
//     "Tax & Compliance Requirements for Procurement (PAN, GST, MSME, etc.)",
//   ],
// };

const ContentBank = () => {
  const [openTitle, setOpenTitle] = React.useState(null);
  const [blogs, setBlogs] = useState([]);

  const handleToggle = (title) => {
    setOpenTitle((prev) => (prev === title ? null : title));
    console.log("title id main card", title);
  };
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("http://localhost:4000/api/blogs");
      setBlogs(res.data);
    };
    fetchBlogs();
  });

  console.log("openTitle", openTitle);

  return (
    <div className="main-container">
      <div className="container content-bank-container">
        <HeroBanner />
        <Feed />

        {/* <div className="container">
        <div className="all-box ">
          <div className="container-content">
            {companyPolicy && (
              <ContentBankCard
                title={companyPolicy.title}
                listItems={companyPolicy.listItems}
                isOpen={openTitle === companyPolicy.title}
                onToggle={() => handleToggle(companyPolicy.title)}
              />
            )}
          </div>
          <div className="container-content">
            {RnDManual && (
              <ContentBankCard
                title={RnDManual.title}
                listItems={RnDManual.listItems}
                isOpen={openTitle === RnDManual.title}
                onToggle={() => handleToggle(RnDManual.title)}
              />
            )}
          </div>
          <div className="container-content">
            {HOITPolicy && (
              <ContentBankCard
                title={HOITPolicy.title}
                listItems={HOITPolicy.listItems}
                isOpen={openTitle === HOITPolicy.title}
                onToggle={() => handleToggle(HOITPolicy.title)}
              />
            )}
          </div>
        </div>

        <div className="card-title-item-header mx-auto">
          <div className="card-title-header">
            <div className="user-info">
              <div className="avatar">
                <img
                  className="content-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRklEQVR4nO2YQUgWQRTHf59ahGJRGHQLunkIicJTUacIkgQJOiaeqotRR7saQhFFh6JjFEjdoksdhKRD4CHKQ5Ag0q0kVChIsUYG/h8Mml+73+zMrLYPHh+733v/N7/dmd03C5VtLTMB/RNwYDuAmJgwRh5KNxqMCQwy7fzuD1BnQ8FQunbwH2PcGRMYhFgwJgJIFBgTCSQ4jIkIYi0YTGyQYDApQILApAIpHCbGmz2rTxdRsGhrtjcrHUj0cZgKpFgz1R2RVVOrYDPV1PrfppYp2DezCqRsU6sbuLwdQLwtBUgnMAxMAT/lUzpn/ys9yEHgNrDY4GGwqBgbm/ypVbcacBQYAd4Cq07MG6AP6JL36Vz9/1XljEijlhJkft35ZWAc6G1Q7xjwWNPNzZ33BfGxZWk/A4aAfTly24EB4IlzEZKBLEg7D8Df9vVW4zsJQWalfdhD44g0ZlKCTEj7jIfGOWm8SrHY7Xqw9lDHVz1AbkjjXgqQ+8od1PELD5BJaVzwBfGxQ9JeAtqayN8NrAC/s3y8C/1mfy/9s03kXlKuvSukBrku/dc582r6jOquuaQge4EfwB+gJ0feeY3rK7CrLE3jqGq8A1oyxHcAc8qxHTFlAdkDfFGdKxniHyj2A7CzbG38CXW0K8DJBnEXNZ5fOadi1P3ImGp922SQ/U6jeS2vuIngL4FWrY+nThN42hnHoANxt5mrZCL5LdXbATzXOfsku+OsCeuPsmyiymItwE2B1AHs29vuBreknVJ7/hk4/q/oNbSt642DLNtOAAAAAElFTkSuQmCC"
                  alt="privacy-policy"
                />
              </div>

              <p className="email">Procurement</p>
            </div>
          </div>
        </div>
        <div className="all-box">
          <div className="container-content">
            {PoliciesandGuidelines && (
              <ContentBankCard
                title={PoliciesandGuidelines.title}
                listItems={PoliciesandGuidelines.listItems}
                isOpen={openTitle === PoliciesandGuidelines.title}
                onToggle={() => handleToggle(PoliciesandGuidelines.title)}
              />
            )}
          </div>
          <div className="container-content">
            {StandardOperatingProcedures && (
              <ContentBankCard
                title={StandardOperatingProcedures.title}
                listItems={StandardOperatingProcedures.listItems}
                isOpen={openTitle === StandardOperatingProcedures.title}
                onToggle={() => handleToggle(StandardOperatingProcedures.title)}
              />
            )}
          </div>
          <div className="container-content">
            {FormsTemplates && (
              <ContentBankCard
                title={FormsTemplates.title}
                listItems={FormsTemplates.listItems}
                isOpen={openTitle === FormsTemplates.title}
                onToggle={() => handleToggle(FormsTemplates.title)}
              />
            )}
          </div>
          <div className="container-content">
            {ChecklistsReferenceDocuments && (
              <ContentBankCard
                title={ChecklistsReferenceDocuments.title}
                listItems={ChecklistsReferenceDocuments.listItems}
                isOpen={openTitle === ChecklistsReferenceDocuments.title}
                onToggle={() =>
                  handleToggle(ChecklistsReferenceDocuments.title)
                }
              />
            )}
          </div>
        </div>
      </div>
      <h1 className="text-xl font-bold text-center mt-5 mb-5">
        Latest Uploads
      </h1> */}
      </div>
    </div>
  );
};

export default ContentBank;
