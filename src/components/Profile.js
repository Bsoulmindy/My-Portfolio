import "../styles/Profile.css";
import { getData, image, media_links } from "../data/data.js";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
import Framework from "./Framework";

function Profile() {
    const { language } = useContext(LanguageContext);

    const data = getData(language);

    return (
        <>
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
        </>
    );
}

export default Profile;
