import { services } from "../data";
import Title from "./title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <article key={service.id} className="service">
              <span className="service-icon">
                <i className={"fas fa-" + service.className + " fa-fw"}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{service.text}</h4>
                <p className="service-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
