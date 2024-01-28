import React from "react";
import { Card, ActionButton } from "../../components";
import { ActionButtonEnumType } from "../../types/global.types";
import CopyIcon from "../../assets/copy";
import DownloadIcon from "../../assets/downloadIcon";
import URLIcon from "../../assets/images/url.svg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="aboutPage">
      <Card>
        <div className="aboutPage__cardHeader">
          Front-end developer
          <div className="avaiblity">
            <span className="avaiblity__icon"></span>
            AVAILABLE FOR JOB
          </div>
        </div>

        <div className="aboutPage__content">
          <div className="aboutPage__text">
            <h1>Simuratli Eljan</h1>
            <p>I design digital products with great experience.</p>
            <div className="aboutPage__actions">
              <ActionButton
                text="Download CV"
                onClick={() => {
                  console.log("download");
                }}
                type={ActionButtonEnumType.DOWNLOAD}
                icon={<DownloadIcon />}
              />
              <ActionButton
                text="Copy email"
                onClick={() => {
                  console.log("copy");
                }}
                type={ActionButtonEnumType.COPY}
                icon={<CopyIcon />}
              />
            </div>
          </div>
          <div className="aboutPage__image">
            <img
              src="https://s3-alpha-sig.figma.com/img/f8a6/9d59/bf63c3bada14a5430e8685d9999e7be6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gYe-lcsYv-z~qY07vVmNVmw2zqwLhIXfzZOoLRqod6O32pWG4BCDHYOfGVKUGECpRgR7BXM~QxyHQIV4PuL1g0TsWoMQfEvWBHYqTSNHId723Honidc1x6VwXZx6kxcwDnPSVxSaYZcE-2vrvL6sz50pjUdMHT20-XRkECsWv1lyfPTsTt39lwRachqBuN9MRe28kiym75Mi1ofhQzkKAkKh8BCQpsuwM5qRlLDewr8nEzefeziMvpE0gW~iHKU8gSH4H7LOx35hUR5UuGpPcpu8y-NE072mUcteZCL3Zx~7rMTFE0k63c0kk-Qm076xjivybS6jZHqTEZQ1Uvd0SA__"
              alt=""
            />
          </div>
        </div>
      </Card>

      <div className="aboutPage__social">
        <Card>
          <div className="aboutPage__social__card">
            <h1>Medium</h1>
            <Link to="/">
              <img src={URLIcon} alt="URL ICON" />
            </Link>
          </div>
        </Card>
        <Card>
          <div className="aboutPage__social__card">
            <h1>Github</h1>
            <Link to="/">
              <img src={URLIcon} alt="URL ICON" />
            </Link>
          </div>
        </Card>
        <Card>
          <div className="aboutPage__social__card">
            <h1>Twitter</h1>
            <Link to="/">
              <img src={URLIcon} alt="URL ICON" />
            </Link>
          </div>
        </Card>
        <Card>
          <div className="aboutPage__social__card">
            <h1>Whatsapp</h1>
            <Link to="/">
              <img src={URLIcon} alt="URL ICON" />
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
