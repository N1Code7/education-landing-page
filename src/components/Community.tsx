import { useEffect } from "react";
import Button from "./Button";

const Community = () => {
  useEffect(() => {
    console.log(document.querySelector(".community .ellipse:nth-of-type(5)"));
  }, []);

  return (
    <section className="community">
      <div className="text">
        <h2>Start growing with our community</h2>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <Button type="tertiary">Join community</Button>
      </div>
      <img
        src="/assets/girl-pointing-at-action.png"
        alt={`a girl pointing at the "join community" button`}
      />
      <div className="ellipses">
        <img className="ellipse" src="/assets/ellipse-1.png" alt="a girl in ellipse" />
        <img className="ellipse" src="/assets/ellipse-2.png" alt="a girl in ellipse" />
        <img className="ellipse" src="/assets/ellipse-3.png" alt="a boy in ellipse" />
        <img className="ellipse" src="/assets/ellipse-4.png" alt="a boy in ellipse" />
      </div>
    </section>
  );
};

export default Community;
