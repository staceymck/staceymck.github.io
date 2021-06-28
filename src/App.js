import React, { useState } from 'react';
import './App.scss';
import './styles/_color-themes.scss';
import Navbar from './components/Navbar/Navbar';
import LinkButton from './components/Button/LinkButton';
import LinkBlock from './components/LinkBlock/LinkBlock';
import Footer from './components/Footer/Footer';
import ProjectPage from './components/ProjectPage/ProjectPage';
import BulletedList from './components/BulletedList/BulletedList';
import VolunteerImg from './assets/volunteer-log.png';
import ColorImg from './assets/collab-color.png';
import ZooImg from './assets/zoo-map.png';
import Modal from './components/Modal/Modal';
import Hero from './components/Hero/Hero';
import SplitPane from './components/SplitPane/SplitPane';
import SectionWrapper from './components/SectionWrapper/SectionWrapper';
import TechList from './components/TechList/TechList';
import SocialBlock from './components/SocialBlock/SocialBlock';
import Pattern from './components/ThemedSvg/Pattern';
import Color from './components/ThemedSvg/Color';
import Zoo from './components/ThemedSvg/Zoo';
import Volunteer from './components/ThemedSvg/Volunteer';
import CardWrapper from './components/CardWrapper/CardWrapper';
import ProjectCard from './components/ProjectCard/ProjectCard';
import PostCard from './components/PostCard/PostCard';
import PostsWrapper from './components/PostsWrapper/PostsWrapper';

const App = () => {
  const [theme, setTheme] = useState('Purple');
  const [modalVisibility, setModalVisibility] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Collab Color",
      tech: "React + Rails API",
      svgImg: <Color />,
      img: ColorImg,
      alt: "Screenshot of the Collab Color app featuring a half-colored square canvas covered in triangles beside a color picker.",
      description: "Users can contribute to a constantly evolving gallery page through this click-to-color app featuring low-poly style art. Select from 3 SVG-based canvases and add colors. Finished pieces are displayed on a gallery page enabled with pagination and sorting options.",
      techHighlights: [
        "Utilized Redux reducers and action creators to centralize state management",
        "Applied Thunk as Redux middleware to handle asynchronous actions like API calls",
        "Designed SVGs in Illustrator to serve as the canvas templates",
        "Built a Rails backend API with a PostgreSQL database to store and retrieve finished images"
      ],
      links: [
        {text: "Live", link: "https://collab-color.netlify.app"},
        {text: "Demo", link: "https://youtu.be/1vj96n49h8c"},
        {text: "GitHub", link: "https://github.com/staceymck/collab-color"}
      ]
    }, 
    {
      id: 2,
      title: "VolunteerLog",
      tech: "Ruby on Rails",
      svgImg: <Volunteer />,
      img: VolunteerImg,
      alt: "Screenshot of a volunteer profile page in the VolunteerLog app",
      description: "This app helps volunteer coordinators track and report on volunteer activity in their organization and features a central dashboard with monthly, yearly, and cummulative stats. Users can create volunteer profiles and roles while tracking individual volunteer engagements.",
      techHighlights: [
        "Styled the site with custom CSS based on mockups designed with Figma",
        "Enabled third-party login through GitHub using OmniAuth; used BCrypt and sessions to manage user authentication",
        "Utilized ActiveRecord query methods to develop a dashboard displaying core stats on engagement levels",
        "Developed partial templates for common elements like forms and error notifications to reduce code repetition"
      ],
      links: [
        {text: "Demo", link: "https://youtu.be/degqCx92P_c"},
        {text: "GitHub", link: "https://github.com/staceymck/volunteer-log"}
      ]
    },
    {
      id: 3,
      title: "STL Zoo Map",
      tech: "JavaScript + Rails API",
      svgImg: <Zoo />,
      img: ZooImg,
      alt: "Screenshot of a volunteer profile page in the VolunteerLog app",
      description: "This app features an interactive map based on the St. Louis Zoo that helps users discover the exhibits in the zoo's five zones. Users can also leave a review and browse reviews left by others.",
      techHighlights: [
        "Stored user-submitted images via Cloudinary and attached them to database records via ActiveStorage",
        "Created a frontend with object-oriented JavaScript and a Rails API to structure the app as a single-page application",
        "Used ActiveRecord scope methods and the gem Kaminari to enable sorting features and pagination for reviews"
      ],
      links: [
        {text: "Demo", link: "https://youtu.be/oFuOIL-6_yo"},
        {text: "GitHub", link: "https://github.com/staceymck/stl-zoo-map-frontend"}
      ]
    }
  ]

  const handleClick = theme => {
    setTheme(theme)
  }

  const handleModalVisibility = (id) => {
    setModalVisibility(!modalVisibility)
    setActiveProject(projects.find(project => project.id === id))
  }

  return (
    <div className={theme}>
      <Navbar onClick={handleClick}/>
      <div className="Spacer"></div>
      <main > 
        <Hero />
        <SectionWrapper 
          id="about"
          content={
            <SplitPane 
              left={<Pattern />}
              right={
                <>
                  <h1>About</h1>
                  <SocialBlock />
                  <p>
                    I started my career in the nonprofit field, where I became familiar with the concept of "wearing many hats". 
                    My roles spanned multiple disciplines, from design work to public relations. 
                    This exposure also introduced me to website design and the creative problem-solving involved
                    in frontend development.
                  </p>
                  <p>
                    Development challenges sparked my interest and led me to dive into the nuts and bolts of creating dynamic web apps. 
                    I decided to make the jump into development work full-time and kickstarted the transition with five months of 
                    intensive training through Flatiron School's software engineering program.
                  </p>
                  <p>
                    When I'm not at my computer, you'll likely find me painting, playing tennis, or browsing the shelves of the local library.
                  </p>

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
          <>
            <h1>Projects</h1>
            <CardWrapper>
              {projects.map(project => {
                return (
                  <ProjectCard
                    onClick={() => handleModalVisibility(project.id)}
                    title={project.title}
                    tech={project.tech}
                    svgImg={project.svgImg}
                    key={project.id}
                  />
                )
              })}
            </CardWrapper>
          </>
        }
      />

      {/* Project Modal */}
      {modalVisibility && 
        <Modal onModalClose={() => setModalVisibility(false)}> 
          <ProjectPage 
            title={activeProject.title}
            tech={activeProject.tech}
            img={activeProject.img}
            alt={activeProject.alt}
            description={activeProject.description}
            highlightsList={
              <BulletedList>
                {activeProject.techHighlights.map((highlight, i) => {
                  return <li key={i}>{highlight}</li>
                })}
              </BulletedList>
            }
            linkBlock={
              <LinkBlock>
                {activeProject.links.map((link, i) => {
                  return <LinkButton key={i} text={link.text} type="PrimaryInverse" link={link.link} />
                })}
              </LinkBlock>
            }
          />
        </Modal>
      }

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

    <Footer /> 

    </div>
  );
}

export default App;