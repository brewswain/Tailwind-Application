import React from "react";

import HeroText from "../../components/hero-text/hero-text.component";

import "./home.styles.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroText>
        Hey<span className="hero-emphasis">!</span>
      </HeroText>
      <div className="home-page-container">
        <div className="home-page-content">
          <span>
            My name's{" "}
            <a
              href="https://twitter.com/bleecode"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Brandon Lee
            </a>
            , and I think I'd be a great fit for your open position. It's pretty
            easy to just say that with no context, so let the wooing commence!
          </span>
          <img src="" alt="" />
        </div>
      </div>
      <HeroText>
        Why Me<span className="hero-emphasis">?</span>
      </HeroText>
      <div className="home-page-container">
        <div className="home-page-content">
          <span>
            Firstly, the enthusiasm that's felt from when you guys have to
            figure out solutions to challenges that inevitably crop up(That you
            sometimes post on twitter) is something that I believe I can mirror
            pretty easily, since I love challenges as they keep me sharp.
          </span>
          <span>
            Then of course, I'm a fan of great UI systems, and often try to
            learn more about what makes really good UI <em>click</em> . I'm
            currently experimenting with how to more effectively use whitespace
            and minimal design(hence this application being more barebones than
            you'd expect for this posting in particular), which means that i'll
            bring both a natural inquisitiveness and willingness to experiment.
          </span>
          <span>
            Honestly, I could keep waxing poetic about all my qualities that
            make me perfectly fit this position, but for the sake of brevity
            (And also the fact that you guys are probably swamped with
            applications), here's a summary:
            <ul>
              <li>Adaptable</li>
              <li>Constant learner</li>
              <li>Very open to constructive criticism</li>
              <li>Super easy to get along with</li>
              <li>An actual unflappable God of patience</li>
              <li>
                I will always admit if I don't understand or know something, as
                in my opinion that normally saves time and gives me a more
                focused direction to look for answers to my problems.
              </li>
              <li>
                Building off of the last point, I'm also independent about my
                learning, so if I don't know something, after ensuring that my
                team's aware, I'd definitely work on my own to plug any
                knowledge gaps I might have.
              </li>
            </ul>
          </span>

          <span>
            Oh also, I live at GMT-430 so there's an almost unnoticeable overlap
            in timezones. It's essentially EST, but we never get Daylight Saving
            Time here (I live in Trinidad & Tobago).
          </span>
        </div>
      </div>
      <HeroText>
        Why You<span className="hero-emphasis">?</span>
      </HeroText>
      <div className="home-page-container">
        <div className="home-page-content">
          <span>
            Honestly, the fact that I'm willing to write up an application for
            you instead of just applying to other places more traditionally says
            a lot about the type of team you are.
          </span>
          <span>
            That I'm a fan of both Adam and Steve due to their twitter presence
            is definitely a factor. However, beyond just enjoying your twitter
            presence and great insights into design, the quality of tailwind
            itself is a definite Siren Call to me. To know that I get to work on
            a codebase that I 100% support and would be proud of? Insane.
          </span>

          <span>
            Also, due to how relatively new on the block Tailwind is, this means
            that there'll be more responsibilities hoisted on me. That's
            actually a large draw for me!
          </span>
          <span>
            That also means that there's the possibility of learning new
            technologies and that's something that's forever exciting to me!
            There's so many exciting happenings in the tech industry
            (WebAssembly, Next.JS really starting to step it up, etc) and I'd
            just love to be a part of a team that's so clearly ready to begin
            branching out into more and more platforms (I'm super excited to
            potentially assist with the React library for instance).
          </span>

          <span>
            Finally, the fact that you offered this non-standard approach to
            applying! This immediately appealed to me as it suggests flexibility
            in approach to solving problems, and I'm super excited to be part of
            a team that would take an approach like this.
          </span>
        </div>
      </div>
      <HeroText>
        Here are my Strengths<span className="hero-emphasis">...</span>
      </HeroText>
      <div className="home-page-container">
        <div className="home-page-content">
          <span>
            From a more technical point of view, My stack seems to be pretty
            compatible with what you guys want as I offer a strong understanding
            of React, a very strong interest in learning Vue (The whole JS in
            HTML as opposed to HTML in JS that you do in React seems really
            interesting to me), and a functional if not extraordinary grasp on
            Node.js/Express.js.
          </span>

          <span>
            I also have knowledge of Python and Django for more backend
            goodness.
          </span>

          <span>
            I've been planning to utilize both Next.js and TypeScript in my
            upcoming projects, so I'll have the familiarity needed to assist
            with the future Tailwind documentation site more easily.
          </span>

          <span>
            No matter the language used, my one constant strength is my sheer
            appreciation for extensibility of code. Refactoring code to help
            avoid repeated code blocks etc. is something that I have practise
            in. I'm also a big fan of clear documentation (Really good job so
            far guys, seriously), so working on ensuring that documentation is
            easy to read, has clear interest points, and is structured well is
            definitely something that I won't mind being a part of.
          </span>
        </div>
      </div>
      <HeroText>
        And my weaknesses<span className="hero-emphasis">.</span>
      </HeroText>
      <div className="home-page-container">
        <div className="home-page-content">
          <span>
            I'll be honest, there are also some (easily surmountable!) problems
            that might affect my initial fit, but they're all easily adjusted
            for from me, and may in fact work out to be healthier for my fit in
            the long run as starting from the ground up in certain areas means
            that I can optimize the direction of my growth for what we'll need
            at Tailwind. Enough damage control though, let's go in!
          </span>
          <span>
            Firstly, I have 0 experience with Laravel. None. Zip, zilch, nada. I
            have extremely limited contact with writing PHP itself, but there'll
            be a definite learning period. Of course, if I find out that I'm
            being considered, I'll take the time to begin learning PHP so that I
            can show you guys where I'm at whenever the next step of selection
            takes place.
          </span>
          <span>
            I also...tend to hyperfixate a bit too much on solving certain
            problems. However I'm constantly working on that aspect of my
            personality, not to mention that working in a team definitely helps
            in that regard.
          </span>
          <span>
            This one's gonna sound funny, but it would affect the interview
            process itself. My webcam's currently broken. Yeah. Me getting a
            replacement is simply unviable for the interview phase due to
            COVID-9 so, there's that. I have a pretty good desktop microphone
            though.
          </span>

          <span>
            Again, for the sake of brevity, I'll end it here, we can discuss
            both my strengths and weaknesses in greater detail come interview
            time!
          </span>
        </div>
      </div>
      <HeroText>
        Project Examples<span className="hero-emphasis">!</span>
      </HeroText>{" "}
      <div className="home-page-container">
        <div className="home-page-content">
          <span>
            For more project information,{" "}
            <a
              href="https://brandonlee.tech/#projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              feel free to check my portfolio out!
            </a>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
