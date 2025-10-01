import React from "react";

function OfficeLocations() {
  const officeData = [
    {
      id: 1,
      name: "Lote",
      address:
        "D-1/2, MIDC,Lote Parshuram,Taluka Khed, 415722 District: Ratnagiri Maharashtra.India.",
      phone: "02356-664000",
      imageSrc: "/images/Office1.png",
    },
    {
      id: 2,
      name: "Dombivli",
      address:
        "B-27, Phase 1 MIDC.Dombivli (East), 421203 District Thane.Maharashtra. INDIA",
      phone: "02516162290",
      imageSrc: "/images/Office2.png",
    },
    {
      id: 3,
      name: "Panoli",
      address:
        "Plot No. 3525 GIDC Estate. Panoli–394 116 District: Bharuch Gujarat. INDIA",
      phone: "02646-6672224",
      imageSrc: "/images/Office3.png",
    },
    {
      id: 4,
      name: "Sayakha",
      address:
        "Plot no.C 393 to c 396,Sayakha Industrial Estate,Argama Zone Taluka: Vagra, District: Bharuch,State: Gujarat-392140",
      phone: "02642-698000",
      imageSrc: "/images/Office4.png",
    },
  ];

  return (
    <div className="main-section-office-locations mb-0">
      <div className="office-locations-container">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
            {officeData.map((office) => (
              <div className="col" key={office.id}>
                <div
                  className="office-card card h-100"
                  style={{ border: "none" }}
                >
                  <div className="office-card-wrapper">
                    <img
                      src={office.imageSrc}
                      className="office-card-image"
                      alt={`Office ${office.id}`}
                    />

                    {/* Overlay that appears on hover */}
                    <div className="office-card-overlay">
                      <div className="office-card-content">
                        <h5 className="office-card-title">{office.name}</h5>
                        <p className="office-card-address">{office.address}</p>
                        <p className="office-card-phone">
                          <small>{office.phone}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeLocations;
