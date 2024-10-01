import TopSectionComponent from "../../components/TopSectionComponent";
import { service1 } from "../../assets";

const ServicesTop = () => {
  return (
    <div className="md:px-8 md:py-12">
      <TopSectionComponent
        head1={"We Engineer Software Solutions"}
        head2={"Services and Solutions at"}
        head3={"Saeedan Technology"}
        description={
          "Imagine a tech-powered future for your business with our guidance and expertise. Unleash the potential of innovative solutions tailored just for you."
        }
        picture={service1}
      />
    </div>
  );
};

export default ServicesTop;
