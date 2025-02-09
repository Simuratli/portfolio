import React, { useEffect, useState } from "react";
import { Card, ActionButton } from "../../components";
import { ActionButtonEnumType } from "../../types/global.types";
import CopyIcon from "../../assets/copy";
import DownloadIcon from "../../assets/downloadIcon";
import URLIcon from "../../assets/images/url.svg";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
import Transition from "../../animations/Transition";
import { getUser } from "../../client/client";
import { UserPropTypes } from "../../client/api.types";
const About = () => {
  const { setAlert } = useStore();
  const [user, setUser] = useState<UserPropTypes | null>(null);
  useEffect(() => {
    getUser().then((response) => setUser(response));
  }, []);

  const downloadPdf = () => {
    const pdf = "/cv2025.pdf";
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Simuratli Eljan Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyEmailToClipboard = () => {
    const input = document.createElement("input");
    const email = user ? user.gmail : "simuratli@gmail.com"; // Replace with your email address
    input.value = email;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    setAlert(true, "Email copied");
    setTimeout(() => {
      setAlert(false, "");
    }, 1000);
  };

  return (
    <Transition>
      <section className="aboutPage">
        <Card>
          <div className="aboutPage__cardHeader">
            {user && user.jobTitle}
            <div className="avaiblity">
              <span className="avaiblity__icon"></span>
              AVAILABLE FOR JOB
            </div>
          </div>

          <div className="aboutPage__content">
            <div className="aboutPage__text">
              <h1>{user && user.name}</h1>
              <p>{user && user.quote}</p>
              <div className="aboutPage__actions">
                <ActionButton
                  text="Download CV"
                  onClick={downloadPdf}
                  type={ActionButtonEnumType.DOWNLOAD}
                  icon={<DownloadIcon />}
                />
                <ActionButton
                  text="Copy email"
                  onClick={copyEmailToClipboard}
                  type={ActionButtonEnumType.COPY}
                  icon={<CopyIcon />}
                />
              </div>
            </div>
            <div className="aboutPage__image">
              <img
                src="https://blog.prototion.com/content/images/2021/09/peep-1.png"
                alt=""
              />
            </div>
          </div>
        </Card>

        <div className="aboutPage__social">
          {user &&
            user.social.map((soc) => {
              return (
                <Card key={soc._id}>
                  <div className="aboutPage__social__card">
                    <h1>{soc.title}</h1>
                    <Link to={soc.url}>
                      <img src={URLIcon} alt="URL ICON" />
                    </Link>
                  </div>
                </Card>
              );
            })}
        </div>
      </section>
    </Transition>
  );
};

export default About;
