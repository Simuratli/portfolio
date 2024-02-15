import React,{useEffect,useState} from "react";
import { Card, ActionButton } from "../../components";
import { ActionButtonEnumType } from "../../types/global.types";
import CopyIcon from "../../assets/copy";
import DownloadIcon from "../../assets/downloadIcon";
import URLIcon from "../../assets/images/url.svg";
import { Link } from "react-router-dom";
import  {getUser} from "../../client/client";



const About = () => {

  const [user, setUser] = useState({})

  useEffect(() => {
    getUser()
			.then((data) => setUser(data[0]))
			.catch(console.error);
  }, [])

  console.log(user,'user data')
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
              src="https://blog.prototion.com/content/images/2021/09/peep-1.png"
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
