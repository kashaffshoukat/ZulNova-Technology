import TopSectionComponent from "../../../components/TopSectionComponent";
import AllTeam from "../../../components/AllTeam";
import Page from "../../../../src/components/page/Page";
import CeoSection from "../../../components/CeoSection";
import { teampic } from "../../../assets";
import MainTeam from "./MainTeam";

const Team = () => {
  return (
    <Page title="Saeedan Team">
      <div className="md:px-8 md:py-12">
        <TopSectionComponent
          description={` We're a team of makers, thinkers, and explorers. We approach
              work and play with curiosity and experimentation, using what we
              learn to create meaningful digital products that connect with
              people, just like you.`}
          head1={"Team"}
          head2={"About Our"}
          head3={"Team"}
          picture={teampic}
        />
        <MainTeam />
        <CeoSection />
      </div>
      <AllTeam />
    </Page>
  );
};

export default Team;
