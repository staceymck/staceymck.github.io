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
import EncryptImg from './assets/encrypt.png';
import SwapShiftImg from './assets/shift-swap.png';
import IntegrationImg from './assets/integration.png';
import IntegrationThumb from './assets/integration-thumbnail.png';
import ShiftSwapThumb from './assets/shift-swap-thumbnail.png';
import EncryptThumb from './assets/encrypt-thumbnail.png';
import Modal from './components/Modal/Modal';
import Hero from './components/Hero/Hero';
import SplitPane from './components/SplitPane/SplitPane';
import SectionWrapper from './components/SectionWrapper/SectionWrapper';
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
      title: "Shift Swap Mobile Rebuild",
      tech: "Hotwire + Ruby on Rails",
      img: SwapShiftImg,
      thumbnail: ShiftSwapThumb,
      alt: "Screenshot of a mobile app showing shifts available to pick up",
      description: "The dev team was tasked with rebuilding a React Native mobile app in Ruby on Rails and Hotwire. I built out the features related to vacant shift claiming and shift swapping.",
      techHighlights: [
        "Developed a technical spec outlining the UI and functionality needed to achieve feature parity; used Figma to create mockups of screen layouts",
        "Built new frontend views using Rails and Hotwire (Turbo + StimulusJS) that integrated with existing backend models",
        "Styled the new views using TailwindCSS"
      ],
      links: []
    },
    {
      id: 2,
      title: "SFTP Encryption at Rest",
      tech: "Ruby, Ruby on Rails",
      img: EncryptImg,
      thumbnail: EncryptThumb,
      alt: "Screenshot of the settings for an SFTP importer",
      description: "To add an extra layer of security to SFTP imports, I built a feature that lets clients store their data in an encrypted format while it is 'at rest' on their SFTP server. The data is then decrypted after being imported.",
      techHighlights: [
        "Created GPG key pairs for encrypting and decrypting data",
        "Utilized a Ruby wrapper for the GPGME library to handle decryption and key management within a Rails-based app",
        "Wrote regression tests using Minitest and performed QA using an external SFTP server",
        "Developed a user-facing guide that walks clients through the technical steps of encrypting their data"
      ],
      links: [
        {text: "User guide", link: "https://help.workforce.com/en/articles/7861361-encryption-at-rest-for-sftp-imports"},
      ]
    },
    {
      id: 3,
      title: "Payroll Integration - Staff Importer",
      tech: "Ruby, Ruby on Rails",
      img: IntegrationImg,
      thumbnail: IntegrationThumb,
      alt: "Screenshot of the settings for a payroll integration",
      description: "As part of onboarding for a new junior developer, I paired with them to build a new API integration that lets clients import staff data from a third-party payroll system.",
      techHighlights: [
        "Used Postman, third-party API docs, and a sandbox environment to develop and QA the integration",
        "Wrote a comprehensive test suite that used WebMock to stub external HTTP requests",
        "Mentored a junior team member through code review, pairing sessions, and ad hoc troubleshooting"
      ],
      links: []
    },
    {
      id: 4,
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
        {text: "Video demo", link: "https://youtu.be/1vj96n49h8c"},
        {text: "GitHub", link: "https://github.com/staceymck/collab-color"}
      ]
    }, 
    {
      id: 5,
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
        {text: "Video demo", link: "https://youtu.be/degqCx92P_c"},
        {text: "GitHub", link: "https://github.com/staceymck/volunteer-log"}
      ]
    },
    {
      id: 6,
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
        {text: "Video demo", link: "https://youtu.be/oFuOIL-6_yo"},
        {text: "GitHub", link: "https://github.com/staceymck/stl-zoo-map-frontend"}
      ]
    }
  ]

  const techSkills = [
    "Ruby", 
    "Ruby on Rails",
    "Hotwire (Stimulus + Turbo)",
    "JavaScript",
    "React + Redux",
    "CSS + TailwindCSS",
    "Sorbet",
    "Flow",
    "HAML + ERB",
    "HTML5",
    "Git"
  ]

  const devPlatforms = [
    "GitHub",
    "JIRA",
    "CircleCI",
    "Airbrake",
    "HackerOne",
    "Metabase",
    "Postman",
    "Confluence"
  ]

  const uxDesignTools = [
    "Figma",
    "Illustrator",
    "InDesign",
    "Canny",
    "Intercom",
    "Amplitude"
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
                    in the tech field.
                  </p>
                  <p>
                    Development challenges sparked my interest and led me to dive into the nuts and bolts of creating dynamic web apps. 
                    I made the jump into development full-time and now work across the stack at a SaaS company, primarily using Ruby and JavaScript.
                  </p>
                  <p>
                    When I'm not at my computer, you'll likely find me painting, bouldering, or walking around Chicago while listening to audiobooks.
                  </p>

                  <h2>Skills and experience</h2>
                  <div className="Skills">
                    <h3>Languages, frameworks, libraries, and tools:</h3>
                    <BulletedList 
                      listItems={
                        techSkills.map((skill, i) => {
                          return <li key={i}>{skill}</li>
                        })
                      }
                      listStyle="Skill"
                    />

                    <h3>Development platforms:</h3>
                    <BulletedList 
                      listItems={
                        devPlatforms.map((skill, i) => {
                          return <li key={i}>{skill}</li>
                        })
                      }
                      listStyle="Skill"
                    />

                    <h3>User engagement and design:</h3>
                    <BulletedList 
                      listItems={
                        uxDesignTools.map((skill, i) => {
                          return <li key={i}>{skill}</li>
                        })
                      }
                      listStyle="Skill"
                    />
                  </div>
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
                    alt={project.alt}
                    thumbnail={project.thumbnail}
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
            thumbnail={activeProject.thumbnail}
            alt={activeProject.alt}
            description={activeProject.description}
            highlightsList={
              <BulletedList 
                listItems={
                  activeProject.techHighlights.map((highlight, i) => {
                    return <li key={i}>{highlight}</li>
                  })
                }
                listStyle="Modal"
              />
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
              <PostCard
                title="3 ways comms skills can make you a better developer"
                teaser="Pick up tips and tools from the comms field to boost your day-to-day dev work"
                link="https://medium.com/@staceymck/3-ways-comms-skills-can-make-you-a-better-developer-a31664354826"
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