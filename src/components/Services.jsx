import { styled } from "styled-components";
import servece1 from "../assets/service1.png";
import servece2 from "../assets/service2.png";
import servece3 from "../assets/service3.png";
import servece4 from "../assets/service4.png";

export default function Services() {
  const data = [
    {
      image: servece1,
      title: "Choose Destination",
      description: "lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: servece2,
      title: "Explore the Place",
      description: "lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: servece3,
      title: "Start Yout Journey",
      description: "lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: servece4,
      title: "Let's Enjoy",
      description: "lorem Ipsum is simply dummy text of the printing setting",
    },
  ];
  return (
    <Section id="services">
      <div className="services">
        {data.map(({ image, title, description }) => {
          return (
            <div className="service" key={title}>
              <img src={image} alt="service" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 8rem 4rem;
  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .service {
      padding: 1.5rem 2rem;
      background-color: var(--card-grey);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      h3 {
        color: var(--primary-text);
      }
      p {
        color: var(--secondary-text);
      }
      img {
        height: 128px;
        width: 128px;
      }
      transition: var(--default-transition);
      &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        background-color: white;
      }
    }
  }
`;
