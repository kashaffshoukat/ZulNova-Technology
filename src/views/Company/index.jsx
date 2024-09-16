import Problem from "./Problem";
import Unleash from "./Unleash";
import Page from "../../components/page";
import CEO_Section from "../../components/CeoSection";
import Set_Apart from "./SetApart";
import GetInTouch from "../../components/GetInTouch/GetInTouch";

const Company = () => {
  return (
    <Page title="Saeedan Company">
      <Unleash />
      <Problem />
      <CEO_Section />
      <div className="py-4">
      <Set_Apart />
      </div>
      <GetInTouch />
    </Page>
  );
};

export default Company;
