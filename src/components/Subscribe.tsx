import { FormEvent } from "react";

const Subscribe = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="subscribe">
      <h2>Start learning by creating free account and get register</h2>
      <img src="/assets/girl-thinking.png" alt="a girl thinking with books" />
      <form>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your email address" />
        <input type="submit" value="Subscribe" className="btn btn-primary" onClick={handleSubmit} />
      </form>
    </section>
  );
};

export default Subscribe;
