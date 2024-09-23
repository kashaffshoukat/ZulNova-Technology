import Problem from "./Problem";
import Unleash from "./Unleash";
import Page from "../../components/page";
import CEO_Section from "../../components/CeoSection";
import Set_Apart from "./SetApart";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import CustomTopComponent from '../../components/CustomTopComponent'

const Company = () => {


  return (
    <Page title="Saeedan Company">
      {/* <Unleash /> */}
      <CustomTopComponent title1={'hi'} title2={'by'} description={'hhh'} btnLabel={'contajafhjhgj'} />
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
