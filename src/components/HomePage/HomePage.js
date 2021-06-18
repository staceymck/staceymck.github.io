import React from 'react';
import Hero from '../Hero/Hero';
import SplitPane from '../SplitPane/SplitPane';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import TechList from '../TechList/TechList';
import SocialBlock from '../SocialBlock/SocialBlock';
import Pattern from '../ThemedSvg/Pattern';
import Color from '../ThemedSvg/Color';
import Zoo from '../ThemedSvg/Zoo';
import Volunteer from '../ThemedSvg/Volunteer';
import CardWrapper from '../CardWrapper/CardWrapper';
import ProjectCard from '../ProjectCard/ProjectCard';
import PostCard from '../PostCard/PostCard';
import PostsWrapper from '../PostsWrapper/PostsWrapper';
import LinkButton from '../Button/LinkButton';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <SectionWrapper 
        id="about"
        content={
          <SplitPane 
            left={<Pattern hideOnSmallMedScreens={true}/>}
            right={
              <>
                <h1>About</h1>
                <SocialBlock />
                <p>If I really try to trace it back to the beginning, I'd say my tech journey started with spending hours on Microsoft Paint as a kid.</p>
                <p>MS Paint led to experimenting with Adobe programs, which led to taking on graphic design and creative marketing roles at nonprofits. In the nonprofit field I learned how tech can be a game-changer for
                  organizations, opening up paths to enhanced productivity, problem-solving, and innovation. 
                </p>
                <p>
                  Energized by this potential, I made the switch to fullstack development. My background as a communicator and designer continue to play a 
                  role in my work as I collaborate with others and seek to create beautiful user experiences.
                </p>
                <p>In my free time, you'll likely find me painting, browsing at the local library, or
                  petting a neighborhood cat while I'm out for a walk.</p>
                <h2>Technologies:</h2>
                <TechList />
                
              </>
            }
          />
        } 
        grayBg={true}
      />

      <SectionWrapper 
        id="projects"
        content={
          <div className="ProjectsWrapper">
            <h1>Projects</h1>
            <CardWrapper>
              <ProjectCard 
                name="Collab Color"
                tech="React + Rails API"
                img={<Color />}
                linkTo={"/collab-color"}
              />
              <ProjectCard 
                name="VolunteerLog"
                tech="Ruby on Rails"
                img={<Volunteer />}
                linkTo={"/volunteer-log"}
              />
              <ProjectCard 
                name="STL Zoo Map"
                tech="JavaScript + Rails API"
                img={<Zoo />}
                linkTo={"/zoo-map"}
              />
            </CardWrapper>
          </div>
        }
      />
     
      <SectionWrapper 
        id="posts"
        content={
          <>
            <h1>Featured Posts</h1>
            <PostsWrapper>
              <PostCard 
                title="4 tips for your first hackathon"
                teaser="Top takeaways from my first hackathon experience to help you make the most of yours"
                link="https://staceymck.medium.com/4-tips-for-your-first-hackathon-f9cbbc9c4096"
              />
              <PostCard 
                title="Customizing React Color’s Sketch Picker to display recently used colors"
                teaser="Learn how to utilize React state to create a palette-like experience for users working with a color picker"
                link="https://staceymck.medium.com/customizing-react-colors-sketch-picker-to-display-recently-used-colors-b1eb09724ed6"
              />
              <PostCard 
                title="Making an interactive SVG map with OO-JavaScript"
                teaser="Walk through the process and logic involved in triggering actions based on user interaction with an SVG in a vanilla JavaScript context"
                link="https://staceymck.medium.com/making-an-interactive-svg-map-with-oo-javascript-2c5abc73481c"
              />
              <PostCard 
                title="An intro to partials and helpers in Ruby on Rails"
                teaser="Reduce code repetition and improve separation of concerns by creating custom helper methods and partial templates"
                link="https://staceymck.medium.com/an-intro-to-partials-and-helpers-in-ruby-on-rails-10d62d85da24"
              />
            </PostsWrapper>
            <div className="Center">
                <LinkButton 
                  text="View all"
                  type="Secondary"
                  link="https://staceymck.medium.com/"
                  wide={true}
                />
            </div>
          </>
        }
        grayBg={true}
      /> 
    </main>
    
  )
}

export default HomePage;