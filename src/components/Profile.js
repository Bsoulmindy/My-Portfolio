import React from "react";
import "../styles/Profile.css";
import { getData } from "../data/data.js";
import { image } from "../data/data.js";
import { media_links } from "../data/data.js";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
import { ReactComponent as Download } from "../assets/download.svg";
import Framework from "./Framework";

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
                    <a
                        href={data.resumeURL}
                        target="_blank"
                        className="profile_resume"
                        rel="noreferrer">
                        <div>
                            <Download />
                            {data.resumeDownload}
                        </div>
                    </a>
                </div>
            </section>
            <section className="profile_description">
                <p>« {data.description} »</p>
            </section>
            <section className="profile_media">
                {media_links.map((media, index) => (
                    <Framework
                        key={media.name + "-" + index}
                        name={media.name}
                        image={media.image}
                        link={media.link}
                    />
                ))}
            </section>
        </React.Fragment>
    );
}

export default Profile;
