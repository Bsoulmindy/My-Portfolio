import React from "react";
import "../styles/Profile.css";
import { getData } from "../data/data.js";
import { image } from "../data/data.js";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";

function Profile() {
    const { language } = useContext(LanguageContext);

    const data = getData(language);

    return (
        <React.Fragment>
            <section className="profile_container" id="profile">
                <img src={image} alt={data.photo_alt} />
                <div className="profile_infos">
                    <h3>{data.fullname}</h3>
                    <p className="profile_speciality">{data.speciality}</p>
                </div>
            </section>
            <section className="profile_description">
                <p>« {data.description} »</p>
            </section>
        </React.Fragment>
    );
}

export default Profile;
