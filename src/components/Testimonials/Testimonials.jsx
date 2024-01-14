import Slider from "react-slick";
import HeaderTitle from "../HeaderTitle/HeaderTitle";


const settings = {
  dots: true,
  arrows: false,
  loop: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  mobileFirst: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
};

const TestimonialsData = [
  {
    id: 1,
    name: "Samuel",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Micheal",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Jenifer",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/105/105",
  },
];

const Testimonials = () => {
  

  return (
    <section className="bg-white dark:bg-gray-900 dark:text-white py-14 ">
      <div className="container">
        {/* Header */}
        <HeaderTitle subTitle="Testimonial" title="Testimonial" />

        {/* Slider */}
        <div className="max-w-[500px] mx-auto ">
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div key={data.id} data-aos="fade-up">
                <div className="text-center shadow-lg p-4 rounded-xl space-y-3 my-8 mx-5 bg-gray-100 dark:bg-gray-800 relative">
                  <img
                    src={data.img}
                    alt="testimonial img"
                    className="rounded-full block mx-auto"
                  />
                  <p className="text-gray-500 text-sm">{data.text}</p>
                  <h1 className="text-xl font-bold">{data.name}</h1>
                  <p className="text-black/20 text-9xl font-serif absolute right-0 -top-10">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
