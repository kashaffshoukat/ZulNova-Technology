import Page from "../../components/page";
import LatestProjects from "./LatestProjects";
import OurPortfolio from "./OurPortfolio";

const Portfolio = () => {
  return (
    <Page title="Saeedan Portfolio">
      <OurPortfolio />
      <LatestProjects />
    </Page>
  );
};

export default Portfolio;
