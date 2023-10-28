import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Start learning with us now</h1>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam voluptates sed
        beatae?
      </p>
      <Button type="secondary">Start learning</Button>
      <aside>
        <img
          src="/assets/illustration.png"
          alt="illustration where a young boy is reading a book"
        />
      </aside>
    </section>
  );
};

export default Hero;
