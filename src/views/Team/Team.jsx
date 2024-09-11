import React from "react";
import TopSectionComponent from "../../components/TopSectionComponent";
import CeoSection from "../../components/CeoSection";
import AllTeam from "../../components/AllTeam";
import Page from "../../components/page";
import { teampic } from "../../assets";
const Team = () => {
  return (
    <Page title="Saeedan Team">
      <div className="md:px-20 md:py-12 px-2 py-2">

        <TopSectionComponent description={` We're a team of makers, thinkers, and explorers. We approach
              work and play with curiosity and experimentation, using what we
              learn to create meaningful digital products that connect with
              people, just like you.`} head1={'Team'} head2={'About Our'} head3={'Team'} picture={teampic} />
        <CeoSection />
        <AllTeam />
      </div>
    </Page>
  );
};

export default Team;
